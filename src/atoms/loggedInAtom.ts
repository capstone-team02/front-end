import { atom } from "recoil";
import axios from "axios";
import { getLoggedInInfo } from "../apis/api/accountApi";
import { log } from "console";
import { useEffect } from "react";

// let headers = new Headers({
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
// });

// export const tokenInfo = async () => {
//   console.log("tokenInfo 실행");
//   console.log(accessToken);
//   //console.log(accessToken);
//   if (accessToken && accessToken !== null) {
//     axios.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
//     console.log(axios.defaults.headers["Authorization"]);
//     tokenPost();
//     return true;
//   }

//   return false;
// };

export interface ILoggedInAtom {
  loggedIn: boolean;
  email: string;
  nickname: string;
}

export const loggedInAtom = atom<ILoggedInAtom>({
  key: "loggedIn",
  default: {
    loggedIn: false,
    email: "abc@naver.com",
    nickname: "a",
  },
});
