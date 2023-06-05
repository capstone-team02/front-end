import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { moodGet } from "../../../../../apis/api/surveyApi";
import React from "react";
import MoodCheckBoxInput from "./CheckboxInput/MoodCheckboxInput";

function MoodCheckBox() {
  const [mood, setMood] = useState<any[]>([]);
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
      {mood.map((moodName, index) => (
        <MoodCheckBoxInput
          moodValue={moodName.moodKor}
          index={moodName.id}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </>
  );
}

export default MoodCheckBox;
