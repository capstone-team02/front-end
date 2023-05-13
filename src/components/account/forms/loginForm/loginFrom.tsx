import * as S from "./style";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ILoginForm } from "../../../../interfaces/accountForm";
import { useState } from "react";
import useLogin from "../../../../hooks/useLogin";

function LoginForm() {
  const navigate = useNavigate();
  const [submitFail, setSubmitFail] = useState(false);
  const { register, handleSubmit } = useForm<ILoginForm>();
  const { handleLogin } = useLogin();
  const onValid = async (loginForm: ILoginForm) => {
    const success = await handleLogin(loginForm);
    if (success) {
      navigate(-1);
    } else {
      setSubmitFail(true);
    }
  };
  return (
    <S.FormContainer onSubmit={handleSubmit(onValid)}>
      <S.Form>
        <S.Logo>
          <S.LogoText1>도시 추천 큐레이팅 서비스</S.LogoText1>
          <S.LogoText2>마을도감</S.LogoText2>
        </S.Logo>
        <S.LoginWrapper>
          <S.IdWrapper>
            <S.Label htmlFor="email">이메일</S.Label>
            <S.Input {...register("email", { required: true })} type="text" />
          </S.IdWrapper>
          <S.PasswordWrapper>
            <S.Label htmlFor="password">비밀번호</S.Label>
            <S.Input
              {...register("password", { required: true })}
              type="password"
            />
          </S.PasswordWrapper>
        </S.LoginWrapper>
        {submitFail ? (
          <S.SubmitFail>
            가입되지 않은 계정이거나, 아이디 또는 비밀번호가 옳지 않습니다.
          </S.SubmitFail>
        ) : (
          <S.SubmitFail></S.SubmitFail>
        )}
        <S.Options>
          <S.FindIdPasswordSignUp>
            <S.FindId>
              <Link to="find-id">아이디 찾기</Link>
            </S.FindId>{" "}
             |  {" "}
            <S.FindPassword
              onClick={() => {
                navigate("find-password");
              }}
            >
              비밀번호 찾기
            </S.FindPassword>
            {" | "}
            <S.Register
              onClick={() => {
                navigate("/signup");
              }}>
                회원가입
            </S.Register>
          </S.FindIdPasswordSignUp>
        </S.Options>
        <S.LoginBtn>
          <S.LoginText>LOGIN</S.LoginText>
        </S.LoginBtn>

      </S.Form>
    </S.FormContainer>
  );
}
export default LoginForm;
