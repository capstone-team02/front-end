import * as S from "./style";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
function StarDropDown() {
  const [start, setStar] = useState(5);
  const array = [0, 1, 2, 3, 4];
  return (
    <>
      {array.map((star) => (
        <AiFillStar
          size="50"
          color="#F9F12F"
          key={star}
          onClick={() => {
            setStar(star + 1);
            console.log(star);
          }}
        ></AiFillStar>
      ))}
    </>
  );
}

export default StarDropDown;
