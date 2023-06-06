import { ThemeConsumer } from "styled-components";
import {
  budongsanDistrictPost,
  reviewDistrictPost,
} from "../../apis/api/mapApi";
import { IMapDistrictForm } from "../../interfaces/surveyForm";
import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

function Map() {
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

  const onValidChangeUserInfo = async (data: IMapDistrictForm) => {
    // 회원정보 수정 API 호출 파트

    const formData = new FormData();
    //formData.append("image", data.image[0]);
    try {
      const response = await budongsanDistrictPost(data);
    } catch (e) {
      console.log(e);
    }
  };

  const [district, setDistrict] = useState<IMapDistrictForm>({
    district: "",
  });
  const [review, setReview] = useState<any[]>([]);
  const [budongsan, setBudongsan] = useState<any[]>();
  const [keyword, setKeyword] = useState<any[]>([]);
  const districtName = ["북아현동", "행당동", "돈암동"];

  useEffect(() => {
    const fetchData = async () => {
      console.log("a");
      try {
        const response = await budongsanDistrictPost({
          district: "북아현동",
        });
        setBudongsan(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    // const onValidChangeUserInfo = async (data: IMapDistrictForm) => {
    //   // 회원정보 수정 API 호출 파트

    //   const formData = new FormData();
    //   //formData.append("image", data.image[0]);
    //   try {
    //     const response =await budongsanDistrictPost({district:"북아현동"});

    //   } catch (e) {
    //     console.log(e);
    //   }
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
                <S.TopBox>
                  <S.TopDiv>
                    <S.CityImg
                      src={require("../../imgs/city/seodaemoon.jpg")}
                    ></S.CityImg>
                    <S.CityText>서대문구 북아현동</S.CityText>
                  </S.TopDiv>
                </S.TopBox>
              </S.CityBox>
              <S.CityBox>
                <S.TopText>TOP2</S.TopText>
                <S.TopBox>
                  <S.TopDiv>
                    <S.CityImg
                      src={require("../../imgs/city/seongdong.jpg")}
                    ></S.CityImg>
                    <S.CityText>성동구 옥수동</S.CityText>
                  </S.TopDiv>
                </S.TopBox>
              </S.CityBox>
              <S.CityBox>
                <S.TopText>TOP3</S.TopText>
                <S.TopBox type="button">
                  <S.TopDiv>
                    <S.CityImg
                      src={require("../../imgs/city/sungbook.jpg")}
                    ></S.CityImg>
                    <S.CityText>성북구 돈암동</S.CityText>
                  </S.TopDiv>
                </S.TopBox>
              </S.CityBox>
            </S.CityWrapper>
            <S.KeywordContainer>
              <S.Label>동네 키워드</S.Label>
              <S.KeywordWrapper>
                {/* 반복문 처리할것 */}
                {/* {districts.map((name) => (
                <S.ListItem
                  key={name.guName}
                  onClick={() => {
                    onSelectGu(name.guName);
                    setIsOpenGu(!isOpenGu);
                  }} */}
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
                {budongsan?.slice(0, 3).map((value, index) => (
                  <S.BuDongSanBox key={value.buildingName}>
                    <S.BuildingName>{value.buildingName}</S.BuildingName>
                    <S.Price>매매/ {value.price}</S.Price>
                    <S.HouseType>{value.houseType}</S.HouseType>
                  </S.BuDongSanBox>
                ))}
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
