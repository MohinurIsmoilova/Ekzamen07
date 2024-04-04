import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { SecondShop } from "../components/SecondShop";

export const ShoppingCard = () => {
  const { id } = useParams();

  // Fetch data for the specific item using the id

  return (
    <>
      <div className="container">
        <div className="mt-[108px]">
          <div>
            <NavLink to="/" className="font-semibold hover:font-bold">
              Home
            </NavLink>
            <NavLink to="/shop" className="font-semibold hover:font-bold">
              
              / Shop
            </NavLink>
          </div>



          <h1>Item ID: {id}</h1>
          {/* Display other details of the item */}



          
          <SecondShop />
        </div>
      </div>
    </>
  );
};
