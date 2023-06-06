import { ThemeConsumer } from "styled-components";
import {
  budongsanDistrictPost,
  keyWordDistrictPost,
  reviewDistrictPost,
} from "../../apis/api/mapApi";
import { IMapDistrictForm } from "../../interfaces/surveyForm";
import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

import { TbArrowBigRightFilled } from "react-icons/tb";
import { TbArrowBigLeftFilled } from "react-icons/tb";
function Map() {
  const mapElement = useRef(null);
  const [latitude, setLatitude] = useState(37.5637990488);
  const [longitude, setLongitude] = useState(126.9545535618);

  const latitudeList = [37.5637990488, 37.5478, 37.5974];
  const longitudeList = [126.9545535618, 127.0187, 127.0189];

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(latitude, longitude);
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
  }, [latitude]);

  const cityData = [
    {
      guName: "서대문구",
      cityName: "북아현동",
      img: "seodaemoon",
    },
    {
      guName: "성동구",
      cityName: "옥수동",
      img: "seongdong",
    },
    {
      guName: "성북구",
      cityName: "돈암동",
      img: "sungbook",
    },
  ];

  const [district, setDistrict] = useState<IMapDistrictForm>({
    district: "",
  });
  const [review, setReview] = useState<any[]>([]);
  const [budongsan, setBudongsan] = useState<any[]>();
  const [keyword, setKeyword] = useState<any[]>([]);
  const [checkedCity, setCheckedCity] = useState("북아현동");
  useEffect(() => {
    const fetchData = async () => {
      console.log("checkedCity: " + checkedCity);
      try {
        const response = await budongsanDistrictPost({
          district: checkedCity,
        });
        const response2 = await reviewDistrictPost({
          district: checkedCity,
        });
        const response3 = await keyWordDistrictPost({
          district: checkedCity,
        });

        setBudongsan(response.data);
        setReview(response2.data);
        setKeyword(response3.data);
        console.log(response3.data[0]);
        console.log(response3.data[1]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [checkedCity]);

  const [selected, setSelected] = useState([true, false, false]);

  const toggleSelected = (index: number) => {
    setSelected(() => {
      const temp = [false, false, false];
      temp[index] = !temp[index];
      return temp;
    });
    setLatitude(latitudeList[index]);
    setLongitude(longitudeList[index]);
  };

  const [budongsanIndex, setBudongsanIndex] = useState(0);

  const citySelected = (value: string) => {
    setCheckedCity(value);
  };
  const clickRightArrow = () => {
    if (budongsanIndex === 3) {
      setBudongsanIndex(3);
    } else {
      setBudongsanIndex(budongsanIndex + 3);
    }
  };
  const clickLeftArrow = () => {
    if (budongsanIndex === 0) {
      setBudongsanIndex(0);
    } else {
      setBudongsanIndex(budongsanIndex - 3);
    }
  };

  const handleClickRadioButton = (e: any) => {
    console.log("e " + e.target.value);
    setCheckedCity(e.target.value);
  };
  return (
    <>
      <S.Container>
        <S.Banner>동네 추천 지도</S.Banner>
        <S.Wrapper>
          <S.InfoBox>
            <S.Label>추천 지역</S.Label>
            <S.CityWrapper>
              {cityData.map((data, index) => (
                <S.CityBox>
                  <S.TopText>TOP{index + 1}</S.TopText>

                  <S.TopDiv>
                    <S.CityImg
                      src={require(`../../imgs/city/${data.img}.jpg`)}
                    ></S.CityImg>

                    <S.CityText
                      onClick={() => {
                        toggleSelected(index);
                        citySelected(data.cityName);
                      }}
                      selected={selected[index]}
                    >
                      {data.guName} {data.cityName}
                    </S.CityText>
                  </S.TopDiv>
                </S.CityBox>
              ))}
            </S.CityWrapper>
            <S.KeywordContainer>
              <S.Label>동네 키워드</S.Label>
              <S.KeywordWrapper>
                {keyword.slice(0, 3).map((value, index) => (
                  <S.KeywordBox>{value}</S.KeywordBox>
                ))}
              </S.KeywordWrapper>
              <S.KeywordWrapper>
                {keyword.slice(3, 6).map((value, index) => (
                  <S.KeywordBox>{value}</S.KeywordBox>
                ))}
              </S.KeywordWrapper>
            </S.KeywordContainer>
            <S.ReviewContainer>
              <S.LabelContainer>
                <S.Label>리뷰 PICK</S.Label>
                {/* <S.MoreText>MORE</S.MoreText> */}
              </S.LabelContainer>
              <S.ReviewWrapper>
                {review?.slice(0, 2).map((value, index) => (
                  <S.ReviewBox>
                    <S.Nickname>{value.nickname}</S.Nickname>
                    <S.ReviewTextBox>{value.totalReview}</S.ReviewTextBox>
                  </S.ReviewBox>
                ))}
              </S.ReviewWrapper>
            </S.ReviewContainer>
            <S.BuDongSanContainer>
              <S.BuDongSanText>
                <S.Label>부동산 정보</S.Label>
              </S.BuDongSanText>

              <S.BuDongSanWrapper>
                <S.LeftArrow>
                  <TbArrowBigLeftFilled
                    color="#bbd145"
                    size="25"
                    onClick={clickLeftArrow}
                  />
                </S.LeftArrow>
                <S.BuDongSanBoxWrapper>
                  {budongsan
                    ?.slice(budongsanIndex, budongsanIndex + 3)
                    .map((value, index) => (
                      <S.BuDongSanBox key={value.buildingName}>
                        <S.BuildingName>{value.buildingName}</S.BuildingName>
                        <S.Price>{value.houseType}</S.Price>
                        <S.HouseType>매매/ {value.price}</S.HouseType>
                      </S.BuDongSanBox>
                    ))}
                </S.BuDongSanBoxWrapper>
                <S.RightArrow>
                  <TbArrowBigRightFilled
                    color="#bbd145"
                    size="25"
                    onClick={clickRightArrow}
                  />
                </S.RightArrow>
              </S.BuDongSanWrapper>
            </S.BuDongSanContainer>
          </S.InfoBox>
          <S.Map ref={mapElement}>
            <S.ResetText>새로고침을 해주세요</S.ResetText>
          </S.Map>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
export default Map;
