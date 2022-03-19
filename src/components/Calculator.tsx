import React from "react";
import { Box, TextField } from "@mui/material";
import { FC, useState } from "react";
import { FirstNumber } from "./FirstNumber";
import { SecondNumber } from "./SecondNumber";
import { Result } from "./Result";

export const Calculator: FC = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "first") {
      setFirstNumber(Number(event.target.value));
    } else {
      setSecondNumber(Number(event.target.value));
    }
  };

  return (
    <>
      <Box sx={{ p: 1 }}>
        <FirstNumber firstNumber={firstNumber} handleChange={handleChange} />
        <SecondNumber secondNumber={secondNumber} handleChange={handleChange} />
      </Box>
      <Box sx={{ p: 1 }}>
        <Result result={{firstNumber, secondNumber}} />
      </Box>
    </>
  );
};
