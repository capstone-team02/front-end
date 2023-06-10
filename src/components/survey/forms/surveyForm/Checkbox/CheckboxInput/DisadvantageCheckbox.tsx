import * as S from "./style";
import { useFormContext, useForm, set } from "react-hook-form";
import { ISurveyForm } from "../../../../../../interfaces/surveyForm";
import { useState } from "react";
import { DefaultValue } from "recoil";

function DisadvantageCheckBoxInput({
  index,
  disadvantageValue,
  selected,
  setSelected,
}: // disadvantageList,
// setDisadvantageList,
{
  index: number;
  disadvantageValue: string;
  selected: boolean[];
  setSelected: React.Dispatch<React.SetStateAction<boolean[]>>;
  disadvantageList: string[];
  setDisadvantageList: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  //const [disadvantageForm, setDisadvantageForm] = useState({});

  const { register } = useFormContext<ISurveyForm>();
  const toggleSelected = (index: number) => {
    //console.log("disadvantageForm " + disadvantageForm.disadvantage);
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };

  return (
    <>
      <S.Label
        onClick={() => {
          toggleSelected(index);
          //disadvantagePush(disadvantageValue);
        }}
      >
        <S.HashtagBox selected={selected[index]}>
          {disadvantageValue}
        </S.HashtagBox>
      </S.Label>
      <S.CheckBox
        id={disadvantageValue}
        {...register(`disadvantage.${index}`)}
        type="checkbox"
      ></S.CheckBox>
    </>
  );
}

export default DisadvantageCheckBoxInput;


