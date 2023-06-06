import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { disadvantageGet } from "../../../../../apis/api/surveyApi";
import React from "react";

function MoodCheckBox({ id }: { id: string }) {
  const [mood, setMood] = useState<any[]>([]);
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [moodList, seMoodList] = useState<any[]>([]);
  const [moodValue, setMoodValue] = useState("");
  const toggleSelected = (index: number) => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };

  const ListSelected = (value: string) => {
    seMoodList(moodList.concat(value));
    setMoodValue(value);
    console.log(moodList);
  };

  const onChange = (e: any) => {
    console.log(e.target);
    console.log("e.target.name:" + e.target.name);
    console.log("e.target.value:" + e.target.value);
  };

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      console.log("a");
      try {
        const response = await disadvantageGet();
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
        <S.CheckBox
          key={moodName.id}
          onClick={() => {
            toggleSelected(moodName.id);
            ListSelected(moodName.disadvantageKor);
          }}
          selected={selected[moodName.id]}
        >
          {moodName.disadvantageKor}
        </S.CheckBox>
      ))}
      <S.Input id={id} onChange={onChange} type="checkbox" />
    </>
  );
}

export default MoodCheckBox;
