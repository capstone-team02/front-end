import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StartBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 35px 50px;

  position: absolute;
  width: 300px;
  height: 60px;
  top: 80%;
  left: 50%;

  background: #000000;
  border-radius: 20px;
  transform: translate(-50%, -80%);
  cursor: pointer;
`;

export const BtnText = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 60px;
  /* identical to box height */

  color: #ffffff;
`;

export const Title1 = styled.div`
  position: absolute;
  width: 250px;
  height: 29px;

  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #ffffff;
`;

export const Title2 = styled.div`
  position: absolute;
  width: 354px;
  height: 139px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  font-family: "gosanja";
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 139px;

  color: #ffffff;
`;

export const ExplainText1 = styled.div`
  position: absolute;
  width: 300px;

  top: 50%;
  left: 50%;
  margin-top: 10px;
  transform: translate(-50%, -50%);

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 50px;
  /* or 156% */

  text-align: center;

  color: #ffffff;
`;

export const ExplainText2 = styled.div`
  position: absolute;
  width: 300px;

  top: 55%;
  left: 50%;
  margin-top: 10px;
  transform: translate(-50%, -50%);

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 50px;
  /* or 156% */

  text-align: center;

  color: #ffffff;
`;
