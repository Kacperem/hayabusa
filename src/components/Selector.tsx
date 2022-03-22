import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addNumbers,
  calculatorCount,
} from "./redux/calculatorSlice";

export const Selector: FC = () => {
  const count = useAppSelector(calculatorCount);
  const dispatch = useAppDispatch();
  const { selector } = count; 
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch( 
    addNumbers({ value: String(event.target.value) })    
    );
  };
  
  return (
    <>
      <Box sx={{ p: 1 }}>
        <InputLabel id="demo-simple-select-label">Operator</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selector}
          label="Operator"
          onChange={handleChange}
          name={"operator"}
        >
          <MenuItem value="+">+</MenuItem>
          <MenuItem value="-">-</MenuItem>
          <MenuItem value="*">*</MenuItem>
          <MenuItem value="/">/</MenuItem>
        </Select>
      </Box>
    </>
  );
};
