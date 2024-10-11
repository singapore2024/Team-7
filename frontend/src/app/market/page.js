"use client";
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
import Items from "../../../data/Items.json";
import { useRouter } from "next/navigation";

const Market = () => {
  const router = useRouter();
  const handleCardClick = (id) => {
    console.log("pressed");
    router.push(`/market/item/${id}`);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-left text-[#85be40]">
          Requirements Form
        </h2>
        <Button
          href="/market/add"
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
        >
          Add
        </Button>
      </div>
      <Tabs aria-label="Options">
        <Tab key="exchange" title="Exchange">
          <div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              {Items.filter((item) => item.purpose === "exchange").map(
                (item, index) => (
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => handleCardClick(item.id)}
                  >
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
                      <b>
                        {item.title} ({item.quantity})
                      </b>
                      <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </Tab>
        <Tab key="buy" title="Buy">
          <div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              {Items.filter((item) => item.purpose === "buy").map(
                (item, index) => (
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => handleCardClick(item.id)}
                  >
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
                      <b>
                        {item.title} ({item.quantity})
                      </b>
                      <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </Tab>
        <Tab key="share" title="Share">
          <div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              {Items.filter((item) => item.purpose === "share").map(
                (item, index) => (
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => handleCardClick(item.id)}
                  >
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
                      <b>
                        {item.title} ({item.quantity})
                      </b>
                      <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Market;
