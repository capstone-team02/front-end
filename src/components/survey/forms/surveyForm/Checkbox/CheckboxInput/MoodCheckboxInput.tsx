import * as S from "./style";
import { useFormContext } from "react-hook-form";
import { ISurveyForm } from "../../../../../../interfaces/surveyForm";
import { useState } from "react";

function MoodCheckBoxInput({
  index,
  moodValue,
  selected,
  setSelected,
}: {
  index: number;
  moodValue: string;
  selected: boolean[];
  setSelected: React.Dispatch<React.SetStateAction<boolean[]>>;
}) {
  //const { register } = useFormContext<ISurveyForm>();

  const toggleSelected = (index: number) => {
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
          //mood.push(moodValue);
        }}
      >
        <S.HashtagBox selected={selected[index]}>{moodValue}</S.HashtagBox>
      </S.Label>
      <S.CheckBox id={moodValue} type="checkbox"></S.CheckBox>
    </>
  );
}

export default MoodCheckBoxInput;
