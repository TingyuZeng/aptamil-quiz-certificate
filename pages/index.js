import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import classes from "../styles/Home.module.scss";
import Base from "../components/Base/Base";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>爱他美代购培训证书</title>
        <meta name="description" content="Aptamil Training Game Verification" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base>
        <Banner />

        <Content title="爱他美代购培训证书" logo>
          <p style={{ marginBottom: "80px" }}>
            欢迎！在这里您可以查询代购是否通过了我们德国爱他美关于婴幼儿奶粉的培训，并获得了证书。请点击“查看详情”了解更多关于此证书的信息，点击“继续”开始查询。
          </p>
        </Content>

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
