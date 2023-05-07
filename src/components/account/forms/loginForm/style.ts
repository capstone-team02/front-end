import styled from "styled-components";

export const FormContainer = styled.div`
 height: 100%,
 width: 555px;
 display: flex;
 justify-content: center;
 `;

export const Form = styled.form`
  width: 555px;
  height: 610px;
  margin-top : 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoText1 = styled.h1`
display:flex;
font-family:'gosanja';
font-style: normal;
font-weight: 1000;
font-size: 15px;
color: #000000;
`
export const LogoText2 = styled.h1`
display:flex;
font-family:'gosanja';
font-weight: 1000;
font-size: 60px;
color: #000000;`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  height: 143px;
  left: 565px;

`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 555px;
  height: 155px;
  left: 443px;
  margin-top :105px;
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
  margin-top: 15px;
`;


export const Input = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 440px;
  height: 70px;
  left: 115px;
  top: -0.25px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding-left :15px;
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
export const SubmitFail = styled.div`
  width: 350px;
  height: 19px;
  font-family: "Pretendard";
  font-weight: 400;
  margin-left: 16px;
  margin-top: 10px;
  font-size: 13px;
  line-height: 19px;
  color: var(--orangeColor);
`;

export const LoginBtn = styled.button`
  display: flex;
  margin-top: 105px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;
  font-family: "Pretendard";
  width: 220px;
  height: 78px;
  left: 610px;
  top: 725px;
  cursor: pointer;

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
export const FindIdPasswordSignUp = styled.div`

font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
`;

export const Options = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 10px;s

width: 350px;
height: 27px;
top: 605px;
margin-top:20px;

`;


export const FindId = styled.span`
font-family: "Pretendard";
font-weight: 600;
font-size: 14px;
cursor: pointer;
margin-right: 20px;

`;
export const FindPassword = styled.span`
font-family: "Pretendard";
font-weight: 600;
font-size: 14px;
cursor: pointer;
margin-left: 20px;
margin-right: 20px;

`;

export const RegisterDiv = styled.div`
  width: 219px;
  height: 23px;
  margin-top: 50px;
  gap: 10px;
  span:first-child {
    font-weight: 400;
    font-size: 14px;
  }
`;
export const Register = styled.span`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  `;




