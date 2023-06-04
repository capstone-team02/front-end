import { stringify } from "querystring";
import { baseApi } from "../utils/instance";
import axios from "axios";

const REVIEW_API = "/mainMap/totalReview";
const KEYWORD_API = "/mainMap/districtKeyword";
const BUDONGSAN_API = "/mainMap/realEstateByDistrict";

export const reviewDistrictPost = (district: string) => {
  baseApi.post(REVIEW_API, {
    params: { district },
  });
  console.log("params " + district);
};

export const keyWordDistrictPost = (district: string) => {
  baseApi.post(KEYWORD_API, {
    params: { district },
  });
  console.log("params " + district);
};

export const budongsanDistrictPost = (district: string) => {
  baseApi.post(BUDONGSAN_API, {
    params: { district },
  });
  console.log("params " + district);
};
