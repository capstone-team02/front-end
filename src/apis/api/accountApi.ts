import axios from "axios";
import { baseApi } from "../utils/instance";
import { ISignupForm, ILoginForm } from "../../interfaces/accountForm";
import SignUpForm from "../../components/account/forms/signupFrom/signupForm";

const SIGNIN_URI = "/mytown/v1/auth/signin";
const SIGNUP_URI = "/mytown/v1/auth/signup";
const NICKNAMECHECK_URI = "/mytown/v1/auth/checkNickname";

export const loginPost = (loginForm: ILoginForm) =>
  baseApi
    .post(SIGNIN_URI, {
      email: loginForm.email,
      password: loginForm.password,
    })
    .then((response) => response.data)
    .then((response) => {
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
    });

export const signupPost = (signupForm: ISignupForm) =>
  baseApi.post(SIGNUP_URI, {
    email: signupForm.email,
    password: signupForm.password,
    username: signupForm.nickname,
    isFemale: signupForm.isFemale,
  });

export const nicknameCheckPost = (username: string) =>
  baseApi.post(NICKNAMECHECK_URI, {
    nickname: username,
  });

export const emailCheckPost = (email: string) =>
  baseApi.post(NICKNAMECHECK_URI, {
    email: email,
  });
