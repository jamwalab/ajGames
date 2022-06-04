import React from "react";
import Cell from "./Cell";

const Playground = ({ gameArea }) => {
  return (
    <div>
      {gameArea.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </div>
  );
}

export default Playground;