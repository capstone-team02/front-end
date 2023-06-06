import { stringify } from "querystring";
import { baseApi } from "../utils/instance";
import axios from "axios";
import { IMapDistrictForm } from "../../interfaces/surveyForm";

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

// export const budongsanDistrictPost = (MapDistrictForm: IMapDistrictForm) => {
//   baseApi
//     .post(BUDONGSAN_API, {
//       district: MapDistrictForm.district,
//     })
//     .then((res) => res.data);
//   console.log("params " + MapDistrictForm.district);
// };

export const budongsanDistrictPost = (MapDistrictForm: IMapDistrictForm) =>
  baseApi.post(BUDONGSAN_API, {
    district: MapDistrictForm.district,
  });
