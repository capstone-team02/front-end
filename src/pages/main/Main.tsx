import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <S.UpperContainer>
          <S.UpperWrapper>
            <S.MypageIconBtn
              onClick={() => {
                navigate("/mypage");
              }}
            >
              <S.MypageIcon
                src={require("../../imgs/icon/mypage_icon.png")}
              ></S.MypageIcon>
            </S.MypageIconBtn>
            <S.Search>
              <S.FilteringIcon
                src={require("../../imgs/icon/filter_icon.png")}
              ></S.FilteringIcon>
              필터링으로 도시를 찾아보세요
            </S.Search>
            <S.SearchIconBtn>
              <S.SearchIconImg
                src={require("../../imgs/icon/search_icon2.png")}
              ></S.SearchIconImg>
            </S.SearchIconBtn>
            <S.MapIconBtn
              onClick={() => {
                navigate("/map");
              }}
            >
              <S.MapIconImg
                src={require("../../imgs/icon/map_icon1.png")}
              ></S.MapIconImg>
            </S.MapIconBtn>
          </S.UpperWrapper>
        </S.UpperContainer>
        <S.MainBanner
          src={require("../../imgs/icon/mainbanner_1.png")}
        ></S.MainBanner>
        <S.RecommendTopContainer>
          <S.RecommendationText>실시간 동네 추천 TOP 3</S.RecommendationText>
          <S.RecommendationWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg
                src={require("../../imgs/city/jongro.jpg")}
              ></S.CityImg>
              <S.CityBox>
                <S.TextBox>종로구</S.TextBox>
                <S.ScoreBox>⭐ 4.8/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg
                src={require("../../imgs/city/yongsan.jpg")}
              ></S.CityImg>
              <S.CityBox>
                {" "}
                <S.TextBox>용산구</S.TextBox>
                <S.ScoreBox>⭐ 4.7/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg
                src={require("../../imgs/city/seocho.jpg")}
              ></S.CityImg>
              <S.CityBox>
                {" "}
                <S.TextBox>서초구</S.TextBox>
                <S.ScoreBox>⭐ 4.9/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
          </S.RecommendationWrapper>
        </S.RecommendTopContainer>
        <S.RecommendTopContainer2>
          <S.RecommendationText>
            청년층이 가장 많이 추천한 동네
          </S.RecommendationText>
          <S.RecommendationWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg src={require("../../imgs/city/mapo.jpg")}></S.CityImg>
              <S.CityBox>
                {" "}
                <S.TextBox>마포구</S.TextBox>
                <S.ScoreBox>⭐ 4.7/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg
                src={require("../../imgs/city/sungbook.jpg")}
              ></S.CityImg>
              <S.CityBox>
                {" "}
                <S.TextBox>성북구</S.TextBox>
                <S.ScoreBox>⭐ 4.6/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg
                src={require("../../imgs/city/dongdaemoon.jpg")}
              ></S.CityImg>
              <S.CityBox>
                {" "}
                <S.TextBox>동대문구</S.TextBox>
                <S.ScoreBox>⭐ 4.6/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
          </S.RecommendationWrapper>
        </S.RecommendTopContainer2>
        <S.RecommendTopContainer2>
          <S.RecommendationText>이런 동네는 어떤가요?</S.RecommendationText>
          <S.RecommendationWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg
                src={require("../../imgs/city/gangseo.jpg")}
              ></S.CityImg>
              <S.CityBox>
                {" "}
                <S.TextBox>강서구</S.TextBox>
                <S.ScoreBox>⭐ 4.8/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg
                src={require("../../imgs/city/joonrang.jpg")}
              ></S.CityImg>
              <S.CityBox>
                {" "}
                <S.TextBox>중랑구</S.TextBox>
                <S.ScoreBox>⭐ 4.5/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
            <S.RecommendationElementWrapper>
              <S.CityImg src={require("../../imgs/city/nowon.jpg")}></S.CityImg>
              <S.CityBox>
                {" "}
                <S.TextBox>노원구</S.TextBox>
                <S.ScoreBox>⭐ 4.6/5.0</S.ScoreBox>
              </S.CityBox>
            </S.RecommendationElementWrapper>
          </S.RecommendationWrapper>
        </S.RecommendTopContainer2>
        <S.BottomBox></S.BottomBox>
      </S.Container>
    </>
  );
}

export default Main;
