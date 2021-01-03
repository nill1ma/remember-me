import React from "react";
import { Item } from "./styles";
import Image from '../Image'

export default function Items(props) {

  return (
    <>
      {Array.from(props.list).map((item) => (
        <Item
          onClick={() => props.disabled ? {} : props.handleMemory(item.id)}
          key={item.id}
          background={item.show ? 'rgba(255,140,0, 0.7)' : 'rgba(0,0,0,0.6)'}>
          {item.show || item.correct ? item.letter : <Image />}
        </Item>
      ))}
    </>
  );
}
