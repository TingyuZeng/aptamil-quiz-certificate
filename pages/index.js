import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import classes from "../styles/Home.module.scss";
import Base from "../components/Base/Base";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import BodyText from "../components/BodyText/BodyText";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Aptamil Verification</title>
        <meta name="description" content="Aptamil Training Game Verification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base>
        <BodyText title="爱他美代购培训证书">
          <p>
            欢迎！在这里您可以查询代购是否通过了我们德国爱他美关于婴幼儿奶粉的培训，并获得了证书。请点击“查看详情”了解更多关于此证书的信息，点击“继续”开始查询。
          </p>
        </BodyText>

        <Footer>
          <Button primary={false} clickHandler={() => router.push("/faqs")}>
            查看详情
          </Button>
          <Button clickHandler={() => router.push("/verify")}>继续</Button>
        </Footer>
      </Base>
    </>
  );
}
