import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import start from "../public/example-start.png";
import pass from "../public/example-pass.png";
import expire from "../public/example-expire.png";
import fail from "../public/example-fail.png";

import Base from "../components/Base/Base";
import Banner from "../components/Banner/Banner";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

import classes from "../styles/Faqs.module.scss";

const Faqs = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>爱他美代购培训证书常见问题</title>
        <meta
          name="description"
          content="Aptamil Training Game Verification - FAQs"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base>
        <Banner
          variants={{
            animate: { height: "20vh", transition: { duration: 1 } },
            exit: { height: "35vh", transition: { duration: 1 } },
          }}
        />

        <Content title={`爱他美代购培训证书\n常见问题`} logo>
          <h2>我们为什么颁发这一证书？</h2>
          <p>
            我们德国爱他美为宣传和/或销售我们产品的代购提供线上培训。这些培训课程围绕不同主题展开，例如我们的品牌、我们的研究、我们的产品、宝宝成长，当然还有质量与安全。通过这种方式，代购能够更好地了解我们的品牌和产品，向他们的客户分享真实且最新的信息。通过我们线上培训的代购得以收获证书。
          </p>

          <h2>证书能说明什么？</h2>
          <p>这一证书证明了该代购对德国爱他美品牌和产品有充分的理解和认知。</p>

          <h2>谁能获得证书？</h2>
          <p>每位通过我们爱他美培训的代购都将获得培训证书。 </p>

          <h2>证书是由谁颁发的？</h2>
          <p>此电子证书由Nutricia Milupa GmbH官方颁布。 </p>

          <h2>证书的有效期多长？</h2>
          <p>
            该证书的有效期为一年。一年后代购需要参与新的培训课程，来更新知识储备。如果他/她成功通过了新的培训，证书有效期也会更新。如果没有通过，证书将随之失效。{" "}
          </p>

          <h2>证书的有效期多长？</h2>
          <p>查询步骤简单快捷：</p>
          <p>1. 在验证页面填写代购的微信名</p>
          <div className={classes.example}>
            <div className={classes.image}>
              <Image
                src={start}
                width={750}
                height={1624}
                alt="开始验证画面"
                placeholder="blur"
              />
            </div>
          </div>
          <p>2. 系统会提供3种查询结果：</p>
          <div className={classes.example}>
            <div className={classes.image}>
              <Image
                src={pass}
                width={750}
                height={1624}
                alt="查询结果1:通过"
                placeholder="blur"
              />
              <p>该代购通过我们的培训并获得了证书</p>
            </div>
            <div className={classes.image}>
              <Image
                src={expire}
                width={750}
                height={1624}
                alt="查询结果2:过期"
                placeholder="blur"
              />
              <p>该代购的证书已过期</p>
            </div>
            <div className={classes.image}>
              <Image
                src={fail}
                width={750}
                height={1624}
                alt="查询结果3:未通过"
                placeholder="blur"
              />
              <p>该代购未通过我们的培训，没有获得证书</p>
            </div>
          </div>
          <div></div>
        </Content>

        <Footer>
          <Button clickHandler={() => router.back()}>返回</Button>
        </Footer>
      </Base>
    </>
  );
};

export default Faqs;
