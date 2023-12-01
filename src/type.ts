import store from "./store";

export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
