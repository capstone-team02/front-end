import * as S from "./style";

function DisadvantageCheckBoxInput({
  index,
  disadvantageValue,
  selected,
  setSelected,
}: {
  index: number;
  disadvantageValue: string;
  selected: boolean[];
  setSelected: React.Dispatch<React.SetStateAction<boolean[]>>;
}) {
  // const { register } = useFormContext<ISurveyForm>();
  const toggleSelected = (index: number) => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };

  return (
    <>
      <S.Label onClick={() => toggleSelected(index)}>
        <S.HashtagBox selected={selected[index]}>
          {disadvantageValue}
        </S.HashtagBox>
      </S.Label>
      <S.CheckBox
        id={disadvantageValue}
        //{...register(`advantage.${index}`)}
        type="checkbox"
      ></S.CheckBox>
    </>
  );
}

export default DisadvantageCheckBoxInput;