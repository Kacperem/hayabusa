import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addNumbers, calculatorCount, updateNumber } from "./redux/calculatorSlice";

export const FirstNumber: FC = () => {
  const count = useAppSelector(calculatorCount);
  const dispatch = useAppDispatch();
  const { firstNumber } = count;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateNumber({ value: Number(event.target.value), name: event.target.name })
    );
    dispatch(addNumbers())
  };
  return (
    <Box sx={{ p: 1 }}>
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="number"
        value={firstNumber}
        name={"first"}
      />
    </Box>
  );
};
