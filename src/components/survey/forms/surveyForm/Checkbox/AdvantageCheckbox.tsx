import * as S from "./styled";
import { useState, useCallback, useEffect } from "react";
import { advantageGet } from "../../../../../apis/api/surveyApi";
import React from "react";

function MoodCheckBox() {
  const [advantage, setAdvantage] = useState<any[]>([]);

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      console.log("a");
      try {
        const response = await advantageGet();
        setAdvantage(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {advantage.map((advantageName) => (
        <S.CheckBox key={advantageName}>{advantageName.advantageKor}</S.CheckBox>
      ))}
    </>
  );
}

export default MoodCheckBox;
