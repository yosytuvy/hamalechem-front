import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserDetailsInterface } from "./interfaces/UserDetailsInterface";

interface InitialState {
  id: string | null;
  fullName: string | null;
  userType: "solider" | "contributor" | null;
}
const userDetailsJson = localStorage.getItem("User_Details");
const userDetails = JSON.parse(userDetailsJson!);

const initialState: InitialState = {
  ...userDetails,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDetailsInterface | null>) => {
      if (action.payload) {
        state.id = action.payload.id;
        state.fullName = action.payload.fullName;
        state.userType = action.payload.userType;
      }
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
