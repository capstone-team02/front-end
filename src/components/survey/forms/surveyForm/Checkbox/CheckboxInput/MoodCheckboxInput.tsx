import * as S from "./style";

function MoodCheckBoxInput({
  index,
  moodValue,
  selected,
  setSelected,
}: {
  index: number;
  moodValue: string;
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
        <S.HashtagBox selected={selected[index]}>{moodValue}</S.HashtagBox>
      </S.Label>
      <S.CheckBox
        id={moodValue}
        //{...register(`advantage.${index}`)}
        type="checkbox"
      ></S.CheckBox>
    </>
  );
}

export default MoodCheckBoxInput;
