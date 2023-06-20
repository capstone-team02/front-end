import * as S from "./style";
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
import { resourceLimits } from "worker_threads";
import { GiRoundStar } from "react-icons/gi";
import StarRadio from "../../components/survey/forms/surveyForm/StarRadio/StarRadio";
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
    age: "",
    star: "",
    review: "",
  });

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

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const userEmail = localStorage.getItem("email");
  const onValid = async (data: ISurveyForm) => {
    try {
      await surveyPost({
        userEmail: localStorage.getItem("email"),
        district: districtResult,
        mood: moodResult,
        advantage: advantageResult,
        disadvantage: disadvantageResult,
        recommendAge: data.recommendAge,
        age: data.age,
        star: starResult,
        review: data.review,
      }).then(onClickToggleModal);
    } catch (error) {
      console.log(error);
    }
  };
  const [moodResult, setMoodResult] = useState<any>([]);
  const [advantageResult, setAdvantageResult] = useState<any>([]);
  const [disadvantageResult, setDisadvantageResult] = useState<any>([]);
  const [districtResult, setDistrictResult] = useState("");
  const [starResult, setStarResult] = useState("");

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
      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.AgeWrapper>
          <S.Label>나이</S.Label>
          <S.Input {...register("age")} />
        </S.AgeWrapper>
        <S.TownContainer>
          <S.Label>살고 있는 동네</S.Label>
          <S.TownWrapper>
            <GuDropDown
              districtResult={districtResult}
              setDistrictResult={setDistrictResult}
            />
          </S.TownWrapper>
        </S.TownContainer>

        <S.Wrapper2>
          <S.Label>분위기</S.Label>
          <S.CheckBoxWrapper>
            <MoodCheckBox result={moodResult} setResult={setMoodResult} />
          </S.CheckBoxWrapper>
        </S.Wrapper2>
        <S.Wrapper2>
          <S.Label>동네 장점</S.Label>
          <S.CheckBoxWrapper>
            <AdvantageCheckBox
              result={advantageResult}
              setResult={setAdvantageResult}
            />
          </S.CheckBoxWrapper>
        </S.Wrapper2>
        <S.Wrapper2>
          <S.Label>동네 단점</S.Label>
          <S.CheckBoxWrapper>
            <DisadvantageCheckBox
              result={disadvantageResult}
              setResult={setDisadvantageResult}
            />
          </S.CheckBoxWrapper>
        </S.Wrapper2>
        <S.Wrapper3>
          <S.Label>우리 동네 평가하기</S.Label>
          <S.StarWrapper>
            <StarRadio starResult={starResult} setStarResult={setStarResult} />
          </S.StarWrapper>
        </S.Wrapper3>
        <S.Wrapper4>
          <S.Label>우리동네 한줄 리뷰(50자제한)</S.Label>
          <S.ReviewInput {...register("review")}></S.ReviewInput>
        </S.Wrapper4>
        {isOpenModal && (
          <LoginSuccessModal onClickToggleModal={onClickToggleModal}>
            <S.SurveySuccess onClick={() => navigate("/login")}>
              회원가입 완료하기
            </S.SurveySuccess>
          </LoginSuccessModal>
        )}
        <S.UnderBar></S.UnderBar>
        <S.SuccessDiv>
          <S.SuccessBtn onClick={onClickToggleModal}>가입하기</S.SuccessBtn>
        </S.SuccessDiv>
      </S.Form>
    </S.FormContainer>
  );
}

export default Survey;
