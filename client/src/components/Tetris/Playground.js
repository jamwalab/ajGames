import React from "react";
import Cell from "./Cell";
import { Typography } from "@mui/material";

const Playground = ({ gameArea }) => {
  return (
    <Typography>
      {gameArea.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </Typography>
  );
}

export default Playground;