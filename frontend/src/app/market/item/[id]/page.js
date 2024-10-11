"use client";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tabs,
  Tab,
  Button,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import Items from "../../../../../data/Items.json";

const Item = ({ params }) => {
  const { id } = params;
  const foodItem = Items.find((item) => item.id === id);

  const [offers, setOffers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value state
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (inputValue.trim() === "") return; // Prevent adding empty offers

    setOffers((prevOffers) => [...prevOffers, inputValue]); // Add input value to offers
    setInputValue(""); // Clear the input field
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#85be40]">
          {foodItem.title}
        </h2>
        <div className="pb-4">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={foodItem.title}
            className="w-full object-cover h-[400px]"
            src={foodItem.img}
          />
        </div>

        <div className="pb-2">
          {foodItem.request_for_trade
            ? `Exchange Request: ${foodItem.request_for_trade}`
            : null}
        </div>
        <div className="pb-2">Date of Harvest: {foodItem.time_of_harvest}</div>
        <form onSubmit={handleSubmit} className="space-y-2 pb-4">
          <div>
            <label htmlFor="name" className="block font-medium text-[#85be40]">
              Offer
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g. 10 oranges"
              value={inputValue} // Bind input value to state
              onChange={handleInputChange} // Update state on input change
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#85be40] focus:border-[#85be40]"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#85be40] text-white rounded-md hover:bg-[#85be40]/90 focus:ring-4 focus:ring-[#85be40]/50"
          >
            Make offer
          </button>
        </form>

        <div>
          <h3 className="mt-4 font-medium text-lg">Offers:</h3>
          <div className="space-y-4">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-md shadow-md flex justify-between items-center"
              >
                <span>{offer}</span>
                <button
                  //   onClick={() => handleAccept(offer)}
                  className="px-3 py-1 bg-[#85be40] text-white rounded-md hover:bg-[#85be40]/90 focus:ring-4 focus:ring-[#85be40]/50"
                >
                  Accept
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
