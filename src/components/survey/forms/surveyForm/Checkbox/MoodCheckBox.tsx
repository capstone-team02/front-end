import * as S from "./styled";
import { useState, useCallback, useEffect } from "react";
import { moodGet } from "../../../../../apis/api/surveyApi";
import React from "react";

function MoodCheckBox() {
  const [mood, setMood] = useState<any[]>([]);

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      console.log("a");
      try {
        const response = await moodGet();
        setMood(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {mood.map((moodName) => (
        <S.CheckBox key={moodName}>{moodName.moodKor}</S.CheckBox>
      ))}
    </>
  );
}

export default MoodCheckBox;
