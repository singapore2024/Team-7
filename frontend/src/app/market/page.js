"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tabs,
  Tab,
} from "@nextui-org/react";

const Market = () => {
  const list = [
    {
      title: "Orange",
      img: "/images/vege.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/vege.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/vege.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/vege.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/vege.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/vege.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/vege.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/vege.jpg",
      price: "$12.20",
    },
    {
      title: "Orange",
      img: "/images/vege.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/vege.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/vege.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/vege.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/vege.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/vege.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/vege.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/vege.jpg",
      price: "$12.20",
    },
  ];
  return (
    <div>
      <h1>Market Test</h1>
      <Tabs>
        <Tab />
      </Tabs>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-lg">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Market;
