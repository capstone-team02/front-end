import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { districtGet } from "../../../../../apis/api/surveyApi";
import React from "react";
import { SetStateAction } from "react";
import { GiRoundStar } from "react-icons/gi";

function StarRadio({
  starResult,
  setStarResult,
}: {
  starResult: string;
  setStarResult: React.Dispatch<SetStateAction<string>>;
}) {
  const arrayList = new Array(5).fill(1);

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    setStarResult(index + 1);
    console.log(clicked);
  };

  return (
    <>
      <S.Wrapper>
        {arrayList.map((item, index) => {
          return (
            <S.Label className="checkboxLabel" key={index}>
              <S.Input
                // selected={selected[item.id]}
                type="checkbox"
                id={item.name}
              />
              <S.Label htmlFor={item.id}>
                <S.StarWrapper clicked={clicked[index]}>
                  <GiRoundStar
                    size={55}
                    onClick={() => handleStarClick(index)}
                    className={clicked[item] && "yellow"}
                  />
                </S.StarWrapper>
              </S.Label>
            </S.Label>
          );
        })}
      </S.Wrapper>
    </>
  );
}

export default StarRadio;
