import * as S from "./style";

function Map() {
  return (
    <>
      <S.Container>
        <S.Banner>동네 추천 지도</S.Banner>
        <S.InfoBox>
          <S.Label>추천 지역</S.Label>
          <S.CityWrapper>
            <S.CityBox>
              <S.TopText>TOP1</S.TopText>
              <S.TopBox></S.TopBox>
            </S.CityBox>
            <S.CityBox>
              <S.TopText>TOP2</S.TopText>
              <S.TopBox></S.TopBox>
            </S.CityBox>
            <S.CityBox>
              <S.TopText>TOP3</S.TopText>
              <S.TopBox></S.TopBox>
            </S.CityBox>
          </S.CityWrapper>
          <S.KeywordContainer>
            <S.Label>동네 키워드</S.Label>
            <S.KeywordWrapper>
              {/* 반복문 처리할것 */}
              <S.KeywordBox>가족</S.KeywordBox>
              <S.KeywordBox>가족</S.KeywordBox>
              <S.KeywordBox>가족</S.KeywordBox>
            </S.KeywordWrapper>
            <S.KeywordWrapper>
              <S.KeywordBox>가족</S.KeywordBox>
              <S.KeywordBox>가족</S.KeywordBox>
              <S.KeywordBox>가족</S.KeywordBox>
            </S.KeywordWrapper>
          </S.KeywordContainer>
          <S.ReviewContainer>
            <S.LabelContainer>
              <S.Label>1줄 리뷰 PICK</S.Label>
              <S.MoreText>MORE</S.MoreText>
            </S.LabelContainer>
            <S.ReviewWrapper>
              <S.ReviewBox></S.ReviewBox>
              <S.ReviewBox></S.ReviewBox>
            </S.ReviewWrapper>
          </S.ReviewContainer>
          <S.BuDongSanContainer>
            <S.Label>부동산 정보</S.Label>
            <S.BuDongSanWrapper>
              <S.BuDongSanBox></S.BuDongSanBox>
              <S.BuDongSanBox></S.BuDongSanBox>
              <S.BuDongSanBox></S.BuDongSanBox>
            </S.BuDongSanWrapper>
          </S.BuDongSanContainer>
        </S.InfoBox>
      </S.Container>
    </>
  );
}
export default Map;
