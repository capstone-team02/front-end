export interface ISurveyForm {
  userEmail: string;
  district: string;
  mood: string[];
  advantage: string[];
  disadvantage: string[];
  recommendAge: string;
  recommendHousing: string;
  age: string;
  star: string;
  review: string;
  isFemale: boolean;
}

export interface IMapDistrictForm{

  district: string;
}