import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../type";
import { useAppDispatch } from "../../hooks";
import { addProductToCart } from "../../features/cart/cartSlice";
type ProductCardProps = {
  product: Product;
};
export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => dispatch(addProductToCart(product))}
        >
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
