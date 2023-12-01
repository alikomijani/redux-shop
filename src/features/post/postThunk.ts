import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchAllPosts = createAsyncThunk(
  "post/fetchAllPosts",
  async (thunkAPI) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }
);
