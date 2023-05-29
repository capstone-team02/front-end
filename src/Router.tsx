import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import SignUp from "./pages/signup/Signup";
import Mypage from "./pages/mypage/Mypage";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
    ],
  },
]);

export default router;
