import React from "react";

import Button from "./Button";
import Playground from "./Playground";
import Cell from "./Cell";
import Information from "./Information";
import { Typography } from "@mui/material";

import { createPlayground } from '../../utils/Tetris/helper';

const Tetris = () => {
  return (
    <Typography>
      <Playground gameArea = {createPlayground()}/>
      <Typography>
        <Typography>
          <Information/>
          <Information/>
          <Information/>
        </Typography>
        <Button/>
      </Typography>
    </Typography>
  )
}

export default Tetris;