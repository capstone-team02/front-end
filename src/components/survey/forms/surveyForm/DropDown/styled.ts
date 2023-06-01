import styled from "styled-components";
export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 100%;
`;
export const DropDownContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 100%;
  left: 210px;
`;

export const DropDownWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 192px;
  top: 390px;
  margin-top: 7px;
  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
  position: absolute;
  padding-inline-start: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DropDownWrapper2 = styled.ul`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 190px;
  left: 210px;
  margin-top: 7px;
  position: absolute;
`;

export const ListItem = styled.li`
  display: flex;
  // justify-content: left;
  // align-items: left;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #4b4b4b;

  list-style: none;
  padding: 1rem;
  z-index: 1;
  margin-top: 0.2rem;
`;

export const DistrictDefault = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 10px 16px 30px;
  gap: 80px;

  width: 140px;
  height: 24px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
`;

export const Arrow = styled.a`
  display: flex;
  justify-content: right;
  align-items: right;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 18px;
  color: #4b4b4b;
  transform: rotate(90deg);
  margin-left: auto;
`;
