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
  border-bottom: solid 3px #acacac;
  color: #acacac;
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
  border-bottom: solid 3px;
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
`;

export const AgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  width: 180px;
  height: 95px;
  margin-top: 32px;

  top: 170px;
`;

export const TownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  width: 417px;
  height: 55px;
  top: 310px;
`;

export const TownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  width: 417px;
  height: 100%;
  margin-top: 32px;
`;



export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;

  width: 570px;
  height: 145px;
  margin-top: 32px;
`;

export const Wrapper3 = styled.div`
  width: 240px;
  height: 93px;
  margin-top: 32px;
`;

export const Wrapper4 = styled.div`
  width: 422px;
  height: 140px;
  margin-top: 32px;
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
// export const DropDownContainer = styled.ul`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 16px 30px;
//   gap: 80px;
//   width: 120px;
//   height: 190px;

//   position: absolute;

//   background: #ffffff;
//   border: 1px solid #8a8a8a;
//   border-radius: 10px;
//   list-style: none;
//   overflow-y: scroll;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;
export const ReviewInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  width: 382px;
  height: 55px;

  background: #ffffff;
  border: 0.5px solid #808080;
  border-radius: 10px;
`;



export const DropDownBoxWrap = styled.div`
  height: 152px;
  display: inline-block;
  width: 7.5rem;
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

export const Label = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;

  color: #000000;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 30px;
  gap: 80px;

  width: 120px;
  height: 24px;

  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
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
`;

export const SubmitText = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
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

export const Bar = styled.div`
  margin-top: 30px;
  width: 600px;
  height: 0px;

  border: 2px solid #c4c4c4;
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

export const SuccessBtn = styled.button`
  display: flex;
  flex-direction: row;
  padding: 10px 25px;

  width: 138px;
  height: 42px;
  margin-top: 40px;

  background: #000000;
  border-radius: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  text-align: center;
  align-items: center;

  color: #ffffff;
`;
