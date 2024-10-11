"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tabs,
  Tab,
  Button,
} from "@nextui-org/react";

const Market = () => {
  const list = [
    {
      title: "Orange",
      img: "/images/vege.jpg",
      price: "$5.50",
      purpose: "exchange",
    },
    {
      title: "Tangerine",
      img: "/images/vege.jpg",
      price: "$3.00",
      purpose: "buy",
    },
    {
      title: "Raspberry",
      img: "/images/vege.jpg",
      price: "$10.00",
      purpose: "sell",
    },
    {
      title: "Lemon",
      img: "/images/vege.jpg",
      price: "$5.30",
      purpose: "share",
    },
    {
      title: "Avocado",
      img: "/images/vege.jpg",
      price: "$15.70",
      purpose: "exchange",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-left">Market</h1>
        <Button color="primary">Add</Button>
      </div>
      <Tabs aria-label="Options">
        <Tab key="exchange" title="Exchange">
          <div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              {list
                .filter((item) => item.purpose === "exchange")
                .map((item, index) => (
                  <Card shadow="sm" key={index}>
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
        </Tab>
        <Tab key="buy" title="Buy">
          <div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              {list
                .filter((item) => item.purpose === "buy")
                .map((item, index) => (
                  <Card shadow="sm" key={index}>
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
        </Tab>
        <Tab key="sell" title="Sell">
          <div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              {list
                .filter((item) => item.purpose === "sell")
                .map((item, index) => (
                  <Card shadow="sm" key={index}>
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
        </Tab>
        <Tab key="share" title="Share">
          <div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              {list
                .filter((item) => item.purpose === "share")
                .map((item, index) => (
                  <Card shadow="sm" key={index}>
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
        </Tab>
      </Tabs>
    </div>
  );
};

export default Market;
