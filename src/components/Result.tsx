import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../app/hooks";
import { calculatorCount } from "./redux/calculatorSlice";

export const Result: FC = () => {
  const count = useAppSelector(calculatorCount);
  const { finalNumber } = count;
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="div" gutterBottom>
        {finalNumber}
      </Typography>
    </Box>
  );
};
