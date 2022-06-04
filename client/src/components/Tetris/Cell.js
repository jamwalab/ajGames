import React from "react";

import {CellStyle} from "./styles/CellStyles";
import {TetrominosShapes} from "../../utils/Tetris/tetrominos";

const Cell = ({type}) => {
  return (
    <CellStyle type={type} color={TetrominosShapes[type].color}>cell</CellStyle>
  );
}

export default Cell;