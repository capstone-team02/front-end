import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { disadvantageGet } from "../../../../../apis/api/surveyApi";
import React from "react";
import DisadvantageCheckBoxInput from "./CheckboxInput/DisadvantageCheckbox";

function DisadvantageCheckBox() {
  const [disadvantage, setDisadvantage] = useState<any[]>([]);
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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
      {disadvantage.map((disadvantageName, index) => (
        <DisadvantageCheckBoxInput
          disadvantageValue={disadvantageName.disadvantageKor}
          index={disadvantageName.id}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </>
  );
}

export default DisadvantageCheckBox;
