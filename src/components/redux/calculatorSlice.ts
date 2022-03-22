import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CalculatorState {
  firstNumber: number;
  secondNumber: number;
  finalNumber: number;
  selector: string;
}
export interface UpdatedProps {
  value: number;
  name: string;
}

export interface UpdatedSelector {
  value: string;
}

const initialState: CalculatorState = {
  firstNumber: 0,
  secondNumber: 0,
  finalNumber: 0,
  selector: "",
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
    addNumbers: (state, action: PayloadAction<UpdatedSelector>) => {
      if (action.payload.value === "+"){
        state.finalNumber = state.firstNumber + state.secondNumber;
      }
      if (action.payload.value === "-"){
        state.finalNumber = state.firstNumber - state.secondNumber;
      }
      if (action.payload.value === "*"){
        state.finalNumber = state.firstNumber * state.secondNumber;
      }
      if (action.payload.value === "/"){
        state.finalNumber = state.firstNumber / state.secondNumber;
      }
    },
  },
});

export const { updateNumber, addNumbers } = calculatorSlice.actions;
export const calculatorCount = (state: RootState) => state.calculator;
export default calculatorSlice.reducer;
