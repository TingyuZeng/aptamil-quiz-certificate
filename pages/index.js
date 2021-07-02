import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import classes from "../styles/Home.module.scss";
import Base from "../components/Base/Base";
import Button from "../components/Button/Button";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth >= 550) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Aptamil Verification</title>
        <meta name="description" content="Aptamil Training Game Verification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Base mobile={isMobile}>
          <div className={classes.visual}>
            <Image
              src="/main-visual.png"
              alt="A mother holding her baby"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className={classes.body}>
            <div className={classes.logo}>
              <Image
                src="/logo-horizontal.svg"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <h1>爱他美代购培训证书</h1>
            <p>
              欢迎！在这里您可以查询代购是否通过了我们德国爱他美关于婴幼儿奶粉的培训，并获得了证书。请点击“查看详情”了解更多关于此证书的信息，点击“继续”开始查询。
            </p>
          </div>

          <div className={classes.footer}>
            <img className={classes.svg} src="/curve.svg" alt="" />
            <div className={classes.buttons}>
              <Button primary={false}>查看详情</Button>
              <Button>继续</Button>
            </div>
          </div>
        </Base>
      </main>
    </>
  );
}
