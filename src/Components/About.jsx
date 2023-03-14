import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import SomeshRawat from "../Resume/fw21_0865-Somesh-Rawat-Resume.pdf";

function About() {
  return (
    <Grid
      // border="1px solid red"
      textAlign="center"
      justifyContent={"center"}
      alignItems="center"
      py={12}
      minH="100vh"
      id="about"
      className="about section"
    >
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        mb={"40px"}
        textAlign={"center"}
      >
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: useBreakpointValue({ base: "20%", md: "30%" }),
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "red.600",
            zIndex: -1,
          }}
        >
          About Me
        </Text>
      </Heading>
      <Text fontSize="xl" maxW="80%" mx="auto">
        Hi there! My name is Somesh Rawat and I am an Aspiring Full Stack
        Developer (MERN)
      </Text>
      <Text
        fontSize="xl"
        maxW="3xl"
        mx="auto"
        mt={6}
        mb={30}
        id="user-detail-intro"
      >
        A Full Stack Web Developer with expertise in Coding, Data Structures &
        Algorithms, and Design. MERN and JavaScript programmer with extensive
        experience. The ability to quickly learn new technologies and software.
        Capable of contributing to the success of a team by providing valuable
        support.
      </Text>
      <Flex
        justify={"center"}
        alignItems="center"
        gap={10}
        direction={["column", "row", "row"]}
      >
        <Flex>
          <Button id="resume-button-2" bg={"#d50032"} gap={4} px={10}>
            <Link
              id="resume-link-2"
              display={"flex"}
              // justifyContent="space-between"
              gap="15px"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1tS5hoRo2c2GgTCuYuwhj7IPUvojTTQEj/view?usp=share_link"
                )
              }
              href={SomeshRawat}
              target={"_blank"}
              download
            >
              <FiDownload /> <span> Resume</span>
            </Link>
          </Button>
        </Flex>
        <Flex>
          <Button gap={4} px={10}>
            {" "}
            <BsGithub /> <span>Github</span>
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

export default About;
