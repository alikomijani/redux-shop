import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import React from "react";
import { useAppSelector } from "../../hooks";
import CartItem from "./CartItem";
import { useAppDispatch } from "../../hooks";
import {
  removeProductFromCart,
  incrementProduct,
  decrementProduct,
} from "../../features/cart/cartSlice";
import { selectProductCount } from "../../features/cart/selector";

function CartIcon() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpenMenu = !!anchorEl;
  const ProductList = useAppSelector((state) => state.cart);
  const count = useAppSelector(selectProductCount);
  const dispatch = useAppDispatch();

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
      >
        <Badge badgeContent={count} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpenMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {count === 0 ? (
          <h1>سبد خرید شما خالی است</h1>
        ) : (
          ProductList.map((item) => (
            <CartItem
              product={item.product}
              key={item.product.id}
              count={item.count}
              productAddHandler={(p) => dispatch(incrementProduct(p))}
              productRemoveHandler={(p) => dispatch(removeProductFromCart(p))}
              productDecrementHandler={(p) => dispatch(decrementProduct(p))}
            />
          ))
        )}
      </Menu>
    </>
  );
}

export default CartIcon;
