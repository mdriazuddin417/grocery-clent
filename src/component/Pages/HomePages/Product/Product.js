import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, selerName, image, price, text, quantity } = product;

  return (
    <div className=" hover:shadow-2xl p-10 text-center space-y-2 rounded-lg shadow duration-300">
      <img
        src={image}
        alt=""
        className="transform hover:scale-110 duration-300"
      />
      <p className="text-[#d51243] text-2xl font-bold"> ${price} </p>
      <p className="content-header text-3xl"> {name}</p>
      <p className="text-gray-600 text-justify"> {text.slice(0, 200)}</p>
      <p className="content-header">Supplier name: {selerName}</p>
      <p className="text-[#11bd5e]">IN STOCK</p>
      <p>
        The available products:
        <span className=" text-3xl text-[#233a95] font-semibold">
          {" "}
          {quantity}
        </span>
      </p>
      <Link to={"/shipping"}>
        <button className="btn">Update Stock</button>
      </Link>
    </div>
  );
};

export default Product;
