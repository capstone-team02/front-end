import * as S from "./style";
import { useNavigate } from "react-router-dom";

function Start() {
  return (
    <S.Container>
      <S.Image src={require("../../imgs/startPage.png")}></S.Image>
      <S.Title1>도시 추천 큐레이팅 서비스</S.Title1>
      <S.Title2>NADO</S.Title2>
      <S.ExplainText1>내가 살고 싶은 곳</S.ExplainText1>
      <S.ExplainText2>나의 도시를 찾아서</S.ExplainText2>
      <S.StartBtn>
        <S.BtnText>시작하기</S.BtnText>
      </S.StartBtn>
    </S.Container>
  );
}

export default Start;
