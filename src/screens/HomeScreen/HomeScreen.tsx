import React, { useState, useRef } from "react";

import { CardList } from "../../components/CardList/CardList";

export const HomeScreen = () => {
  const [catPics, setCatPics] = useState([]);
  const list: any = useRef();

  return (
    <>
      <CardList cardList={catPics} onTouch={() => {}} ref={list} />
    </>
  );
};
