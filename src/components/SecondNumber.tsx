import { Box, TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  secondNumber: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const SecondNumber: FC<Props> = ({secondNumber, handleChange}) => {
  return (
    <Box sx={{ p: 1 }}>
      <TextField onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" type="number" value={secondNumber} name={'second'}/>
    </Box>
  );
};
