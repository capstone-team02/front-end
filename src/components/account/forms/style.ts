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

  position: relative;
  width: 670px;
  height: 854px;

  background: #ffffff;
  border: 1px solid #868686;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

//뒷배경을 어둡게 만들어주는
export const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default styled;
