import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { advantageGet } from "../../../../../../apis/api/surveyApi";
import React from "react";
import { ISurveyForm } from "../../../../../../interfaces/surveyForm";

function AdvantageCheckBoxInput({
  index,
  advantageValue,
  selected,
  setSelected,
}: {
  index: number;
  advantageValue: string;
  selected: boolean[];
  setSelected: React.Dispatch<React.SetStateAction<boolean[]>>;
}) {
  // const { register } = useFormContext<ISurveyForm>();
  const toggleSelected = (index: number) => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };

  return (
    <>
      <S.Label onClick={() => toggleSelected(index)}>
        <S.HashtagBox selected={selected[index]}>{advantageValue}</S.HashtagBox>
      </S.Label>
      <S.CheckBox
        id={advantageValue}
        //{...register(`advantage.${index}`)}
        type="checkbox"
      ></S.CheckBox>
    </>
  );
}

export default AdvantageCheckBoxInput;
