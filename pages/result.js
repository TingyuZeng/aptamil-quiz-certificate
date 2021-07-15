import Head from "next/head";
import { useSelector } from "react-redux";
import Banner from "../components/Banner/Banner";
import Avatar from "../components/Result/Avatar";

import Base from "../components/Base/Base";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import ResultPanel from "../components/Result/ResultPanel";

const Result = () => {
  return (
    <>
      <Head>
        <title>爱他美代购培训证书查询结果</title>
        <meta
          name="description"
          content="Aptamil Training Game Verification - Result"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base>
        <Banner
          variants={{
            initial: { height: "30vh" },
          }}
        >
          <h1>查询结果</h1>
        </Banner>

        <Content>
          <Avatar />
          <ResultPanel />
        </Content>

        <Footer />
      </Base>
    </>
  );
};

export default Result;
