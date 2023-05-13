import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import LoginForm from "./components/account/forms/loginForm/loginFrom"
import SignUpForm from "./components/account/forms/signupFrom/signupForm";
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
            element: <LoginForm />,
          },
         
        ],
      },
      
      {
        path: "signup",
        //element: <SignUp />,
        children: [
          {
            path: "",
            element: <SignUpForm />,
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
