import axios from "axios";
import { baseApi } from "../utils/instance";
import { ISignupForm, ILoginForm } from "../../interfaces/accountForm";
import { log } from "console";

const SIGNIN_URI = "/auth/signin";
const SIGNUP_URI = "/auth/signup";
const NICKNAMECHECK_URI = "/auth/checkNickname";
const EMAILCHECK_URI = "/auth/checkEmail";
const LOGINUSER_URI = "/auth/loginUserInfo";

export const loginPost = (loginForm: ILoginForm) =>
  baseApi
    .post(SIGNIN_URI, {
      email: loginForm.email,
      password: loginForm.password,
    })
    .then((response) => response.data)
    .then((response) => {
      if (response.token) {
        localStorage.setItem("Authorization", response.token);
      }
    });

export const signupPost = (signupForm: ISignupForm) =>
  baseApi.post(SIGNUP_URI, {
    email: signupForm.email,
    password: signupForm.password,
    username: signupForm.username,
    isFemale: signupForm.isFemale,
  });

export const nicknameCheckPost = (nickname: string) =>
  baseApi.post(NICKNAMECHECK_URI, {
    nickname: nickname,
  });

export const emailCheckPost = (email: string) =>
  baseApi.post(EMAILCHECK_URI, {
    email: email,
  });

export const getLoggedInInfo = () =>
  baseApi.get(LOGINUSER_URI, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
    },
  });
