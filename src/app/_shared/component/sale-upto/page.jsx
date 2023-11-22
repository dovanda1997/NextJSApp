import { Box, Flex, Grid, GridItem, Heading, Spacer } from "@chakra-ui/react";

export default async function SaleUp() {
  return (
    <main>
      <Grid className="grid-upto" templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem className="bored-40" w="100%" bg="#DED1B1">
          <Flex flexDirection={"column"}>
            <Box
              textAlign={"center"}
              className="sale-pading-lap sale-pading-mob"
            >
              <Heading className="sale-heading-lap sale-heading-mob">
                Fragrances
              </Heading>
              <p
                className="price-sale"
                style={{
                  color: "#D9B660",
                }}
              >
                $999
              </p>
              <h3>
                Làm sang ngôi nhà của bạn với những món đồ nội thất mới mẻ{" "}
              </h3>
            </Box>
            <Spacer />
            <Box
              h={"215px"}
              w={"100%"}
              className="border-radius"
              backgroundImage={"Rectangle 13.jpg"}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
            ></Box>
          </Flex>
        </GridItem>
        <GridItem className="bored-40" w="100%" bg="#E8CFBE">
          <Flex flexDirection={"column"}>
            <Box
              textAlign={"center"}
              className="sale-pading-lap sale-pading-mob"
            >
              <Heading className="sale-heading-lap sale-heading-mob">
                Shirts
              </Heading>
              <p
                className="price-sale"
                style={{
                  color: "#E18649",
                }}
              >
                $96
              </p>
              <h3>
                {" "}
                Những phong cách mới mẻ, năng động, trẻ trung đang chờ bạn khám
                phá{" "}
              </h3>
            </Box>
            <Spacer />
            <Box
              h={"215px"}
              w={"100%"}
              className="border-radius"
              backgroundImage={"Rectangle 14.jpg"}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
            ></Box>
          </Flex>
        </GridItem>
        <GridItem className="bored-40" w="100%" bg="#A26F6F">
          <Flex flexDirection={"column"}>
            <Box
              textAlign={"center"}
              className="sale-pading-lap sale-pading-mob"
            >
              <Heading className="sale-heading-lap sale-heading-mob">
                Decoration
              </Heading>
              <p
                className="price-sale"
                style={{
                  color: "#961E1F",
                }}
              >
                $300
              </p>
              <h3>Những vật dụng trang trí bắt mắt thu hút mọi ánh nhìn </h3>
            </Box>
            <Spacer />
            <Box
              h={"215px"}
              w={"100%"}
              className="border-radius"
              backgroundImage={"Rectangle 15.jpg"}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
            ></Box>
          </Flex>
        </GridItem>
        <GridItem className="bored-40" w="100%" bg="#72A397">
          <Flex flexDirection={"column"}>
            <Box
              textAlign={"center"}
              className="sale-pading-lap sale-pading-mob"
            >
              <Heading className="sale-heading-lap sale-heading-mob">
                Bags
              </Heading>
              <p
                className="price-sale"
                style={{
                  color: "#54988A",
                }}
              >
                $675
              </p>
              <p>Những chiếc túi thời thượng đẹp mắt sang trọng </p>
            </Box>
            <Spacer />
            <Box
              h={"215px"}
              w={"100%"}
              className="border-radius"
              backgroundImage={"Rectangle 16.jpg"}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
            ></Box>
          </Flex>
        </GridItem>
      </Grid>
    </main>
  );
}
