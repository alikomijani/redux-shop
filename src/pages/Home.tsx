import { useEffect } from "react";
import { ProductCard } from "../components";
import { ProductList } from "../constants/products";
import { Container, Grid } from "@mui/material";
function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: 5,
      }}
    >
      <Grid container spacing={2}>
        {ProductList.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <ProductCard product={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
