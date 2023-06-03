import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import SignUp from "./pages/signup/Signup";
import Mypage from "./pages/mypage/Mypage";
import Login from "./pages/login/Login";
import Survey from "./pages/survey/Survey";
import Start from "./pages/start/StartPage";
import Main from "./pages/main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            element: <Start />,
          },
        ],
      },
      {
        path: "login",
        // element: <Login />,
        children: [
          {
            path: "",
            element: <Login />,
          },
        ],
      },

      {
        path: "signup",
        //element: <SignUp />,
        children: [
          {
            path: "",
            element: <SignUp />,
          },
          // {
          //   path: "success",
          //   element: <SignUpSuccess />,
          // },
        ],
      },
      {
        path: "survey",
        //element: <SignUp />,
        children: [
          {
            path: "",
            element: <Survey />,
          },
          // {
          //   path: "success",
          //   element: <SignUpSuccess />,
          // },
        ],
      },
      {
        path: "mypage",
        //element: <Mypage />,
        children: [
          {
            path: "",
            element: <Mypage />,
          },
          // {
          //   path: "success",
          //   element: <SignUpSuccess />,
          // },
        ],
      },
      {
        path: "main",
        //element: <Mypage />,
        children: [
          {
            path: "",
            element: <Main />,
          },
          // {
          //   path: "success",
          //   element: <SignUpSuccess />,
          // },
        ],
      },
    ],
  },
]);

export default router;
