import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../type";
import { fetchAllPosts } from "./postThunk";

type PostStateType = {
  posts: PostType[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: PostStateType = {
  posts: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllPosts.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(
      fetchAllPosts.fulfilled,
      (state, action: PayloadAction<PostType[]>) => {
        state.isLoading = false;
        state.posts = action.payload;
      }
    );
    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = "error";
      state.posts = [];
    });
  },
});
export const {} = postSlice.actions;

export default postSlice.reducer;
