import * as S from "./style";

function Main() {
  return (
    <>
      <S.UpperContainer>
        <S.MypageIcon
          src={require("../../imgs/icon/mypage_icon.png")}
        ></S.MypageIcon>

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
        <S.MapIconBtn>
          <S.MapIconImg
            src={require("../../imgs/icon/map_icon1.png")}
          ></S.MapIconImg>
        </S.MapIconBtn>
      </S.UpperContainer>
      <S.MainBanner
        src={require("../../imgs/icon/mainbanner_1.png")}
      ></S.MainBanner>
      <S.RecommendTopContainer>
        <S.RecommendationText>실시간 동네 추천 TOP 3</S.RecommendationText>
        <S.RecommendationWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
        </S.RecommendationWrapper>
      </S.RecommendTopContainer>
      <S.RecommendTopContainer2>
        <S.RecommendationText>
          청년층이 가장 많이 추천한 동네
        </S.RecommendationText>
        <S.RecommendationWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
        </S.RecommendationWrapper>
      </S.RecommendTopContainer2>
      <S.RecommendTopContainer2>
        <S.RecommendationText>이런 동네는 어떤가요?</S.RecommendationText>
        <S.RecommendationWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
          <S.RecommendationElementWrapper>
            <S.CityImg></S.CityImg>
            <S.CityBox></S.CityBox>
          </S.RecommendationElementWrapper>
        </S.RecommendationWrapper>
      </S.RecommendTopContainer2>
      <S.BottomBox></S.BottomBox>
    </>
  );
}

export default Main;
