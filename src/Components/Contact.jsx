import React from "react";
import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  Textarea,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <Box
      // h={["1000px", "1050px", "700px"]}
      color={useColorModeValue("black", "white")}
    >
      <Text
        mb="25px"
        textAlign="center"
        fontWeight="700"
        fontSize={["3xl", "4xl", "5xl"]}
        // color={"#00b9e8"}
        mt={"10%"}
      >
        Contact Me
      </Text>
      <Box
        display={["inline", "inline", "flex"]}
        // gap={"70px"}
        // border={"2px solid red"}
        className="contact"
        id="contact"
        w={["100%", "97%", "79%"]}
        fontSize={30}
        // color={"black"}
        m={"auto"}
        mt={{ base: 0, md: "5%", lg: "5%" }}
        h={"500px"}
      >
        <Box w={["100%", "80%", "50%"]} margin="auto">
          <Stack>
            <Text
              color={useColorModeValue("red", "red")}
              fontSize={["20px", "25px", "30px"]}
              textAlign={["center", "center", "left"]}
            >
              Get in Touch
            </Text>

            <Grid
              // border={"1px solid red"}
              justifyContent={{ base: "center", md: "left", lg: "left" }}
              alignItems={{ base: "center" }}
              gap="20px"
            >
              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                    mt={"5px"}
                  >
                    <TfiEmail />
                  </Text>
                  <Text
                    id="contact-email"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["4px", "", ""]}
                  >
                    <a
                      href="mailto:someshrawat106@gmail.com"
                      alt="githublink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      someshrawat106@gmail.com
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://github.com/somesh9870"
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <AiFillGithub />
                    </a>
                  </Text>
                  <Text
                    id="contact-github"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["3px", "", ""]}
                  >
                    <a
                      href="https://github.com/somesh9870"
                      alt="githublink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      somesh9870
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://www.linkedin.com/in/somesh-rawat/"
                      alt=""
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <FaLinkedin />
                    </a>
                  </Text>
                  <Text
                    id="contact-linkedin"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["1px", "", ""]}
                  >
                    <a
                      href="https://www.linkedin.com/in/somesh-rawat/"
                      alt="linkedinlink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Somesh Rawat
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://github.com/somesh9870"
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <IoCall />
                    </a>
                  </Text>
                  <Text
                    id="contact-phone"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["1px", "", ""]}
                  >
                    + 91 9870632955
                  </Text>
                </Flex>
              </Box>
            </Grid>
          </Stack>
        </Box>

        <form
          action="https://getform.io/f/8d8ad41c-d8b8-41be-a541-c560dca22f09"
          method="POST"
        >
          <Box
            w={["90%", "70%", "90%"]}
            mt={["100px", "100px", "0px"]}
            margin="auto"
            // marginTop={{ base: "0px", md: "0" }}
            // h={"400px"}
            // ml={["70px", "100px", "-5%"]}
            // boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            p="35px"
            borderRadius={"20px"}
          >
            <Stack>
              <Stack>
                <Text
                  color={"red"}
                  fontSize={["20px", "25px", "30px"]}
                  textAlign={["center", "center", "left"]}
                  mt={["-10px", "", ""]}
                >
                  Message Me
                </Text>
                <Flex>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    size={["md", "lg", "lg"]}
                    // color={"white"}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    size={["md", "lg", "lg"]}
                    // color={"white"}
                    ml={"20px"}
                  />
                </Flex>
              </Stack>

              <Stack mt={"20px"}>
                <Input
                  type="number"
                  name="number"
                  placeholder="Mobile Number"
                  size={["md", "lg", "lg"]}
                  // color={"white"}
                  m={"auto"}
                  mt={"8%"}
                />
              </Stack>

              <Stack mt={"20px"}>
                <Textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  size={["md", "lg", "lg"]}
                  // color={"white"}
                  m={"auto"}
                  mt={"8%"}
                />
              </Stack>
              <Stack mt={"20px"}>
                <Button
                  type="submit"
                  w={["50%", "30%", "50%"]}
                  h={["35px", "40px", "45px"]}
                  mt={"5%"}
                  ml={["56px", "170px", "100px"]}
                  size="lg"
                  color={"white"}
                  fontSize={["15px", "19px", "20px"]}
                  bg={"#bb0606"}
                  _hover={{
                    background: "#00b9e8",
                    color: "black",
                  }}
                >
                  Send
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Box>
      <Text
        textAlign={"center"}
        fontSize={{ base: "12px", md: "16px" }}
        marginTop={{ base: "20px" }}
        color={useColorModeValue("teal", "teal")}
      >
        Desgined & Build By Somesh Rawat, 2023
      </Text>
    </Box>
  );
};

export default Contact;
