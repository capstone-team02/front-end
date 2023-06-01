import * as S from "./styled";
import { useState, useCallback, useEffect } from "react";
import { districtGet, guNameGet } from "../../../../../apis/api/surveyApi";
import React from "react";
import userEvent from "@testing-library/user-event";
import { stringify } from "querystring";
import { IDistrcitForm } from "../../../../../interfaces/districtForm";

function GuDropDown() {
  const [isOpenGu, setIsOpenGu] = useState<boolean>(false);
  const [isOpenDong, setIsOpenDong] = useState<boolean>(false);

  const onClickToggleDropDownGu = useCallback(() => {
    console.log(!isOpenGu);
    setIsOpenGu(!isOpenGu);
  }, [isOpenGu]);

  const onOptionClickedGu = (value: string, index: number) => () => {
    console.log(value);
    setIsOpenGu(false);
  };

  const onClickToggleDropDownDong = useCallback(() => {
    console.log(!isOpenDong);
    setIsOpenDong(!isOpenDong);
  }, [isOpenDong]);

  const onOptiongClickedDong = (value: string, index: number) => () => {
    console.log(value);
    setIsOpenDong(false);
  };
  const [districts, setDistricts] = useState<any[]>([]);

  const [guName, setGuName] = useState([]);
  //   const [districts, setDistricts] = useState({
  //     guName: "",
  //     dongName: "",
  //   });
  const [loading, setLoading] = useState(false);
  const [guSelect, setGuSelect] = useState("구");
  //const onSelect = useCallback(guSelect => setGuSelect(guSelect), []);
  const onSelect = useCallback((guSelect: React.SetStateAction<string>) => {
    setGuSelect(guSelect);
    console.log("guSelect" + guSelect);
    setIsOpenGu(!isOpenGu);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await districtGet();
        const res = await guNameGet();
        console.log(res.data);
        setGuName(res.data);
        setDistricts(response.data);

        //setDistricts(response.data.guName, response.data.)
        // setDistrictNames(response.data);
        // console.log(districtNames);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //   if (!districtNames) {
  //     return null;
  //   }

  //   for(const [key,values] of mapArrays){
  //     console.log(`KEY: ${key}, VALUE: ${values}`);
  //   }

  return (
    <>
      <S.DropDownContainer>
        <S.DistrictDefault onClick={onClickToggleDropDownGu}>
          {guSelect}
          <S.Arrow>{">"}</S.Arrow>
        </S.DistrictDefault>
        {isOpenGu && (
          <>
            <S.DropDownWrapper>
              {guName.map((name) => (
                <S.ListItem key={name} onClick={() => onSelect(name)}>
                  {name}
                </S.ListItem>
              ))}
            </S.DropDownWrapper>
          </>
        )}
      </S.DropDownContainer>
      <S.DropDownContainer2>
        <S.DistrictDefault onClick={onClickToggleDropDownDong}>
          동<S.Arrow>{">"}</S.Arrow>
        </S.DistrictDefault>

        {isOpenDong && (
          <>
            <S.DropDownWrapper>
              <S.ListItem onClick={onOptiongClickedDong("발라드", 1)}>
                발라드
              </S.ListItem>
            </S.DropDownWrapper>
          </>
        )}
      </S.DropDownContainer2>
    </>
  );
}

export default GuDropDown;
