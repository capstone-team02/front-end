import styled from "styled-components";

export const Form = styled.div`
  width: 100vw;
  height: 100%;
`;

export const Image = styled.img`
  position: relative;
  width: 100vw;
  height: 450px;
`;

export const Title = styled.a`
  position: absolute;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  color: #ffffff;
  left: calc(50% - 207px / 2 + 0.5px);
  top: 34px;
  align: center;
`;

export const Container = styled.form`
  position: absolute;
  width: 1129px;
  height: 100%;
  left: calc(50% - 1129px / 2 + 0.5px);
  top: 129px;

  background: #ffffff;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
`;

export const ProfileImage = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  left: 62px;
  top: 51px;
  border-radius: 200px;
  background: #d9d9d9;
`;

export const UpperDiv = styled.div`
  position: absolute;
  width: 1129px;
  height: 322px;
`;

export const Horiziontal = styled.div`
  position: absolute;
  width: 1129px;
  height: 0px;
  left: 0px;
  top: 318px;

  border: 0.5px solid #dddddd;
`;

export const Vertical = styled.div`
  position: absolute;
  width: 0px;
  height: 100%;
  border: 0.5px solid #dddddd;
  margin-left: 344px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;

  position: absolute;
  width: 100%;
  height: 170px;
  left: 380px;
  top: 75px;
`;

export const Nickname = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;

  color: #000000;
`;

export const Welcome = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;

  color: #000000;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 22px;

  width: 267px;
  height: 43px;
`;

export const InfoWord = styled.a`
  width: 180px;
  height: 25px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;

  color: #8d8d8d;
`;

export const InfoButton = styled.button`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  gap: 20px;

  width: 120px;
  height: 42px;

  background: #eaeaea;
  border: none;
  border-radius: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
`;

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 10px;

  position: absolute;
  width: 233px;
  height: 39px;
  left: 50px;
  top: 352px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #000000;
`;

export const UserTagWrapper = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 24px;

  position: absolute;
  width: 258px;
  height: 108px;
  left: 40px;
  top: 442px;
`;
export const TagDiv = styled.div`
  justify-content: space-between;
  width: 258px;
  height: 42px;
  display: flex;
  flex-direction: row;
`;

export const UserTag = styled.div`
  align-items: center;
  padding: 10px 5px;
  gap: 20px;

  width: 100px;
  height: 22px;

  background: #ffffff;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
`;

export const ChangeInfo = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 42px 12px 40px;
  gap: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */

  color: #000000;

  position: absolute;
  width: 171px;
  height: 53px;
  left: 83px;
  top: 601px;

  background: #e6e6e6;
  border-radius: 10px;
  border: none;
`;

export const MyActivity = styled.a`
  position: absolute;
  width: 130px;
  height: 38px;
  left: 380px;
  top: 357px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #000000;
`;

export const MyActivityButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 339px;
  position: absolute;
  left: 380px;
  top: 398px;
`;

export const MyActivityButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 48px;
  margin-top: 49px;
  text-align: left;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  padding: 0px 0px 19px 0px;
  color: #6c6c6c;
  line-height: 29px;
  /* identical to box height */
  border: none;
  border-bottom: 0.5px solid #6c6c6c;
  background: #ffffff;
`;

export const Arrow = styled.a`
  margin: auto 0 0 auto;
  font-family: "Pretendard";
  height:100%
  color: #6c6c6c;
  font-size: 40px;
  font-weight: 800;
`;

export default styled;
