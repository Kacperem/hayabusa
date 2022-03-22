import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CalculatorState {
  firstNumber: number;
  secondNumber: number;
  finalNumber: number;
}
export interface UpdatedProps {
  value: number;
  name: string;
}

const initialState: CalculatorState = {
  firstNumber: 0,
  secondNumber: 0,
  finalNumber: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,

  reducers: {
    updateNumber: (state, action: PayloadAction<UpdatedProps>) => {
      if (action.payload.name === "first") {
        state.firstNumber = action.payload.value;
      } else {
        state.secondNumber = action.payload.value;
      }
    },
    addNumbers: (state) => {
      state.finalNumber = state.firstNumber + state.secondNumber;
    },
  },
});

export const { updateNumber, addNumbers } = calculatorSlice.actions;
export const calculatorCount = (state: RootState) => state.calculator;
export default calculatorSlice.reducer;
