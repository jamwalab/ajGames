import React from "react";

import Button from "./Button";
import Playground from "./Playground";
import Cell from "./Cell";
import Information from "./Information";

import { createPlayground } from '../../utils/Tetris/helper';

const Tetris = () => {
  return (
    <div>
      <Playground gameArea = {createPlayground()}/>
      <div>
        <div>
          <Information/>
          <Information/>
          <Information/>
        </div>
        <Button/>
      </div>
    </div>
  )
}

export default Tetris;