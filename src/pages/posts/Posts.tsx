import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchAllPosts } from "../../features/post/postThunk";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
function Posts() {
  const { isLoading, isError, error, posts } = useAppSelector(
    (state) => state.post
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  if (isError) {
    return <Typography variant="h1">{error}</Typography>;
  }
  if (isLoading) {
    return <Typography variant="h1">data is loading</Typography>;
  }
  return (
    <Box>
      <Container
        sx={{
          mt: 2,
        }}
      >
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} md={6}>
              <Card>
                <CardHeader title={post.title} />
                <CardContent>{post.body}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Posts;

// export function fetchPosts() {
//   return async function fetchPostsThunk(dispatch, getState) {
//     try {
//       dispatch(loading({ keepData: false }));
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await res.json();
//       dispatch(loadData(data));
//     } catch {
//       dispatch(errorLoadData("error when try to get data"));
//     }
//   };
// }
