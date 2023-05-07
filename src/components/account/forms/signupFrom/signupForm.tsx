import * as S from "./style";
import {useForm} from "react-hook-form"
import { ISignupForm } from "../../../../interfaces/accountForm";
import { signupPost} from "../../../../apis/api/accountApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupForm() {
    const navigate = useNavigate();
    const[submit, setSubmit] = useState(false);
    const [signupForm , setSignupForm] = useState<ISignupForm>({
        email : "",
        username : "",
        password : "",
        isFemale : true    
    });

    const{
        register,
        handleSubmit,
        formState: {errors, dirtyFields},
        setError,
        getValues,
        trigger,
    } =useForm<ISignupForm>({
        defaultValues: signupForm,
    });

    const onValid = async (data: ISignupForm) => {
        console.log("!");
        if (data.password !== data.verifyPassword) {
          setError("verifyPassword", { message: "비밀번호가 일치하지 않습니다." });
        } else {
          try {
            await signupPost({
              username: data.username,
              email: data.email,
              password: data.password,
              isFemale: data.isFemale
            }).then(() => navigate("success"));
          } catch (error) {
            console.log(error);
          }
        }
      };

      return (
        <S.FormContainer>
          <S.Form onSubmit={handleSubmit(onValid)}>
            <S.Title>회원가입</S.Title>
            <S.opt1></S.opt1>
            
            <S.NameWrapper>
              <S.Label>이름</S.Label>
              <S.Input
                {...register("username", {
                  required: "닉네임을 입력해주세요.",
                  pattern: {
                    value: /^[가-힣a-zA-Z]+$/,
                    message: "올바르지 않은 닉네임 형식입니다.",
                  },
                })}
                type="text"
              />
              {dirtyFields.username ? (
                <S.ErrorMessage>{errors?.username?.message}</S.ErrorMessage>
              ) : null}
            </S.NameWrapper>
    
            <S.IdWrapper>
              <S.Label>아이디</S.Label>
              <S.IdInputWrapper>
                <S.Input
                  {...register("email", {
                    required: "이메일을 입력해주세요.",
                    pattern: {
                        value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                        message: "올바르지 않은 이메일 형식입니다.",
                    },
                    
                    // onChange: (e) => {
                    //   setIdChecked(false);
                    //   trigger("id");
                    // },
                    // validate: (v) => idChecked === true,
                  }
                  )}
                  type="text"
                />
                 </S.IdInputWrapper>
               {/* // <S.CofirmBtn onClick={handleIdCheck}>| 확인</S.CofirmBtn>
             
              {dirtyFields.email ? (
                errors?.id?.message ? (
                  <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
                ) : idChecked ? (
                  validId ? (
                    <S.CheckedMessage>사용가능한 아이디입니다.</S.CheckedMessage>
                  ) : (
                    <S.ErrorMessage>사용중인 아이디입니다.</S.ErrorMessage>
                  )
                ) : (
                  <S.ErrorMessage>중복검사 해주세요.</S.ErrorMessage>
                ) */}
                {/* <S.Notice>
                  8~20자의 영문 대/소문자, 숫자, 특수문자로 설정해주세요.
                </S.Notice>
              )} */}
            </S.IdWrapper>
    
            <S.PasswordWrapper>
              <S.Label>비밀번호</S.Label>
              <S.Input
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                  pattern: {
                    value:  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                    message: "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!",

                  },
                  onChange: (e) => {
                    trigger("password");
                  },
                })}
                type="password"
              />
              {dirtyFields.password ? (
                <S.ErrorMessage>{errors?.password?.message}</S.ErrorMessage>
              ) : (
                <S.Notice>숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!</S.Notice>
              )}
    
              <S.Input
                {...register("verifyPassword", {
                  required: "비밀번호를 다시 입력해주세요.",
                  minLength: {
                    value: 10,
                    message: "10글자 미만입니다. ",
                  },
                  onChange: (e) => {
                    trigger("verifyPassword");
                  },
                })}
                type="password"
              />
              {dirtyFields.verifyPassword ? (
                <S.ErrorMessage>{errors?.verifyPassword?.message}</S.ErrorMessage>
              ) : (
                <S.Notice>비밀번호를 다시 한 번 입력해주세요.</S.Notice>
              )}
            </S.PasswordWrapper>
    
            <S.SignUpBtn>회원가입하기</S.SignUpBtn>
            {/* 
           
            
           
           */}
          </S.Form>
        </S.FormContainer>
      );
    
}

export default SignupForm;