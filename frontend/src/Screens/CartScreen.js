import React, { useEffect } from "react";

const productId = props.match.params.id;
const qty = props.location.search
  ? Number(props.location.search.split("=")[1])
  : 1;

useEffect(() => {
  if (productId) dispatchEvent(addToCart(productId, qty));
}, []);

function CartScreen(props) {
  return <div>Cart Screen</div>;
}

export default CartScreen;
