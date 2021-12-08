const COHORT_NUM = 2;

const COHORT_INFO = {
  1: {
    cohort: 1,
    badgeUrl: "badge_3x_2c1074f131.png",
    courseTime: { cn: "2021年夏季", en: "Summer 2021" },
    courseContent: { cn: "5门课程", en: "5 Courses" },
    courseTitle: { cn: "第一期培训", en: "1st Training Session" },
  },
  2: {
    cohort: 2,
    badgeUrl: "badge_cohort2_a03de67ef7.png",
    courseTime: { cn: "2021年冬季", en: "Winter 2021" },
    courseContent: { cn: "2门课程", en: "2 Courses" },
    courseTitle: { cn: "第二期培训", en: "2nd Training Session" },
  },
};

// We use a different field from cohort 2 to verify a player
// So we have to take this into consideration
export function restructurePlayer(player) {
  if (!player) return null;

  const { certificationDate, isCertifiedCohort1 } = player;

  if (isCertifiedCohort1) return player;

  const newPlayer = { ...player };
  newPlayer.certificationDate = [...player.certificationDate];

  if (Array.isArray(certificationDate) && certificationDate.length > 0) {
    newPlayer.certificationDate = [];
    newPlayer.isCertifiedCohort1 =
      certificationDate[certificationDate.length - 1].date;
  }

  return { ...newPlayer };
}

// Examine if a player has been certified
// return: Array
export function getBadges(player) {
  const certificates = [];

  for (let i = 1; i <= COHORT_NUM; i++) {
    const passedDate = player[`isCertifiedCohort${i}`];
    if (!passedDate) continue;

    const cohortInfo = Object.assign({}, COHORT_INFO[i]);

    const issuedDate = new Date(passedDate);
    const expiredTS = new Date(passedDate).setFullYear(
      issuedDate.getFullYear() + 1
    );
    const expiredDate = new Date(expiredTS);

    cohortInfo.issuedDate = issuedDate;
    cohortInfo.expiredDate = expiredDate;
    cohortInfo.issued_at = issuedDate.toISOString().substr(0, 10);
    cohortInfo.expired_at = expiredDate.toISOString().substr(0, 10);

    certificates.push(cohortInfo);
  }

  return certificates;
}

export function getCertificateInfo(player) {
  const info = {
    name: "",
    certificateNum: "",
    issued_at: "",
    expired_at: "",
    expired: false,
    certificates: [],
  };

  if (!player) return info;

  const certificates = getBadges(player);

  // no certificates found
  if (certificates.length === 0) return info;

  info.certificates = certificates;

  let latestIssuedDate, latestExpiredDate;

  certificates.forEach((certificate) => {
    if (!latestExpiredDate || certificate.expiredDate > latestExpiredDate) {
      latestIssuedDate = certificate.issuedDate;
      latestExpiredDate = certificate.expiredDate;
    }
  });

  info.name = player.nickname;
  info.certificateNum = "0".repeat(6 - player.id.toString().length) + player.id;
  info.issued_at = latestExpiredDate.toISOString().substr(0, 10);
  info.expired_at = latestIssuedDate.toISOString().substr(0, 10);

  // found certificates but expired
  if (latestExpiredDate < new Date()) info.expired = true;

  // found valid certificates
  return info;
}
