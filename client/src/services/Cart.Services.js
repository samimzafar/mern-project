import { getItem, setItem } from "./LocalStorage.Service";

const cartKey = "cartKey";

export const addToCart = (item) => {
  let cart = getItem(cartKey);
  cart = cart ? cart : [];
  cart.push(item);
  const ids = cart.map((val) => val.id);
  setItem(
    cartKey,
    cart.filter((value, index) => {
      return ids.indexOf(value.id) == index;
    })
  );
};
export const removeFromCart = (item) => {
  let cart = getItem(cartKey);
  cart = cart ? cart : [];
  setItem(cart.filter((value, index) => value !== item));
};
export const getItemsOfCart = () => {
  let cart = getItem(cartKey);
  cart = cart ? cart : [];
  return cart;
};
