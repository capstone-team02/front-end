import { baseApi } from "../utils/instance";
import { IDistrcitForm } from "../../interfaces/districtForm";
import axios from "axios";
import { ISurveyForm } from "../../interfaces/surveyForm";

const DISTRICT_API = "/survey/districtNames";

const SURVEY_API = "/survey/surveyAnswer";

const MOOD_API = "/survey/moodEntities";
const ADVANTAGE_API = "/survey/advantageEntities";
const DISADVANTAGE_API = "/survey/disadvantageEntities";

export const districtGet = () =>
  //districtForm: IDistrcitForm
  //baseApi.get(SURVEY_API).then((response) => response.data);
  baseApi.get(DISTRICT_API);

export const moodGet = () => baseApi.get(MOOD_API);

export const advantageGet = () => baseApi.get(ADVANTAGE_API);

export const disadvantageGet = () => baseApi.get(DISADVANTAGE_API);

export const surveyPost = (surveyForm: ISurveyForm) =>
  baseApi
    .post(SURVEY_API, {
      userEmail: surveyForm.userEmail,
      district: surveyForm.district,
      mood: surveyForm.mood,
      advantage: surveyForm.advantage,
      disadvantage: surveyForm.disadvantage,
      recommendAge: surveyForm.recommendAge,
      age: surveyForm.age,
      star: surveyForm.star,
      review: surveyForm.review,
    })
    .then((response) => {
      console.log("response");
      localStorage.clear();
    });
