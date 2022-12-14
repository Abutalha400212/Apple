import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  const {
    body,
    display,
    chipset,
    memory,
    misc,
    battery,
    software,
    name,
    price,
    release,
  } = data;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div
        className="hero-content flex-col lg:flex-row gap-3"
      >
        <img
          src="https://i.ibb.co/jGNwZ14/apple.png
"
          className=" rounded-lg shadow-2xl"
          alt=""
        />
        <div
          className="p-4"
        >
          <h1 className="text-4xl font-bold">
            {name}{" "}
            <span className="text-xl text-blue-800 font-semibold font-mono">
              ({release})
            </span>{" "}
          </h1>
          <p className="text-green-700 text-xl font-mono">
            <span className="font-bold">Price: </span>
            {price} $
          </p>
          <div className="divider m-0"></div>
          <div>
            <h1 className="text-lg font-bold underline font-mono">
              Product Details
            </h1>
            <ul className="text-md">
              <li>
                <span className="font-semibold text-md">Body: </span> {body}
              </li>
              <li>
                <span className="font-semibold text-md">Display: </span>
                {display}
              </li>
              <li>
                <span className="font-semibold text-md">Chipset: </span>
                {chipset}
              </li>
              <li>
                <span className="font-semibold text-md"> Memory: </span>
                {memory}
              </li>
              <li>
                <span className="font-semibold text-md">Software: </span>
                {software}
              </li>
              <li>
                <span className="font-semibold text-md">Misc:</span> {misc}
              </li>
              <li>
                <span className="font-semibold text-md">Battery: </span>
                {battery}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
