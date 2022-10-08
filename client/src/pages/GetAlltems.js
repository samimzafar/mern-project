import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api/Endpoints";
import { getItemAPI } from "../api/itemAPI";
import { Card } from "../components";

const GetAllItems = () => {
  const [itemArray, setItemArray] = useState([]);
  const handleResponse = async () => {
    getItemAPI()
      .then((res) => setItemArray(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleResponse();
  }, []);
  return (
    <div className="card-container px-6 top-padding">
      {itemArray?.map((value) => {
        let imageUrl = `${value.img?.startsWith("http") ? "" : BASE_URL}${
          value.img
        }`;

        return (
          <Card
            id={value.id}
            name={value.name}
            price={value.price}
            imageUrl={imageUrl}
          />
        );
      })}
    </div>
  );
};

export default GetAllItems;
