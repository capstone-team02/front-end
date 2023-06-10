import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100%;
`;
export const UpperContainer = styled.div`
  width: 100vw;
  height: 235px;
  oveflow-x: hidden;
  display: flex;
  justify-content: center;
`;

export const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 1285px;
  height: 100%;
  margin-top: 55px;
`;

export const MypageIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const Search = styled.button`
  width: 690px;
  height: 120px;
  background: #ffffff;
  border: 0.5px solid #616161;
  border-radius: 20px 0px 0px 20px;
  padding: 35px 30px;
  margin-left: 95px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height */

  color: #000000;
`;

export const FilteringIcon = styled.img`
  width: 40px;
  height: 40px;
  float: left;
`;

export const MypageIconBtn = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background: white;
  margin-top: 30px;
  cursor: pointer;
`;

export const SearchIconBtn = styled.button`
  width: 210px;
  height: 120px;
  border-radius: 0px 20px 20px 0px;
  padding: 30px 75px;
  background: black;
`;

export const SearchIconImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const MapIconBtn = styled.button`
  padding: 9px 65px;
  width: 210px;
  height: 118.81px;
  margin-left: 20px;
  background: #ffffff;
  border: 0.5px solid #616161;
  border-radius: 20px;
  cursor: pointer;
`;

export const MapIconImg = styled.img`
  height: 100.81px;
  width: 80px;
`;

export const MainBanner = styled.img`
  width: 100%;
  height: auto;
  //margin-top: 115px;
`;

export const RecommendTopContainer = styled.div`
  width: 1360px;
  height: 445px;
  margin: 115px auto;
`;
export const RecommendTopContainer2 = styled.div`
  width: 1360px;
  height: 445px;
  margin: 323px auto;
`;

export const RecommendationText = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  margin-left: 5px;
  color: #000000;
`;

export const RecommendationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1360px;
  height: 350px;
  margin-top: 35px;
  justify-content: space-between;
`;

export const RecommendationElementWrapper = styled.div`
  width: 440px;
  height: 350px;
  display: flex;
  flex-direction: column;
`;

export const CityImg = styled.img`
  width: 100%;
  height: 250px;
`;

export const CityBox = styled.div`
  width: 408px;
  height: 100px;
  padding: 31px 15px;
  background: #ffffff;
  border: 1px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #000000;
`;

export const TextBox = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #000000;
`;

export const ScoreBox = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;

  color: #868686;
`;

export const BottomBox = styled.div`
  width: 1669;
  height: 120px;
  margin-top: 80px;
  background: rgba(131, 131, 131, 0.5);
  border: 1px solid rgba(61, 61, 61, 0.5);
  overflow-x: hidden;
`;
