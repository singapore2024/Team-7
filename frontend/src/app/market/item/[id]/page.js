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
import MyItems from "../../../../../data/MyItems.json";

const Item = ({ params }) => {
  const { id } = params;
  const foodItem = Items.find((item) => item.id === id);

  const [offers, setOffers] = useState([]);

  const handleOffer = (itm, qty) => {
    const offerString = `${itm} (${qty})`;
    setOffers((prevOffers) => [...prevOffers, offerString]);
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

        {foodItem.purpose !== "share" && (
          <div className="space-y-4">
            <h3 className="mt-4 font-medium text-lg">
              Offer my items for trade:
            </h3>
            {MyItems.map((item, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-md shadow-md flex justify-between items-center"
              >
                <span>
                  {item.title} ({item.quantity})
                </span>
                <button
                  onClick={() => handleOffer(item.title, item.quantity)}
                  className="px-3 py-1 bg-[#85be40] text-white rounded-md hover:bg-[#85be40]/90 focus:ring-4 focus:ring-[#85be40]/50"
                >
                  Offer
                </button>
              </div>
            ))}
          </div>
        )}

        {foodItem.purpose !== "share" && (
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
        )}
      </div>
    </div>
  );
};

export default Item;
