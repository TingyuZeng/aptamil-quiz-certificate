import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { update } from "../../store/store";

import classes from "./UserSearchItem.module.scss";

const DUMMY_DATA = {
  nickname: "test",
  headimgurl:
    "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK8kibNJItxftIh619yDDFcOrcbfLn0mMamvFClricaicx023wlibCeic6PlIk1QsIRXFIuS86lMxG4xMQ/132",
};

const UserSearchItem = (props) => {
  const { nickname, headimgurl } = props.player;
  const dispatch = useDispatch();
  const router = useRouter();
  const clickHandler = () => {
    dispatch(update({ players: [props.player] }));
    router.push("/result");
  };

  return (
    <div className={classes.user} onClick={clickHandler}>
      <div className={classes.image}>
        <Image src={headimgurl} layout="fill" objectFit="cover" />
      </div>
      <div className={classes.text}>
        <h3>{nickname}</h3>
        <p>点击查看</p>
      </div>
    </div>
  );
};

export default UserSearchItem;
