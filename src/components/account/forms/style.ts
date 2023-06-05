import styled from "styled-components";

export const ModalContainer = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0px;
  gap: 54px;

  position: absolute;
  width: 670px;
  height: 854px;
  left: calc(50% - 670px / 2);
  top: 100px;
`;

export const ModalWrap = styled.div`
  width: 670px;
  height: 854px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

//뒷배경을 어둡게 만들어주는
export const ModalBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Ment1 = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  /* identical to box height */

  text-align: center;

  color: black;
  margin-top: 50px;
  margin-bottom: 54px;
`;

export const Ment2 = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
  /* or 48px */

  text-align: center;

  color: #000000;
`;

export const SuccessIcon = styled.img`
  width: 180px;
  height: 180px;
`;
export const Line = styled.div`
  width: 670px;
  height: 0px;

  border: 0.7px solid #9d9d9d;
  margin-top: 54px;
`;
export default styled;
