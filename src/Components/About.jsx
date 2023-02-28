import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

function About() {
  return (
    <Box
      border="1px solid red"
      textAlign="center"
      justifyContent={"center"}
      alignItems="center"
      py={12}
      minH="100vh"
      id="about"
      className="about section"
    >
      <Heading as="h2" size="2xl" mb={8}>
        About Me
      </Heading>
      <Text fontSize="xl" maxW="80%" mx="auto">
        Hi there! My name is Somesh Rawat and I'm a Full Stack Web Developer
        based in [Your Location]. I specialize in MERN Stack and have experience
        working with [Your Skills].
      </Text>
      <Text fontSize="xl" maxW="3xl" mx="auto" mt={6} mb={30}>
        A passionate and adaptable full stack web developer, skilled in
        JavaScript, Node JS, Express, MongoDB, with proficiency in
        problem-solving. A dependable and responsible team player with an eye to
        detail. Looking for a position to enhance once skills while
        significantly contributing to the company's growth.
      </Text>
      <Flex
        justify={"center"}
        alignItems="center"
        gap={10}
        direction={["column", "row", "row"]}
      >
        <Flex>
          <Button gap={4} px={10}>
            <FiDownload /> <span> Resume</span>
          </Button>
        </Flex>
        <Flex>
          <Button gap={4} px={10}>
            {" "}
            <BsGithub /> <span>Github</span>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default About;
