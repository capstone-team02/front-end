import React from 'react'
import { Outlet } from "react-router-dom";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const navigate = useNavigate();
  const handleHeaderClick = () => navigate("/");
  return (
    <S.Image src={require("../../imgs/mypageImage.jpg")}></S.Image>
    );
}
export default Mypage;