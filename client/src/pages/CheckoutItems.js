import React from "react";
import { getItemsOfCart } from "../services/Cart.Services";
import { Card } from "flowbite-react";
const CheckoutItems = () => {
  let cartItem = getItemsOfCart();
  return (
    <div className="top-container px-6 top-padding mb-4 card-margin">
      {cartItem?.map((value) => {
        return (
          <Card>
            <img className="mb-3 h-35 w-20 shadow-lg" src={value.imageUrl} />
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              {value.name}
            </h5>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                ${value.price}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CheckoutItems;
