import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { districtGet } from "../../../../../apis/api/surveyApi";
import React from "react";

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
  const [dongName, setDongName] = useState<any[]>([]);
  //   const [districts, setDistricts] = useState({
  //     guName: "",
  //     dongName: "",
  //   });
  const [loading, setLoading] = useState(false);
  const [guSelect, setGuSelect] = useState("구");
  const [dongSelect, setDongSelect] = useState("동");

  const onSelectGu = useCallback((guSelect: React.SetStateAction<string>) => {
    setGuSelect(guSelect);
    console.log("guSelect" + guSelect);
  }, []);

  const onSelectDong = useCallback(
    (dongSelect: React.SetStateAction<string>) => {
      setDongSelect(dongSelect);
      console.log("dongSelect" + guSelect);
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await districtGet();

        console.log(response.data);
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
              {districts.map((name) => (
                <S.ListItem
                  key={name.guName}
                  onClick={() => {
                    onSelectGu(name.guName);
                    setIsOpenGu(!isOpenGu);
                    setDongName(name.dongName);
                    console.log(name.dongName);
                  }}
                >
                  {name.guName}
                </S.ListItem>
              ))}
            </S.DropDownWrapper>
          </>
        )}
      </S.DropDownContainer>
      <S.DropDownContainer2>
        <S.DistrictDefault onClick={onClickToggleDropDownDong}>
          {dongSelect}
          <S.Arrow>{">"}</S.Arrow>
        </S.DistrictDefault>
        {isOpenDong && (
          <>
            <S.DropDownWrapper>
              {dongName.map((dong) => (
                <S.ListItem
                  key={guSelect}
                  onClick={() => {
                    onSelectDong(dong);
                    setIsOpenDong(!isOpenDong);
                    console.log(dong);
                  }}
                >
                  {dong}
                </S.ListItem>
              ))}
            </S.DropDownWrapper>
          </>
        )}
      </S.DropDownContainer2>
    </>
  );
}

export default GuDropDown;
