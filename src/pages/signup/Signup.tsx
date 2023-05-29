import * as S from "./style";
//import * as M from "../../components/account/forms/style";
import { useForm } from "react-hook-form";
import { ISignupForm } from "../../interfaces/accountForm";
import {
  emailCheckPost,
  nicknameCheckPost,
  signupPost,
} from "../../apis/api/accountApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import LoginSuccessModal from "../../components/account/forms/LoginSuccessModal";
import useOpenModal from "../../hooks/useOpenModal";

function SignUp() {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [signupForm, setSignupForm] = useState<ISignupForm>({
    email: "",
    nickname: "",
    password: "",
    isFemale: true,
  });
  const [value, setValue] = useState(true);
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [validNickname, setValidNickname] = useState(true);
  const [emailChecked, setEmailChecked] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setError,
    getValues,
    trigger,
  } = useForm<ISignupForm>({
    defaultValues: signupForm,
  });

  const handleNicknameCheck = async () => {
    const nickname = getValues("nickname");
    setNicknameChecked(true);
    console.log(nickname);
    try {
      await nicknameCheckPost(nickname).then((res) => {
        console.log(res.data);
      });
      console.log("success");

      setValidNickname(true);
      setNicknameChecked(true);
    } catch (error) {
      setValidNickname(false);
      setNicknameChecked(true);
      console.log(error);
    }
  };

  const handleEmailCheck = async () => {
    const email = getValues("email");
    setEmailChecked(true);
    console.log(email);
    try {
      await emailCheckPost(email).then((res) => {
        console.log(res.data);
      });
      console.log("success");

      setValidEmail(true);
      setEmailChecked(true);
    } catch (error) {
      setValidEmail(false);
      setEmailChecked(true);
      console.log(error);
    }
  };

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const onValid = async (data: ISignupForm) => {
    console.log("!");
    if (data.password !== data.verifyPassword) {
      setError("verifyPassword", { message: "비밀번호가 일치하지 않습니다." });
    } else {
      try {
        console.log(data);
        await signupPost({
          nickname: data.nickname,
          email: data.email,
          password: data.password,
          isFemale: data.isFemale,
        }).then(onClickToggleModal);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <S.FormContainer>
      <S.Title>회원가입</S.Title>
      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.optionDiv>
          <S.opt1>
            <S.optText>회원 정보 입력</S.optText>
          </S.opt1>
          <S.opt2>
            <S.optText>사전 정보</S.optText>
          </S.opt2>
        </S.optionDiv>

        <S.IsFemaleContainer>
          <S.Label>성별</S.Label>

          <S.ChooseWrapper>
            <S.IsFemaleText>여자</S.IsFemaleText>
            <S.Radio
              value={"true"}
              id={"isFemale"}
              type="radio"
              {...register("isFemale")}
            ></S.Radio>
            <S.IsFemaleText>남자</S.IsFemaleText>
            <S.Radio
              value={"false"}
              id={"isFemale"}
              type="radio"
              {...register("isFemale")}
            ></S.Radio>
          </S.ChooseWrapper>
        </S.IsFemaleContainer>
        <S.NameWrapper>
          <S.Label>닉네임</S.Label>
          <S.InputSubmitWrapper>
            <S.HalfInput
              {...register("nickname", {
                required: "닉네임을 입력해주세요.",
                pattern: {
                  value: /^[가-힣a-zA-Z]+$/,
                  message: "올바르지 않은 닉네임 형식입니다.",
                },
                onChange: (e) => {
                  setNicknameChecked(false);
                  trigger("nickname");
                },
                validate: (v) => nicknameChecked === true,
              })}
              type="text"
            />
            <S.HalfSubmitForNickname onClick={handleNicknameCheck}>
              <S.SubmitText>중복 확인</S.SubmitText>
            </S.HalfSubmitForNickname>
          </S.InputSubmitWrapper>
          {dirtyFields.nickname ? (
            errors?.nickname?.message ? (
              <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
            ) : nicknameChecked ? (
              validNickname ? (
                <S.CheckedMessage>사용 가능한 닉네임입니다.</S.CheckedMessage>
              ) : (
                <S.ErrorMessage>사용중인 닉네임입니다.</S.ErrorMessage>
              )
            ) : (
              <S.ErrorMessage>중복검사 해주세요.</S.ErrorMessage>
            )
          ) : null}
        </S.NameWrapper>

        <S.EmailWrapper>
          <S.Label>이메일</S.Label>
          <S.EmailInputWrapper>
            <S.InputSubmitWrapper>
              <S.Input
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                    message: "올바르지 않은 이메일 형식입니다.",
                  },
                })}
                type="text"
              />
              <S.HalfSubmitForEmail onClick={handleEmailCheck}>
                <S.SubmitText>중복 확인</S.SubmitText>
              </S.HalfSubmitForEmail>
            </S.InputSubmitWrapper>
            {dirtyFields.email ? (
              errors?.email?.message ? (
                <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
              ) : emailChecked ? (
                validEmail ? (
                  <S.CheckedMessage>사용 가능한 이메일입니다.</S.CheckedMessage>
                ) : (
                  <S.ErrorMessage>사용중인 이메일입니다.</S.ErrorMessage>
                )
              ) : (
                <S.ErrorMessage>중복검사 해주세요.</S.ErrorMessage>
              )
            ) : null}
          </S.EmailInputWrapper>
        </S.EmailWrapper>

        <S.PasswordWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Input
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                message:
                  "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!",
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
            <S.Notice>
              숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!
            </S.Notice>
          )}
        </S.PasswordWrapper>
        <S.VerifyPasswordWrapper>
          <S.Label>비밀번호 확인</S.Label>

          <S.Input
            {...register("verifyPassword", {
              required: "비밀번호를 다시 입력해주세요.",
              minLength: {
                value: 10,
                message: "일치하지 않습니다. ",
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
        </S.VerifyPasswordWrapper>
        <S.Bar></S.Bar>
        <S.SignUpBtn>
          <S.SignUpTxt>다음단계</S.SignUpTxt>
        </S.SignUpBtn>
        {isOpenModal && (
          <LoginSuccessModal onClickToggleModal={onClickToggleModal}>
            아아
          </LoginSuccessModal>
        )}
      </S.Form>
    </S.FormContainer>
  );
}

export default SignUp;
