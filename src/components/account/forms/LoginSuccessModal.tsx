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
      <S.ModalWrap>{children}</S.ModalWrap>
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
