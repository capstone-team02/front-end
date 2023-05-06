import axios from "axios";
import { baseApi } from "../utils/instance";
import { ISignupForm, ILoginForm
} from "../../interfaces/accountForm";

const SIGNIN_URI = "/mytown/v1/auth/signin"
const SIGNUP_URI = "/mytown/v1/auth/signup"

export const loginPost = (loginForm : ILoginForm) =>
baseApi.post(SIGNIN_URI, {
    email : loginForm.email,
    password : loginForm.password
});

export const signupPost = (signupForm : ISignupForm) =>
baseApi.post(SIGNUP_URI, {
    email : signupForm.email,
    password : signupForm.password,
    username: signupForm.username,
    isFemale : signupForm.isFemale
});;