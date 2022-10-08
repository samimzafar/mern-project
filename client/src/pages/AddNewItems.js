import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { addItemAPI } from "../api/itemAPI";
import RouteNames from "../routes/RoutesNames";

const AddItems = () => {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addItemAPI({
      img: itemImage,
      name: itemName,
      price: itemPrice,
    });
    navigate(RouteNames.GetAlltems.route);
    return res;
  };

  return (
    <form className="flex flex-col gap-4 top-container px-6 top-padding">
      <div>
        <div className="mb-2">
          <Label value="Item Name" />
        </div>
        <TextInput
          type="text"
          placeholder="item name"
          required={true}
          name="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2">
          <Label value="Item Price" />
        </div>
        <TextInput
          type="text"
          placeholder="item price"
          required={true}
          name="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </div>

      <div>
        <div className="mb-2">
          <Label value="Item Image" />
        </div>
        <TextInput
          type="text"
          placeholder="item image"
          required={true}
          name="itemImage"
          value={itemImage}
          onChange={(e) => setItemImage(e.target.value)}
        />
      </div>

      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default AddItems;
