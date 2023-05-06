import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%
  height: 100%
  display: flex;
  justify-content: center;
`;
export const Left = styled.div`
  width: 443px;
  height: 100%;
  display: flex-start;
  `
export const Form = styled.form`
  width: 555px;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 555px;
  height: 155px;
  left: 443px;
  top: 407px;
`;
export const LogoText1 = styled.h1`
display:flex;
font-style: normal;
font-weight: 1000;
font-size: 15px;
color: #000000;
`
export const LogoText2 = styled.h1`
display:flex;
font-weight: 1000;
font-size: 60px;
color: #000000;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 310px;
  height: 143px;
  left: 565px;
  top: 159px;

`;

export const IdWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 42px;
  position: relative;
  height: 70px;
  width: 555px;
`;

export const PasswordWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 42px;
  position: relative;
  height: 70px;
  width: 555px;
`;

export const LoginBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;

  position: absolute;
  width: 220px;
  height: 78px;
  left: 610px;
  top: 725px;

  background: #050505;
  border-radius: 30px;
`;

export const LoginText = styled.a`
  width: 120px;
  height: 48px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height */

  color: #ffffff;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FindIdPasswordSignUp = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 10px;

position: absolute;
width: 316px;
height: 27px;
left: 562px;
top: 605px;
`;
export const FindId = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
export const FindPassword = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
export const RegisterDiv = styled.div`
  width: 219px;
  height: 23px;
  margin-top: 50px;
  gap: 10px;
  span:first-child {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const Register = styled.span`
  color: #191919;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 8px;
`;


export const SubmitFail = styled.div`
  width: 350px;
  height: 19px;
  font-weight: 400;
  margin-left: 16px;
  margin-top: 10px;
  font-size: 13px;
  line-height: 19px;
  color: var(--orangeColor);
`;
export const Input = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 440px;
  height: 70px;
  left: 115px;
  top: -0.25px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
`;

export const Label = styled.label`
  width: 80px;
  height: 34px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  /* identical to box height */

  text-align: right;

  color: #000000;
`;
