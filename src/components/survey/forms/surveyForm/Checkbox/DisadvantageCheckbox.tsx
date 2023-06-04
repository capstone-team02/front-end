import * as S from "./styled";
import { useState, useCallback, useEffect } from "react";
import { disadvantageGet } from "../../../../../apis/api/surveyApi";
import React from "react";

function DisadvantageCheckBox() {
  const [disadvantage, setDisadvantage] = useState<any[]>([]);

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      console.log("a");
      try {
        const response = await disadvantageGet();
        setDisadvantage(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {disadvantage.map((disadvantageName) => (
        <S.CheckBox key={disadvantageName}>
          {disadvantageName.disadvantageKor}
        </S.CheckBox>
      ))}
    </>
  );
}

export default DisadvantageCheckBox;
