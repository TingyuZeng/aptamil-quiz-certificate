import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./ResultPanel.module.scss";
import { useSelector } from "react-redux";
import { getCertificateInfo, restructurePlayer } from "../../util/scoring";
import Badge from "./Badge";

const SORRY = {
  expired: "很遗憾该用户的证书已过期。",
  notPassed: "很遗憾该用户未通过我们的爱他美代购培训，因而没有获得培训证书。",
};

const bear = "ice_bear_533b416102.png";

const ResultPanel = () => {
  const router = useRouter();

  const rawPlayer = useSelector((state) => state.players)[0];
  const player = restructurePlayer(rawPlayer);

  // Check if a player has badges
  const result = getCertificateInfo(player);
  console.log(result);

  // Produce badge elements
  const badgeEls = result.certificates.map((certificate) => (
    <Badge key={certificate.badgeUrl} certificate={certificate} />
  ));

  // Redirect if player is empty
  useEffect(() => {
    let tId;
    if (!player) {
      tId = setTimeout(() => {
        router.push("/verify");
      }, 5000);
    }

    return () => {
      if (tId) {
        clearTimeout(tId);
      }
    };
  }, []);

  // Case "USER NOT FOUND"
  if (!player) {
    return (
      <>
        <div className={classes["title-neg"]}>您没有输入微信名！</div>
        <div className={classes.neg}>
          <p>请返回查询页输入微信名查询。 您将于5秒后自动返回查询页面。</p>
        </div>
      </>
    );
  }

  // Case "NOT PASSED"
  if (result.certificates.length === 0) {
    return (
      <>
        <div className={classes["title-neg"]}>抱歉！</div>
        <div className={classes.neg}>
          <p>{SORRY.notPassed}</p>
        </div>
      </>
    );
  }

  // Case "EXPIRED"
  if (result.expired) {
    return (
      <>
        <div className={classes["title-neg"]}>抱歉！</div>
        <div className={classes.neg}>
          <p>{SORRY.expired}</p>
        </div>
      </>
    );
  }

  // Case "PASSED"
  return (
    <>
      <div className={classes["title-pos"]}>恭喜！</div>
      <div className={classes.congrats}>
        该用户成功通过了我们德国爱他美关于婴幼儿奶粉的代购培训，并且获得了证书。
      </div>

      <div className={classes.pos}>
        <div className={classes.bear}>
          <Image src={bear} layout="fill" objectFit="contain" />
        </div>

        <div className={classes.logo}>
          <Image
            src="/logo-horizontal.svg"
            width={422}
            height={72}
            objectFit="contain"
            unoptimized={true}
          />
        </div>

        <h2>
          成就证书
          <small className={classes.en}>Certificate of Achievement</small>
        </h2>

        <h3>
          证书授予：
          <small className={classes.en}>This certificate is awarded to:</small>
        </h3>

        <div className={classes.details}>
          <div className={classes.detail}>
            <div className={classes.field}>
              <span>用户名</span>
              <small className={classes.en}>Name</small>
            </div>
            <span>{result.name}</span>
          </div>
          <div className={classes.detail}>
            <div className={classes.field}>
              <span>证书号</span>
              <small className={classes.en}>Certificate #</small>
            </div>
            <span>{result.certificateNum}</span>
            {/* {shop_link && (
              <button className={classes.shop}>
                <a href={shop_link} target="_blank" rel="noreferrer">
                  官方货源店铺
                </a>
              </button>
            )} */}
          </div>
          <div className={classes.detail}>
            <div className={classes.field}>
              <span>颁发日期</span>
              <small className={classes.en}>Obtained on</small>
            </div>
            <span>{result.issued_at}</span>
          </div>
          <div className={classes.detail}>
            <div className={classes.field}>
              <span>有效期至</span>
              <small className={classes.en}>Valid until</small>
            </div>
            <span>{result.expired_at}</span>
          </div>

          <div className={classes.badges}>{badgeEls}</div>
        </div>
      </div>
    </>
  );
};

export default ResultPanel;
