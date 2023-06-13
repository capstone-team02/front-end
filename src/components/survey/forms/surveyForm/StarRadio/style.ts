import styled from "styled-components";
export const CheckBox = styled.div<{ selected: boolean }>`
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  gap: 20px;

  width: 105px;
  height: 20px;

  border: 1px solid #8a8a8a;
  background-color: ${(props) => (props.selected ? " #F8EFD8" : "white")};
  border-radius: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  margin-top: 10px;
  margin-right: 20px;
  color: #000000;
  text-align: center;

  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const StarWrapper = styled.div<{ clicked: boolean }>`
  & svg {
    color: ${(props) => (props.clicked ? "#f9f12f " : " #acacac")};
    cursor: pointer;
  }

  // :hover svg {
  //   color: #f9f12f;
  // }

  // & svg:hover ~ svg {
  //   color: #acacac;
  // }

  .yellow {
    color: f9f12f;
  }

  // background-color: ${(props) => (props.clicked ? "#f9f12f " : " #acacac")};
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label``;
