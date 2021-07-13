import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Base from "../components/Base/Base";
import Banner from "../components/Banner/Banner";
import Content from "../components/Content/Content";
import Button from "../components/Button/Button";
import classes from "../styles/Verify.module.scss";
import useInput from "../hooks/useInput";
import { useEffect, useRef, useState } from "react";

const backend = process.env.BACKEND;

const Verify = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  const usernameValidateHandler = (value) => value.trim() !== "";
  const {
    enteredValue: enteredUsername,
    enteredValueIsValid: enteredUsernameIsValid,
    placeholder: usernamePlaceholder,
    inputIsInvalid: usernameInputIsInvalid,
    valueChangeHandler: usernameChangeHandler,
    valueInputBlurHandler: usernameInputBlurHandler,
    clearInput: clearUsername,
  } = useInput({
    validateHandler: usernameValidateHandler,
    defaultPlaceholder: "输入微信名",
  });

  // const inputClass = enteredUsernameIsValid
  //   ? `${classes.input} ${classes.unfold}`
  //   : classes.input;
  const inputClass = classes.input;

  let btnClass = classes.action;
  if (usernameInputIsInvalid)
    btnClass = `${classes.action} ${classes.invalidAction}`;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitting!");
    if (!enteredUsernameIsValid) {
      console.log("illegal!");
      return;
    }

    axios
      .get(
        `https://training-game-strapi.herokuapp.com/players?nickname_contains=${enteredUsername}`
      )
      .then((res) => {
        setPlayers([...res.data]);
        console.log(players);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Head>
        <title>Aptamil Verification</title>
        <meta name="description" content="Aptamil Training Game Verification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base>
        <Banner
        //   variants={{
        //     initial: { height: "35vh" },
        //   }}
        >
          <div className={classes.heading}>
            <div className={classes.text}>
              <h1>验证培训通道</h1>
              <p>
                请输入代购的微信用户名，查询他/她是否成功通过了我们的培训且获得了证书。
              </p>
            </div>
          </div>
        </Banner>

        <Content>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={inputClass}>
              <input
                type="text"
                placeholder={usernamePlaceholder}
                name="username"
                autoComplete="off"
                onChange={usernameChangeHandler}
                onBlur={usernameInputBlurHandler}
              />
              {usernameInputIsInvalid && (
                <p className={classes.invalid}>请输入微信名</p>
              )}
              {/* {enteredUsernameIsValid && <div>hello</div>} */}
            </div>
            <div className={btnClass}>
              <Button type="submit" value="验证">
                验证
              </Button>
            </div>
          </form>
        </Content>
      </Base>
    </>
  );
};

export default Verify;
