import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { advantageGet } from "../../../../../apis/api/surveyApi";
import React from "react";
import { ISurveyForm } from "../../../../../interfaces/surveyForm";
import AdvantageCheckBoxInput from "./CheckboxInput/AdvantageCheckBoxInput";

function AdvantageCheckBox() {
  //   {
  //   index,
  //   advantageValue,
  //   selected,
  //   setSelected,
  // }: {
  //   index: number;
  //   advantageValue: string[];
  //   selected: boolean[];
  //   setSelected: React.Dispatch<React.SetStateAction<boolean[]>>;
  // }
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);


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
      {advantage.map((advantageName, index) => (
        <AdvantageCheckBoxInput
          advantageValue={advantageName.advantageKor}
          index={advantageName.id}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </>
  );
}

export default AdvantageCheckBox;
