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
    console.log("useEffect");
    console.log("moodList " + moodList);
    //setMoodValue(moodList);
    setResult(moodList);
    console.log("result " + result);
  }, [moodValue]);

  const ListSelected = (value: string, index: number) => {
    console.log("selected[index] :" + selected[index]);
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
  // const onChange = (e: any) => {
  //   console.log(e.target);
  //   console.log("e.target.name:" + e.target.name);
  //   console.log("e.target.value:" + e.target.value);
  // };

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

  const [checkedList, setCheckedList] = useState<Array<string>>([]);

  const onCheckedItem = useCallback(
    (checked: boolean, item: string) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
        console.log(checkedList);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList]
  );
  return (
    <>
      {/* {mood.map((moodName) => (
        <S.CheckBox
          key={moodName.id}
          selected={selected[moodName.id]}
          onClick={() => {
            toggleSelected(moodName.id);
            ListSelected(moodName.disadvantageKor, moodName.id);
          }}
        >
          {moodName.disadvantageKor}
        </S.CheckBox>
      ))}
      <S.Input id={id} onChange={onChange} type="checkbox" /> */}

      {mood.map((item) => {
        return (
          <S.Label className="checkboxLabel" key={item.id}>
            <S.Input
              // selected={selected[item.id]}
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
