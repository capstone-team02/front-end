import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { disadvantageGet } from "../../../../../apis/api/surveyApi";
import React from "react";
import { IPropsForm } from "../../../../../interfaces/surveyForm";

function DisadvantageCheckBox({ result, setResult }: IPropsForm) {
  const [disadvantage, setDisadvantage] = useState<any[]>([]);
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [disadvantageList, setDisadvantageList] = useState<any[]>([]);
  const [disadvantageValue, setDisadvantageValue] = useState("");

  const toggleSelected = (index: number) => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };

  useEffect(() => {
    setResult(disadvantageList);
  }, [disadvantageValue]);

  const ListSelected = (value: string, index: number) => {
    console.log("selected[index] :" + selected[index]);
    if (!selected[index]) {
      setDisadvantageList(disadvantageList.concat(value));
      setDisadvantageValue(value);
    } else {
      for (let i = 0; i < disadvantageList.length; i++) {
        if (disadvantageList[i] === value) {
          disadvantageList.splice(i, 1);
          i--;
        }
        setDisadvantageList(disadvantageList);
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await disadvantageGet();
        setDisadvantage(response.data);
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
      {disadvantage.map((item) => {
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
                  ListSelected(item.disadvantageKor, item.id);
                }}
              >
                {item.disadvantageKor}
              </S.CheckBox>
            </S.Label>
          </S.Label>
        );
      })}
    </>
  );
}

export default DisadvantageCheckBox;
