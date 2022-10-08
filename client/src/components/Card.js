import React from "react";
import { Card } from "flowbite-react";
import { addToCart } from "../services/Cart.Services";
const card = ({ name, price, imageUrl, id }) => {
  const addItemsToCart = (name, price, imageUrl, id) => {
    let modal = { id, name, imageUrl, price };
    addToCart(modal);
  };

  return (
    <div className="mb-4 h-30 w-65 card-flex">
      <Card>
        <img
          className="mb-3 shadow-lg"
          src={imageUrl}
          style={{ width: "20vw", height: "30vh" }}
        />
        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
            onClick={() => {
              addItemsToCart(name, price, imageUrl, id);
            }}
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </Card>
    </div>
  );
};
export default card;
