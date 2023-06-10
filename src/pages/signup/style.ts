import styled from "styled-components";

export const FormContainer = styled.div`
  width: 600px;
  height: 100%;
  min-height: 740px;
  justify-content: center;
`;

export const Form = styled.form`
  width: 600px;
  height: 100%;
  margin-left: 80px;
  margin-top: 15px;
  align-items: center;
`;

export const Title = styled.div`
  width: 194px;
  height: 58px;
  margin-top: 15px;

  font-family: "gosanja";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 58px;
`;
export const optionDiv = styled.div`
  margin-top: 30px;
  width: 430px;
  height: 36px;
  margin-left: 50px;
  display: flex;
  align-items: center;
`;

export const opt1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 200px;
  height: 36px;
  left: 508px;
  top: 235px;
  border-bottom: solid 3px black;
`;

export const optText = styled.a`
  font-family: "gosanja";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: right;
`;

export const opt2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin-left: 30px;
  gap: 12px;

  width: 200px;
  height: 36px;
  left: 738px;
  top: 235px;
  border-bottom: solid 3px #acacac;
  color: #acacac;
`;

export const Notice = styled.div`
  font-weight: 700;
  font-size: 12px;
  margin-top: 15px;
  color: #acacac;
`;
export const Radio = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  cursor: pointer;
`;

export const IsFemaleContainer = styled.div`
  margin-top: 30px;
  width: 157px;
  height: 56px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const ChooseWrapper = styled.div`
  margin-top: 10px;
  width: 167px;
  height: 24px;
  display: flex;
  flex-direction: row;
`;

export const IsFemaleText = styled.label`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 15px;
  width: 35px;
`;

export const NameWrapper = styled.div`
  width: 510px;
  height: 91px;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  box-sizing: b;
`;
export const InputSubmitWrapper = styled.div`
  width: 510px;
  height: 66px;
  display: flex;
  flex-direction: row;
`;
export const HalfSubmitForEmail = styled.button`
  margin-left: auto;
  width: 69px;
  height: 29px;

  top: 438px;
  margin-top: 20px;
  background: #ededed;
  border: 0.5px solid #000000;
  border-radius: 10px;
  cursor: pointer;
`;

export const HalfSubmitForNickname = styled.button`
  margin-left: auto;
  width: 69px;
  height: 29px;

  top: 438px;
  margin-top: 20px;
  background: #ededed;
  border: 0.5px solid #000000;
  border-radius: 10px;
  cursor: pointer;
`;
export const HalfInput = styled.input`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  padding: 14px 30px;
  gap: 80px;
  width: 120px;
  height: 24px;
  left: 428px;
  top: 379px;
  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 20px;
  cursor: text;
`;

export const SubmitText = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;
export const EmailWrapper = styled.div`
  margin-top: 44px;
  height: 91px;
  width: 510px;
  display: flex;
  flex-direction: column;
  box-sizing: b;
`;

export const EmailInputWrapper = styled.div`
  width: 180px;
  height: 56px;
`;

export const PasswordWrapper = styled.div`
  width: 373px;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  box-sizing: b;
`;

export const VerifyPasswordWrapper = styled.div`
  width: 373px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  box-sizing: b;
`;

export const ErrorMessage = styled.div`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 12px;
  margin-top: 15px;
  width: 375px;
  color: #e02c2c;
`;
export const CheckedMessage = styled.div`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 12px;
  margin-top: 15px;
  color: #117e15;
`;

export const SignUpBtn = styled.button`
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  width: 143px;
  height: 59px;
  justify-content: center;
  margin-top: 30px;
  margin-left: 228.5px;
  background: #000000;
  border-radius: 20px;
  cursor: pointer;
`;
export const SignUpTxt = styled.a`
  width: 83px;
  height: 29px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 14px 30px;
  gap: 80px;
  width: 313px;
  height: 24px;
  left: 428px;
  top: 379px;
  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 20px;
  cursor: text;
`;

export const Label = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: ;
  font-size: 21px;
  line-height: 25px;
`;

export const Bar = styled.div`
  margin-top: 30px;
  width: 600px;
  height: 0px;

  border: 2px solid #c4c4c4;
`;
