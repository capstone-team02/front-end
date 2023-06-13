import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { disadvantageGet, moodGet } from "../../../../../apis/api/surveyApi";
import React from "react";
import { IPropsForm } from "../../../../../interfaces/surveyForm";

function MoodCheckBox({ result, setResult }: IPropsForm) {
  const [mood, setMood] = useState<any[]>([]);
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [moodList, setMoodList] = useState<any[]>([]);
  const [moodValue, setMoodValue] = useState("");

  const toggleSelected = (index: number) => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };

  useEffect(() => {
    setResult(moodList);
  }, [moodValue]);

  const ListSelected = (value: string, index: number) => {
    if (!selected[index]) {
      setMoodList(moodList.concat(value));
      setMoodValue(value);
    } else {
      for (let i = 0; i < moodList.length; i++) {
        if (moodList[i] === value) {
          moodList.splice(i, 1);
          i--;
        }
        setMoodList(moodList);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await moodGet();
        setMood(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const [checkedList, setCheckedList] = useState<Array<string>>([]);

  const onCheckedItem = useCallback(
    (checked: boolean, item: string) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList]
  );
  return (
    <>
      {mood.map((item) => {
        return (
          <S.Label className="checkboxLabel" key={item.id}>
            <S.Input
              type="checkbox"
              id={item.name}
              onChange={(e) => {
                onCheckedItem(e.target.checked, e.target.id);
              }}
            />
            <S.Label htmlFor={item.id}>
              <S.CheckBox
                selected={selected[item.id]}
                onClick={() => {
                  toggleSelected(item.id);
                  ListSelected(item.moodKor, item.id);
                }}
              >
                {item.moodKor}
              </S.CheckBox>
            </S.Label>
          </S.Label>
        );
      })}
    </>
  );
}

export default MoodCheckBox;
