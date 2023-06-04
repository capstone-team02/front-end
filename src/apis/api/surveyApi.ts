import { baseApi } from "../utils/instance";
import { IDistrcitForm } from "../../interfaces/districtForm";
import axios from "axios";

const DISTRICT_API = "/survey/districtNames";
const GU_API = "/survey/guNames";
const SURVEY_API = "/survey/surveyAnswer";
export const districtGet = () =>
  //districtForm: IDistrcitForm
  //baseApi.get(SURVEY_API).then((response) => response.data);
  baseApi.get(DISTRICT_API);

export const guNameGet = () => baseApi.get(GU_API);
export const surveyPost = () => baseApi.post(SURVEY_API);
