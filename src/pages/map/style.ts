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
export const TopBox = styled.button`
  width: 133px;
  height: 149px;
  border-radius: 10px;
  border: 1px solid #000000;
  margin-top: 5px;
  cursor: pointer;
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
`;

export const BuDongSanContainer = styled.div`
  height: 249px;

  margin-top: 45px;
  display: flex;
  flex-direction: column;
  margin-bottom: 250px;
`;

export const BuDongSanWrapper = styled.div`
  height: 184px;
  margin-top: 20px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const BuDongSanBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 14px;
  gap: 35px;

  width: 110px;
  height: 184px;

  background: #ffffff;
  border: 0.5px solid #000000;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
