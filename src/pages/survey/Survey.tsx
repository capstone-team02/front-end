import * as S from "./style";
//import * as M from "../../components/account/forms/style";
import { useForm } from "react-hook-form";
import { ISignupForm } from "../../interfaces/accountForm";
import { ISurveyForm } from "../../interfaces/surveyForm";
import {
  emailCheckPost,
  nicknameCheckPost,
  signupPost,
} from "../../apis/api/accountApi";

import { surveyPost } from "../../apis/api/surveyApi";
import { districtGet } from "../../apis/api/surveyApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, SetStateAction } from "react";
import LoginSuccessModal from "../../components/account/forms/LoginSuccessModal";
import { IDistrcitForm } from "../../interfaces/districtForm";
import GuDropDown from "../../components/survey/forms/surveyForm/DropDown/GuDropDown";
import AdvantageCheckBox from "../../components/survey/forms/surveyForm/Checkbox/AdvantageCheckbox";
import MoodCheckBox from "../../components/survey/forms/surveyForm/Checkbox/MoodCheckBox";
import DisadvantageCheckBox from "../../components/survey/forms/surveyForm/Checkbox/DisadvantageCheckbox";
import StarDropDown from "../../components/survey/forms/surveyForm/DropDown/StarDropDown";
import DisadvantageCheckBoxInput from "../../components/survey/forms/surveyForm/Checkbox/CheckboxInput/DisadvantageCheckbox";

function Survey() {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  const [surveyForm, setSurveyForm] = useState<ISurveyForm>({
    userEmail: "",
    district: "",
    mood: [],
    advantage: [],
    disadvantage: [],
    recommendAge: "",
    recommendHousing: "",
    age: "",
    star: "",
    review: "",
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
  } = useForm<ISurveyForm>({
    defaultValues: surveyForm,
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

  // const handleNicknameCheck = async () => {
  //   const nickname = getValues("nickname");
  //   setNicknameChecked(true);
  //   console.log(nickname);
  //   try {
  //     await nicknameCheckPost(nickname).then((res) => {
  //       console.log(res.data);
  //     });
  //     console.log("success");

  //     setValidNickname(true);
  //     setNicknameChecked(true);
  //   } catch (error) {
  //     setValidNickname(false);
  //     setNicknameChecked(true);
  //     console.log(error);
  //   }
  // };

  // const handleEmailCheck = async () => {
  //   const email = getValues("email");
  //   setEmailChecked(true);
  //   console.log(email);
  //   try {
  //     await emailCheckPost(email).then((res) => {
  //       console.log(res.data);
  //     });
  //     console.log("success");

  //     setValidEmail(true);
  //     setEmailChecked(true);
  //   } catch (error) {
  //     setValidEmail(false);
  //     setEmailChecked(true);
  //     console.log(error);
  //   }
  // };
  //const { allDistricts } = useDistrict();

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    console.log(!isOpenModal);
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const onValid = async (data: ISurveyForm) => {
    console.log("!");
    try {
      console.log(data);
      await surveyPost({
        userEmail: data.userEmail,
        district: data.district,
        mood: data.mood,
        advantage: data.advantage,
        disadvantage: data.disadvantage,
        recommendAge: data.recommendAge,
        recommendHousing: data.recommendHousing,
        age: data.age,
        star: data.star,
        review: data.review,
        isFemale: data.isFemale,
      }).then(onClickToggleModal);
    } catch (error) {
      console.log(error);
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
        <S.Input />
      </S.AgeWrapper>

      <S.TownContainer>
        <S.Label>살고 있는 동네</S.Label>
        <S.TownWrapper>
          <GuDropDown />
        </S.TownWrapper>
      </S.TownContainer>

      <S.Wrapper2>
        <S.Label>분위기</S.Label>
        <S.CheckBoxWrapper>
          <MoodCheckBox />
        </S.CheckBoxWrapper>
      </S.Wrapper2>

      <S.Wrapper2>
        <S.Label>동네 장점</S.Label>
        <S.CheckBoxWrapper>
          <AdvantageCheckBox />
        </S.CheckBoxWrapper>
      </S.Wrapper2>

      <S.Wrapper2>
        <S.Label>동네 단점</S.Label>
        <S.CheckBoxWrapper>
          <DisadvantageCheckBox />
        </S.CheckBoxWrapper>
      </S.Wrapper2>
      <S.Wrapper3>
        <S.Label>우리 동네 평가하기</S.Label>
        <S.StarWrapper>
          <StarDropDown />
        </S.StarWrapper>
      </S.Wrapper3>
      <S.Wrapper4>
        <S.Label>우리동네 한줄 리뷰(50자제한)</S.Label>
        <S.ReviewInput></S.ReviewInput>
      </S.Wrapper4>
      {isOpenModal && (
        <LoginSuccessModal onClickToggleModal={onClickToggleModal}>
          <S.SurveySuccess onClick={(onClickToggleModal) => navigate("/main")}>
            회원가입 완료하기
          </S.SurveySuccess>
        </LoginSuccessModal>
      )}
      <S.UnderBar></S.UnderBar>
      <S.SuccessDiv>
        <S.SuccessBtn onClick={onClickToggleModal}>가입하기</S.SuccessBtn>
      </S.SuccessDiv>
    </S.FormContainer>
  );
}

export default Survey;
