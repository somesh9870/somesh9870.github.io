import {
  Box,
  Image,
  Text,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { MdSlideshow } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import macMatch from "../Images/MacMatch.png";
import styleIncore from "../Images/styleIncore.png";
import internThrive from "../Images/internThrive.png";
import phramEasy from "../Images/pharmeasy.png";

import React from "react";

function Projects() {
  let projectdata = [
    {
      name: "MacMatch",
      // img: "https://user-images.githubusercontent.com/112812835/221432362-7a9776e1-1b0e-48c2-876f-af43ebb77be3.png",
      img: macMatch,
      type: "Group",
      desc: "It is an e-commerce website which provides various types of electronic products with online services.",
      techstack:
        " React | Redux | JavaScript | Redux-Thunk | Chakra UI and Material UI",
      livelink: "https://murky-pan.vercel.app/",
      gitlink: "https://github.com/Namrata0407/murky-pan-2202",
    },
    {
      name: "PharmEasy",
      img: phramEasy,
      type: "Group",
      desc: "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep. ",
      techstack: " HTML | CSS | JavaScript | and JSON server",
      livelink: "https://marspharmacy.netlify.app/",
      gitlink: "https://github.com/rohithanss/Pharmeasy-Clone",
    },
    {
      name: "Intern Thrive",
      img: internThrive,
      type: "Group",
      desc: "It is a platform connecting Companies and potential employees in various sectors.",
      techstack: " HTML | CSS | JavaScript | Bootstrap",
      livelink: "https://intern-thrive.netlify.app/",
      gitlink: "https://github.com/Kavin0721/lumpy-pocket-4371",
    },

    {
      name: "STYLE-INCORE",
      img: styleIncore,
      type: "Individual",
      desc: "It is a fashion-forward apparel brand and style community  which provides various types of clothing products with online services.",
      techstack: "React | JavaScript | Chakra UI ",
      livelink: "https://style-incore-express.netlify.app/",
      gitlink: "https://github.com/somesh9870/express",
    },
    // {
    //   name: "PharmEasy",
    //   img: "https://rohithanss.github.io/pharmeasy.png",
    //   type: "Group",
    //   desc: "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep. In addition to selling medications, PharmEasy also offers a range of healthcare services, including lab test bookings, doctor consultations, and online healthcare products.",
    //   techstack: " HTML, CSS, JavaScript, and JSON server",
    //   livelink: "https://marspharmacy.netlify.app/",
    //   gitlink: "https://github.com/rohithanss/Pharmeasy-Clone",
    // },
  ];

  return (
    <Box
      id="projects"
      className="project"
      w="full"
      // color="#ffffff"
      p="30px 0px"
      textAlign="center"
      pt={20}
    >
      <Box w="85%" m="auto">
        <Box
          gap={"10px"}
          display={"flex"}
          mb="25px"
          justifyContent={"center"}
          fontWeight="400"
        >
          <Text
            // ml={["110px", "200px", "490px"]}
            textAlign="center"
            // color={useColorModeValue('','')}
            fontWeight={700}
            fontSize={["3xl", "4xl", "5xl"]}
          >
            Projects
          </Text>
          <Text mt={["8px", "10px", "15px"]} fontSize={["3xl", "4xl", "5xl"]}>
            <MdSlideshow className="bounce" color={"#bb0606"} />
          </Text>
        </Box>
        <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
          {projectdata &&
            projectdata.map((project) => {
              return (
                <Box className="project-card" bg={"#0c1014"}>
                  <Box
                    display={["inline", "inline", "flex"]}
                    rowGap="60px"
                    justifyContent="space-between"
                    border={"3px solid #1877f2"}
                  >
                    <Image
                      w={["100%", "97%", "60%"]}
                      m="auto"
                      src={project.img}
                      alt="project-thumbnail"
                    />
                    <Box w={["100%", "97%", "39%"]} m="auto" p={"30px"}>
                      <Text
                        fontSize={["2xl", "3xl", "4xl"]}
                        className="project-title"
                        // color="#fff"
                        color={"#bb0606"}
                        mb="30px"
                        mt={"20px"}
                      >
                        {project.name}
                      </Text>
                      {/* <Text fontSize={["xl", "2xl", "3xl"]}>
                        ( {project.type} )
                      </Text> */}
                      <Text
                        className="project-description"
                        textAlign={"left"}
                        w={["100%", "90%", "90%"]}
                        m="auto"
                        fontSize={["sm", "md", "md"]}
                        color="#fff"
                        mb="30px"
                      >
                        {project.desc}
                      </Text>
                      <Flex w={["100%", "90%", "90%"]}>
                        <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          m="auto"
                          mt="10px"
                          fontSize={["md", "md", "lg"]}
                          color="#fff"
                          mb={["0", "0", "20px"]}
                        >
                          Techstacks
                        </Text>
                        <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          // m="auto"
                          mt="10px"
                          fontSize={["sm", "md", "md"]}
                          color="#fff"
                        >
                          - {project.techstack}
                        </Text>
                      </Flex>
                      <Box
                        display="flex"
                        w={["100%", "80%", "100%"]}
                        m="auto"
                        justifyContent="space-around"
                      >
                        <Button
                          className="project-deployed-link"
                          as="a"
                          // color={useColorModeValue('black','white')}
                          target="_blank"
                          href={project.livelink}
                          _hover={{ color: "#bb0606" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          // color="black"
                          // border="1px solid white"
                          variant="solid"
                          leftIcon={<BiLinkExternal />}
                        >
                          Live
                        </Button>
                        <Button
                          className="project-github-link"
                          as="a"
                          target="_blank"
                          href={project.gitlink}
                          _hover={{ color: "#bb0606" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          // color="black"
                          // border="1px solid white"
                          variant="solid"
                          leftIcon={<BsGithub />}
                        >
                          Github
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
export default Projects;
