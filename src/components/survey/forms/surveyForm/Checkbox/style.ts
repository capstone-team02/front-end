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

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label``;
