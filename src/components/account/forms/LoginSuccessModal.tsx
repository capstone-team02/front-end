import React, { PropsWithChildren } from "react";
import * as S from "./style";
interface ModalDefaultType {
    onClickToggleModal: () => void;
  }

function LoginSuccessModal({
    onClickToggleModal,
    children,
  }: PropsWithChildren<ModalDefaultType>) {
    return (
      <S.ModalContainer>
        <S.ModalWrap>{children}</S.ModalWrap>
        <S.ModalBackGround
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
  
            if (onClickToggleModal) {
              onClickToggleModal();
            }
          }}
        />
      </S.ModalContainer>
    );
  }

  export default LoginSuccessModal;