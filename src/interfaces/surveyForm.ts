import { SetStateAction } from "react";

export interface ISurveyForm {
  userEmail: string;
  district: string;
  mood: string[];
  advantage: string[];
  disadvantage: string[];
  recommendAge: string;
  age: string;
  star: string;
  review: string;
}

export interface IMapDistrictForm {
  district: string;
}

export interface IPropsForm {
  result: string[];
  setResult: React.Dispatch<SetStateAction<string[]>>;
}
