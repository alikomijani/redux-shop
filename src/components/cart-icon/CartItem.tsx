import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { Product } from "../../type";
type CartItemProps = {
  product: Product;
  count: number;
  productAddHandler: (product: Product) => void;
  productRemoveHandler: (product: Product) => void;
  productDecrementHandler: (product: Product) => void;
};

export default function CartItem({
  product,
  count,
  productAddHandler,
  productDecrementHandler,
  productRemoveHandler,
}: CartItemProps) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {product.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {"category"}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton
            aria-label="decrement product"
            onClick={() => {
              productDecrementHandler(product);
            }}
          >
            <RemoveIcon />
          </IconButton>
          <IconButton aria-label="count of product">{count}</IconButton>
          <IconButton
            aria-label="increment product"
            onClick={() => {
              productAddHandler(product);
            }}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            aria-label="delete item"
            onClick={() => {
              productRemoveHandler(product);
            }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={product.image}
        alt={product.name}
      />
    </Card>
  );
}
