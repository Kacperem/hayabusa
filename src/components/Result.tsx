import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";

interface ObjectWithNumbers {
  firstNumber: number;
  secondNumber: number;
}
interface Props {
  result: ObjectWithNumbers;
}

export const Result: FC<Props> = ({ result }) => {
  const [finalNumber, setFinalNumber] = useState<number>(0);

  useEffect(() => {
    setFinalNumber(result.firstNumber + result.secondNumber);
  }, [result]);

  return <Box sx={{ p: 1 }}>{finalNumber}</Box>;
};
