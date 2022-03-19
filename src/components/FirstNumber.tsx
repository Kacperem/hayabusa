import { Box, TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  firstNumber: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const FirstNumber: FC<Props> = ({firstNumber, handleChange}) => {
  return (
    <Box sx={{ p: 1 }}>
      <TextField onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" type="number" value={firstNumber} name={'first'}/>
    </Box>
  );
};
