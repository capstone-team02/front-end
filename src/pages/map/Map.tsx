import * as S from "./style";
import { useEffect, useRef } from "react";

function Map() {
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src =
  //       "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=y20qex6myf";
  //     document.head.appendChild(script);
  //     const { naver } = window;
  //     let map: naver.maps.Map;
  //     const center: naver.maps.LatLng = new naver.maps.LatLng(
  //       37.3595704,
  //       127.105399
  //     );

  //     map = new naver.maps.Map("map", {
  //       center: center,
  //       zoom: 16,
  //     });
  //     // const center: naver.maps.LatLng = new naver.maps.LatLng(
  //     //   37.3595704,
  //     //   127.105399
  //     // );

  //     // map = new naver.maps.Map("map", {
  //     //   center: center,
  //     //   zoom: 16,
  //     // });
  //   }, []);
  const mapElement = useRef(null);

  useEffect(() => {
   

    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <>
      <S.Container>
        <S.Banner>동네 추천 지도</S.Banner>
        <S.Wrapper>
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
          <S.Map ref={mapElement}>아아</S.Map>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
export default Map;
