import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { disadvantageGet } from "../../../../../apis/api/surveyApi";
import React from "react";

function DisadvantageCheckBox({ id }: { id: string }) {
  const [disadvantage, setDisadvantage] = useState<any[]>([]);
  const [selected, setSelected] = useState([
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

  const ListSelected = (value: string) => {
    setDisadvantageList(disadvantageList.concat(value));
    setDisadvantageValue(value);
    console.log(disadvantageList);
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
        <>
          <S.Input
            id={disadvantageName.id}
            onChange={onChange}
            type="checkbox"
          ></S.Input>
          <S.CheckBox
            key={disadvantageName.id}
            onClick={() => {
              toggleSelected(disadvantageName.id);
              ListSelected(disadvantageName.disadvantageKor);
            }}
            selected={selected[disadvantageName.id]}
          >
            {disadvantageName.disadvantageKor}
          </S.CheckBox>
        </>
      ))}
    </>
  );
}

export default DisadvantageCheckBox;
