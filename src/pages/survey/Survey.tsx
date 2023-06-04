import * as S from "./style";
//import * as M from "../../components/account/forms/style";
import { useForm } from "react-hook-form";
import { ISignupForm } from "../../interfaces/accountForm";
import {
  emailCheckPost,
  nicknameCheckPost,
  signupPost,
} from "../../apis/api/accountApi";
import { districtGet } from "../../apis/api/surveyApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import LoginSuccessModal from "../../components/account/forms/LoginSuccessModal";
import { IDistrcitForm } from "../../interfaces/districtForm";
import GuDropDown from "../../components/survey/forms/surveyForm/DropDown/GuDropDown";
import MoodCheckBox from "../../components/survey/forms/surveyForm/Checkbox/MoodCheckBox";
import AdvantageCheckBox from "../../components/survey/forms/surveyForm/Checkbox/AdvantageCheckbox";

function Survey() {
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
  const [districts, setDistricts] = useState<IDistrcitForm>({
    guName: "",
    districtName: "",
  });
  // // const [districts, setDistricts] = useState<false>();
  // useEffect(() => {
  //   districtGet().then((response) => {
  //     //console.log(response);
  //     setDistricts(response);
  //   });
  // }, []);

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
  //const { allDistricts } = useDistrict();

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    console.log(!isOpenModal);
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
      <S.optionDiv>
        <S.opt1>
          <S.optText>회원 정보 입력</S.optText>
        </S.opt1>
        <S.opt2>
          <S.optText>사전 정보</S.optText>
        </S.opt2>
      </S.optionDiv>
      <S.Form onSubmit={handleSubmit(onValid)}></S.Form>
      <S.AgeWrapper>
        <S.Label>나이</S.Label>
        <S.Input></S.Input>
      </S.AgeWrapper>
      <S.TownContainer>
        <S.Label>살고 있는 동네</S.Label>
        <S.TownWrapper>
          <GuDropDown></GuDropDown>
        </S.TownWrapper>
      </S.TownContainer>
      <S.Wrapper2>
        <S.Label>분위기</S.Label>
        <S.CheckBoxWrapper>
          <MoodCheckBox></MoodCheckBox>
        </S.CheckBoxWrapper>
      </S.Wrapper2>
      <S.Wrapper2>
        <S.Label>동네 장점</S.Label>
        <S.CheckBoxWrapper>
          <AdvantageCheckBox></AdvantageCheckBox>
        </S.CheckBoxWrapper>
      </S.Wrapper2>
      <S.Wrapper2>
        <S.Label>동네 단점</S.Label>
      </S.Wrapper2>
      <S.Wrapper3>
        <S.Label>우리 동네 평가하기</S.Label>
      </S.Wrapper3>
      <S.Wrapper4>
        <S.Label>우리동네 한줄 리뷰(50자제한)</S.Label>
        <S.ReviewInput></S.ReviewInput>
      </S.Wrapper4>
      {isOpenModal && (
        <LoginSuccessModal onClickToggleModal={onClickToggleModal}>
          <S.Ment1>회원가입 완료 </S.Ment1>
          <S.Ment2> 회원가입을 축하드립니다! </S.Ment2>
          <S.Ment2>자유롭게 이용하면서</S.Ment2>
          <S.Ment2>나만의 도시를찾아보세요</S.Ment2>
          <S.SuccessIcon
            src={require("../../imgs/icon/loginSuccessIcon.png")}
          ></S.SuccessIcon>
          <S.Line></S.Line>
          <S.SuccessBtn onClick={(onClickToggleModal) => navigate("/")}>
            팝업창 닫기
          </S.SuccessBtn>
        </LoginSuccessModal>
      )}
      <S.SignUpBtn onClick={onClickToggleModal}></S.SignUpBtn>
    </S.FormContainer>
  );
}

export default Survey;
