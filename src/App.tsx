import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ILoggedInAtom, loggedInAtom } from "./atoms/loggedInAtom";
import { getLoggedInInfo } from "./apis/api/accountApi";
import { useEffect } from "react";
import axios from "axios";
import Start from "./pages/start/StartPage";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

function App() {
  // const setLoggedIn = useSetRecoilState<ILoggedInAtom>(loggedInAtom);
  // tokenInfo();
  // const { data } = useQuery(["loggedInInfo"], getLoggedInInfo, {
  //   onSuccess: (data) => {
  //     console.log(axios.defaults.headers.common["Authorization"]);
  //   },
  // });
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=y20qex6myf";
  document.head.appendChild(script);


  const setLoggedIn = useSetRecoilState<ILoggedInAtom>(loggedInAtom);
  const { data } = useQuery(["loggedInInfo"], getLoggedInInfo, {
    onSuccess: (data) => {
      console.log(data.data);
      setLoggedIn(data.data);
    },
  });

  getLoggedInInfo();

  return (
    <Wrapper>
      <GlobalStyles></GlobalStyles> <Outlet />
    </Wrapper>
  );
}

export default App;
