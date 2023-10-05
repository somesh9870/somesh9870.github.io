import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { MdSlideshow } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import macMatch from "../Images/MacMatch.png";
import styleIncore from "../Images/styleIncore.png";
import internThrive from "../Images/internThrive.png";
import phramEasy from "../Images/pharmeasy.png";
import game from "../Assests/game.png";
import healthyway from "../Images/HealthyWay.png";
import versatile from "../Images/versatile.png";

import React from "react";

function Projects() {
  let projectdata = [
    {
      name: "MacMatch",
      img: macMatch,
      type: "Group",
      desc: "It is an e-commerce website which provides various types of electronic products with online services.",
      techstack:
        " React | Redux | JavaScript | Redux-Thunk | Chakra UI | Material UI",
      livelink: "https://macmatch.vercel.app/",
      gitlink: "https://github.com/somesh9870/MacMatch",
    },
    {
      name: "HealthyWay",
      img: healthyway,
      type: "Group",
      desc: "Healthyway is a website that functions as a nutrition tracking tool to help users reach their health goals by monitoring their daily caloric intake and other relevant factors.",
      techstack:
        " React | Redux | JavaScript | Node.js | Express.js | Mongoose | MOngoDB Atlas | Chakra UI",
      livelink: "https://healty-way.vercel.app/",
      gitlink: "https://github.com/somesh9870/Healthy-way",
    },
    {
      name: "PharmEasy",
      img: phramEasy,
      type: "Group",
      desc: "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep. ",
      techstack: " HTML | CSS | JavaScript | JSON server",
      livelink: "https://marspharmacy.netlify.app/",
      gitlink: "https://github.com/somesh9870/Pharmeasy-Clone",
    },
    {
      name: "Riddle Of Ruins",
      img: game,
      type: "Group",
      desc: "A object finding game where one have to find hidden objects to earn points and move ahead to another level.",
      techstack:
        "React | Redux | TypeScript | Node.js | Express.js | Mongoose | MongoDB Atlas | Tailwind CSS",
      livelink: "https://game-geniuses.vercel.app/",
      gitlink: "https://github.com/somesh9870/Game-Geniuses",
    },
    {
      name: "STYLE-INCORE",
      img: styleIncore,
      type: "Individual",
      desc: "It is a fashion-forward apparel brand and style community  which provides various types of clothing products with online services.",
      techstack: "React | JavaScript | Chakra UI ",
      livelink: "https://express-rouge-seven.vercel.app/",
      gitlink: "https://github.com/somesh9870/express",
    },
    {
      name: "Intern Thrive",
      img: internThrive,
      type: "Group",
      desc: "It is a platform connecting Companies and potential employees in various sectors.",
      techstack: " HTML | CSS | JavaScript | Bootstrap",
      livelink: "https://intern-thrive.netlify.app/",
      gitlink: "https://github.com/somesh9870/Intern-Thirve",
    },
    {
      name: "Edith",
      img: versatile,
      type: "Group",
      desc: "Edith is a real-life student course platform for Student of Versatile Technologies that offers a variety of functionalities, including the ability to take tests, set up games for students, write blogs, take note of student fees, and much more. note;-* use email:- somesh@gmail.com pass:- somesh for login and admin login",
      techstack:
        " React | Redux | Chakra UI | Node.js | Mongoose | MongoDB Atlas | Express | JavaScript",
      livelink: "https://versatile-backend.vercel.app/",
      gitlink: "https://github.com/somesh9870/Versatile-Project",
    },
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
                    display={["inline", "inline", "inline", "flex"]}
                    rowGap="60px"
                    justifyContent="space-between"
                    border={"3px solid #1877f2"}
                  >
                    <Image
                      w={["100%", "97%", "97%", "60%"]}
                      m="auto"
                      src={project.img}
                      alt="project-thumbnail"
                    />
                    <Box w={["100%", "97%", "97%", "39%"]} m="auto" p={"30px"}>
                      <Text
                        fontSize={["3xl", "3xl", "3xl", "4xl"]}
                        fontWeight={700}
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
                        mb="20px"
                      >
                        {project.desc}
                      </Text>
                      <Flex
                        w={["100%", "90%", "90%"]}
                        mb={"20px"}
                        justify={"center"}
                      >
                        {/* <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          m="auto"
                          mt="10px"
                          fontSize={["md", "md", "lg"]}
                          color="#fff"
                          mb={["0", "0", "20px"]}
                        >
                          Techstacks
                        </Text> */}
                        <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          // m="auto"
                          mt="10px"
                          fontSize={["sm", "md", "md"]}
                          color="#fff"
                        >
                          {project.techstack}
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
