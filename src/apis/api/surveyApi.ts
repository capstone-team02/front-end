import { baseApi } from "../utils/instance";
import { IDistrcitForm } from "../../interfaces/districtForm";
import axios from "axios";

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

export const surveyPost = () => baseApi.post(SURVEY_API);
