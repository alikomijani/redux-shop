import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../type";
import { userLogin } from "./userThunk";
type AuthStateType = {
  user:
    | {
        id: number;
        username: string;
      }
    | undefined;
  token: string;
  refreshToken: string;
  isLogin: boolean;
  isLoading: boolean;
};

const initialState: AuthStateType = {
  user: undefined,
  token: "",
  refreshToken: "string",
  isLogin: false,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.user = undefined;
      state.token = "";
      state.refreshToken = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLogin = false;
      state.user = undefined;
      state.token = "";
      state.refreshToken = "string";
    });
    builder.addCase(
      userLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLogin = false;
        state.user = undefined;
        state.token = "";
        state.refreshToken = "string";
      }
    );
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLogin = false;
      state.user = undefined;
      state.token = "";
      state.refreshToken = "string";
    });
  },
});
export const { logout } = userSlice.actions;

export default userSlice.reducer;
