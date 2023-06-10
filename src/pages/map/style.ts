import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;

  position: fixed;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw%;
  height: 100%;
`;

export const Map = styled.div`
  height: 100%;
  width: 70%;
  justify-contet: center;
`;

export const Banner = styled.div`
  width: 100vw;
  height: 70px;
  text-align: center;
  padding-top: 33px;
  background: #ffffff;
  border: 1px solid #000000;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height */

  color: #bbd145;
`;

export const InfoBox = styled.div`
  width: 25%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #000000;
  border-top: 0px;
  padding: 43px 58.5px 72px 58.5px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 72px;
`;

export const Label = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  color: #bbd145;
`;

export const CityWrapper = styled.div`
  height: 171px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CityBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 133px;
  height: 166px;
`;

export const TopText = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #bbd145;
`;
// export const TopBox = styled.button`
//   width: 133px;
//   height: 149px;
//   border-radius: 10px;
//   //border: 1px solid #000000;
//   border: none;
//   margin-top: 5px;
//   background: white;
//   cursor: pointer;

//   font-family: "Pretendard";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 22px;
//   /* identical to box height */

//   color: #000000;
// `;
export const TopDiv = styled.div`
  margin-right: 5px;

  width: 133px;
  height: 149px;
  border-radius: 10px;
  background: white;

  display: flex;
  flex-direction: column;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  margin-top: 10px;
  color: #000000;
`;

export const CityImg = styled.img`
  height: 110px;

  border: 0.5px solid #000000;

  border-radius: 10px 10px 0px 0px;
`;

export const Input = styled.input`
  display: none;
  visibility: hidden;
`;
export const CityLabel = styled.label`
  display: none;
`;

export const CityText = styled.div<{ selected: boolean }>`
  padding: 10px 15px;
  cursor: pointer;

  height: 17px;
  background-color: ${(props) => (props.selected ? " #E9FF6E" : "white")};
  //background: #ffffff;
  border: 0.5px solid #000000;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  /* identical to box height */
  margin-top: 0px;
  color: #000000;
`;
export const KeywordContainer = styled.div`
  height: 184px;
  margin-top: 45px;
  flex-direction: column;
`;

export const KeywordWrapper = styled.div`
  margin-top: 20px;
  height: 121px;
  height: 42px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
`;

export const KeywordBox = styled.div`
  width: 133px;
  height: 22px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
  color: #000000;
`;

export const ReviewContainer = styled.div`
  height: 400px;
  display: flex;
  margin-top: 45px;
  flex-direction: column;
`;
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MoreText = styled.button`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  margin-left: auto;
  //margin-top: 10px;
  color: #bbd145;
  background: white;
  border: none;
  cursor: pointer;
`;
export const ReviewWrapper = styled.div`
  margin-top: 20px;
  height: 335px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReviewBox = styled.div`
  padding: 28px 34px;
  height: 90px;
  margin-bottom: 20px;
  background: #f5f5f5;
  border: 0.5px solid #000000;
  border-radius: 10px;
  //overflow-y: scroll;
`;

export const Nickname = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 14px;

  color: #000000;
`;

export const ReviewTextBox = styled.div`
  overflow-y: scroll;
  height: 56px;
  width: 400px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-top: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
  color: #000000;
`;

export const BuDongSanContainer = styled.div`
  height: 249px;
  width: 590px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  margin-bottom: 250px;
  width: calc(100% + 58.5px * 2);

  margin: 45px 58.8px 250px -58.5px;
`;

export const BuDongSanWrapper = styled.div`
  height: 184px;
  margin-top: 20px;
  //justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: calc(100% + 24 * 2);

  margin: 24px 0 24px -24px;
`;
export const BuDongSanText = styled.div`
  margin-left: 58.5px;
`;

export const BuDongSanBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px;
  gap: 35px;

  width: 110px;
  height: 184px;

  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  border: 0.5px solid #000000;
`;

export const BuDongSanBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  width: 472px;
`;
export const BuildingName = styled.div`
  margin-top: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  justify-contet: center;
  width: 100%;
`;

export const Price = styled.div`
  // margin-top: 12px;
  // margin-bottom: 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  width: 110px;
  justify-contet: center;
`;

export const HouseType = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  width: 110px;
  justify-contet: center;
`;

export const ResetText = styled.a`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  width: 110px;
`;

export const LeftArrow = styled.div`
  margin-top: 90px;
  margin-left: 40px;
`;

export const RightArrow = styled.div`
  margin-left: 10px;
  margin-top: 90px;
`;
