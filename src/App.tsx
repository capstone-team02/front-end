import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ILoggedInAtom, loggedInAtom, tokenInfo } from "./atoms/loggedInAtom";

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
  // const { data } = useQuery(["loggedInInfo"], tokenInfo, {
  //   onSuccess: (data) => {
  //     setLoggedIn(data)
  //   },
  // });

  tokenInfo();

  return (
    <Wrapper>
      <GlobalStyles></GlobalStyles>
      <Outlet />
    </Wrapper>
  );
}

export default App;
