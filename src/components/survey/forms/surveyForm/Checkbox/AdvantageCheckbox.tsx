import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { advantageGet } from "../../../../../apis/api/surveyApi";
import React from "react";
import { IPropsForm } from "../../../../../interfaces/surveyForm";

function AdvantageCheckBox({ result, setResult }: IPropsForm) {
  const [advantage, setAdvantage] = useState<any[]>([]);
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [advantageList, setAdvantageList] = useState<any[]>([]);
  const [advantageValue, setAdvantageValue] = useState("");

  const toggleSelected = (index: number) => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };

  useEffect(() => {
    setResult(advantageList);
  }, [advantageValue]);

  const ListSelected = (value: string, index: number) => {
    console.log("selected[index] :" + selected[index]);
    if (!selected[index]) {
      setAdvantageList(advantageList.concat(value));
      setAdvantageValue(value);
    } else {
      for (let i = 0; i < advantageList.length; i++) {
        if (advantageList[i] === value) {
          advantageList.splice(i, 1);
          i--;
        }
        setAdvantageList(advantageList);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await advantageGet();
        setAdvantage(response.data);
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
      {advantage.map((item) => {
        return (
          <S.Label className="checkboxLabel" key={item.id}>
            <S.Input
              type="checkbox"
              id={item.id}
              onChange={(e) => {
                onCheckedItem(e.target.checked, e.target.id);
              }}
            />
            <S.Label htmlFor={item.id}>
              <S.CheckBox
                selected={selected[item.id]}
                onClick={() => {
                  toggleSelected(item.id);
                  ListSelected(item.advantageKor, item.id);
                }}
              >
                {item.advantageKor}
              </S.CheckBox>
            </S.Label>
          </S.Label>
        );
      })}
    </>
  );
}

export default AdvantageCheckBox;
