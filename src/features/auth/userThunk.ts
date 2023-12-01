import { createAsyncThunk } from "@reduxjs/toolkit";
export const userLogin = createAsyncThunk(
  "post/fetchAllPosts",
  async ({ username, password }, thunkAPI) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //
    const data = await response.json(); // token , refreshToken , user
    return data;
  }
);
