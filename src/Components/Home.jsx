import { Avatar, Badge, Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import profileImage from "../Images/MainPicture.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Flex
      // border="1px solid red"
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      gap={8}
      h={"100%"}
      mt={"30px"}
      py={{ base: "10px", lg: "80px" }}
    >
      <Flex
        alignItems="center"
        direction={{ base: "column", md: "column", lg: "row" }}
        gap={20}
      >
        <Box
          lineHeight={"60px"}
          w={"50%"}
          textAlign={{ base: "center", md: "center", lg: "start" }}
          p={"20px"}
        >
          <Text fontSize={"3xl"} fontWeight="bold">
            Hello there, I'm
          </Text>
          <Text textColor={"#d50032"} fontSize="6xl" fontWeight="bold">
            Somesh Rawat
          </Text>
          <Text fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}>
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Developer",
                  "A Software Engineer",
                  "A Problem Solver",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Box>
        <Image
          src={profileImage}
          objectFit={"contain"}
          h={"100%"}
          borderRadius="50%"
        />
      </Flex>
    </Flex>
  );
};

export default Home;
