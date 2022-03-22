import { Box } from "@mui/material";
import { FC } from "react";
import { FirstNumber } from "./FirstNumber";
import { SecondNumber } from "./SecondNumber";
import { Result } from "./Result";
import { Selector } from "./Selector";

export const Calculator: FC = () => {
  return (
    <>
      <Box sx={{ p: 1 }}>
        <FirstNumber />
        <SecondNumber />
      </Box >
      <Box sx={{ p: 1 }}> 
        <Selector />
      </Box>
      <Box sx={{ p: 1 }}>
        <Result />
      </Box>
    </>
  );
};
