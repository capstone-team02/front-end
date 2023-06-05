import React, { PropsWithChildren } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function LoginSuccessModal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  const navigate = useNavigate();
  return (
    <S.ModalContainer>
      <S.ModalWrap>
        <S.Ment1>회원가입 완료 </S.Ment1>
        <S.Ment2> 회원가입을 축하드립니다! </S.Ment2>
        <S.Ment2>자유롭게 이용하면서</S.Ment2>
        <S.Ment2>나만의 도시를찾아보세요</S.Ment2>

        <S.SuccessIcon
          src={require("../../../imgs/icon/loginSuccessIcon.png")}
        ></S.SuccessIcon>
        <S.Line></S.Line>
        {children}
      </S.ModalWrap>
      <S.ModalBackGround
        onClick={(e: React.MouseEvent) => {
          //e.preventDefault();
          navigate("/");
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
}

export default LoginSuccessModal;
