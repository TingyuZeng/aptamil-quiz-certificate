import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Base from "../components/Base/Base";
import Banner from "../components/Banner/Banner";
import Content from "../components/Content/Content";
import Button from "../components/Button/Button";
import classes from "../styles/Verify.module.scss";
import useInput from "../hooks/useInput";
import { useCallback, useEffect, useRef, useState } from "react";
import UserSearchItem from "../components/User/UserSearchItem";
import { useDispatch, useSelector } from "react-redux";
import { clear, update } from "../store/store";
import Loader from "../components/Loader/Loader";

const Verify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

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

  const userSearch = useCallback(
    (name) => {
      setIsLoading(true);
      axios
        .get(
          `https://training-game-strapi.herokuapp.com/players?nickname_contains=${name}`
        )
        .then((res) => {
          setIsLoading(false);
          dispatch(update({ players: [...res.data] }));
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error.message);
        });
    },
    [dispatch]
  );

  const inputClass = enteredUsernameIsValid
    ? `${classes.input} ${classes.unfold}`
    : classes.input;

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
    userSearch(enteredUsername);
  };

  // Live-search
  useEffect(() => {
    if (!enteredUsernameIsValid) {
      dispatch(clear());
      return;
    }
    setIsLoading(true);
    const timeId = setTimeout(() => {
      userSearch(enteredUsername);
    }, 2000);

    return () => {
      clearTimeout(timeId);
      setIsLoading(false);
    };
  }, [enteredUsername, dispatch]);

  return (
    <>
      <Head>
        <title>爱他美代购培训证书验证通道</title>
        <meta name="description" content="Aptamil Training Game Verification" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base>
        <Banner>
          <h1>验证培训通道</h1>
          <p>
            请输入代购的微信用户名，查询他/她是否成功通过了我们的培训且获得了证书。
          </p>
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
              {isLoading && <Loader />}

              {enteredUsernameIsValid && !isLoading && players.length > 0 && (
                <div className={classes.players}>
                  {players.map((player) => (
                    <UserSearchItem player={player} key={player.headimgurl} />
                  ))}
                </div>
              )}

              {enteredUsernameIsValid && !isLoading && players.length === 0 && (
                <div className={classes.players}>
                  <p>
                    无法找到该代购信息
                    <br />
                    请重新输入用户名并尝试
                  </p>
                </div>
              )}
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
