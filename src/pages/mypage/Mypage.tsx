import { useNavigate } from "react-router-dom";
import { ILoggedInForm } from "../../interfaces/accountForm";
import { useEffect, useState } from "react";
import { ILoggedInAtom, loggedInAtom } from "../../atoms/loggedInAtom";
import * as S from "./style";
import { useRecoilValue } from "recoil";

interface IUseInfo {
  email: string;
  nickname: string;
}

const Mypage = () => {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue<ILoggedInAtom>(loggedInAtom);

  return (
    <S.Form>
      <S.Image src={require("../../imgs/mypageImage.jpg")}></S.Image>
      <S.Title>Mypage</S.Title>
      <S.Container>
        <S.Vertical></S.Vertical>
        <S.Horiziontal></S.Horiziontal>
        <S.UpperDiv>
          <S.ProfileImage></S.ProfileImage>
          <S.UserInfoContainer>
            <S.WelcomeWrapper>
              <S.Nickname>{loginInfo.nickname}</S.Nickname>
              <S.Welcome>님 반갑습니다.</S.Welcome>
            </S.WelcomeWrapper>
            <S.InfoWord>프로필을 입력하세요.</S.InfoWord>
            <S.WelcomeWrapper>
              <S.InfoButton>정보 변경</S.InfoButton>
              <S.InfoButton>로그아웃</S.InfoButton>
            </S.WelcomeWrapper>
          </S.UserInfoContainer>
        </S.UpperDiv>

        <S.Email>{loginInfo.email}</S.Email>
        <S.UserTagWrapper>
          <S.TagDiv>
            <S.UserTag></S.UserTag>
            <S.UserTag></S.UserTag>
          </S.TagDiv>
          <S.TagDiv>
            <S.UserTag></S.UserTag>
            <S.UserTag></S.UserTag>
          </S.TagDiv>
        </S.UserTagWrapper>
        <S.ChangeInfo>정보 변경</S.ChangeInfo>
        <S.MyActivity>나의 활동</S.MyActivity>
        <S.MyActivityButtonWrapper>
          <S.MyActivityButton>
            동네 스크랩
            <S.Arrow>{">"}</S.Arrow>
          </S.MyActivityButton>
          <S.MyActivityButton>
            검색 기록
            <S.Arrow>{">"}</S.Arrow>
          </S.MyActivityButton>
          <S.MyActivityButton>
            챗봇 기록
            <S.Arrow>{">"}</S.Arrow>
          </S.MyActivityButton>
          <S.MyActivityButton>
            나의 리뷰<S.Arrow>{">"}</S.Arrow>
          </S.MyActivityButton>
        </S.MyActivityButtonWrapper>
      </S.Container>
    </S.Form>
  );
};

export default Mypage;
