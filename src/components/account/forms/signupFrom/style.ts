import styled from "styled-components";
import GlobalStyles from "../../../../styles/GlobalStyles";

export const FormContainer = styled.div`
  width: 736px;
  height: 100%;
  min-height: 740px;
  justify-content: center;
`;

export const Form = styled.form`
  width: 485px;
  height: 100%;
  margin-left: 80px;
  margin-top: 60px;
  align-items: center;
`;

export const Title = styled.div`
  width: 194px;
  height: 58px;
  top: 125px;
  margin-top: 60px;

  font-family: "gosanja";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 58px;
`;
export const optionDiv = styled.div`
  width: 430px;
  height: 36px;
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
  border-bottom: solid 3px #ACACAC;
  color: #ACACAC;
`;

export const Notice = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  margin-top: 20px;
  color : #ACACAC;
`;
export const Radio = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 15px;
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
  width: 375px;
  height: 91px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;
export const InputSubmitWrapper = styled.div`
  width: 437px;
  height: 56px;
  display: flex;
  flex-direction: row;
`;
export const HalfSubmit = styled.button`
  margin-left: auto;
  width: 69px;
  height: 29px;
  left: 725px;
  top: 438px;
  margin-top: 20px;
  background: #ededed;
  border: 0.5px solid #000000;
  border-radius: 10px;
`;
export const HalfInput = styled.input`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  padding: 16px 30px;
  gap: 80px;
  width: 180px;
  height: 25px;
  left: 428px;
  top: 379px;
  margin-bottom: 20px;
  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 20px;
`;

export const SubmitText = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
`;
export const EmailWrapper = styled.div`
  margin-top:40px;
  width: 375px;
  height: 91px;
  margin-bottom:20px;
`;

export const EmailInputWrapper = styled.div`
  width: 180px;
  height: 56px;
`;

export const CofirmBtn = styled.span`
  position: relative;
  right: 10px;
  top: 23px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`;

export const PasswordWrapper = styled.div`
  width: 386px;
  height: 91px;
  margin-top: 20px;
`;

export const VerifyPasswordWrapper = styled.div`
  width: 386px;
  height: 91pxF;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  box-sizing: b;
`;

export const ErrorMessage = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-left: 16px;
  margin-top: 10px;
  color: var(--orangeColor);
`;
export const CheckedMessage = styled.div`
  margin-top:40px;
  font-weight: 400;
  font-size: 14px;
  margin-left: 16px;
  margin-top: 20px;
  color: var(--orangeColor);
`;

export const SignUpBtn = styled.button`
  width: 270px;
  height: 50px;
  margin-top: 60px;
  background-color: var(--orangeColor);
  border: none;
  border-radius: 40px;
  color: black;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  margin-bottom: 80px;
`;

export const SubmitFail = styled.div`
  width: 350px;
  height: 19px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-left: 16px;
  margin-top: 10px;
  color: var(--orangeColor);
`;


export const Input = styled.input`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  padding: 16px 30px;
  gap: 80px;
  width: 375px;
  height: 25px;
  left: 428px;
  top: 379px;

  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 20px;
`;

export const Label = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: ;
  font-size: 21px;
  line-height: 25px;
`;
