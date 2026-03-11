// store/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  step: number;
  id: string;
  name: string;
  email: string;
  phone: string;
  deposit: boolean;
  date: string;
  customers: number;
  description: {
    celiaco: number;
    vegano: number;
    vegetariano: number;
  };
  sector: "exterior" | "interior";
}

const initialState: ReservationState = {
  step: 0,
  id: "",
  name: "",
  email: "",
  phone: "",
  deposit: false,
  date: "",
  customers: 2,
  description: { celiaco: 0, vegano: 0, vegetariano: 0 },
  sector: "exterior",
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<Partial<ReservationState>>) => {
      return { ...state, ...action.payload };
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    reset: () => initialState,
  },
});

export const { updateField, setStep, reset } = reservationSlice.actions;
export default reservationSlice.reducer;
