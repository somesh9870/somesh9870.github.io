import { Box, Image, Text, Button } from "@chakra-ui/react";
import { MdSlideshow } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import React from "react";

function Projects() {
  let projectdata = [
    {
      name: "PharmEasy",
      img: "https://rohithanss.github.io/pharmeasy.png",
      type: "Group",
      desc: "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep. In addition to selling medications, PharmEasy also offers a range of healthcare services, including lab test bookings, doctor consultations, and online healthcare products.",
      techstack: " HTML, CSS, JavaScript, and JSON server",
      livelink: "https://wish-kart.vercel.app/",
      gitlink: "https://github.com/rohithanss/Pharmeasy-Clone",
    },
    {
      name: "PharmEasy",
      img: "https://rohithanss.github.io/pharmeasy.png",
      type: "Group",
      desc: "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep. In addition to selling medications, PharmEasy also offers a range of healthcare services, including lab test bookings, doctor consultations, and online healthcare products.",
      techstack: " HTML, CSS, JavaScript, and JSON server",
      livelink: "https://wish-kart.vercel.app/",
      gitlink: "https://github.com/rohithanss/Pharmeasy-Clone",
    },
    {
      name: "PharmEasy",
      img: "https://rohithanss.github.io/pharmeasy.png",
      type: "Group",
      desc: "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep. In addition to selling medications, PharmEasy also offers a range of healthcare services, including lab test bookings, doctor consultations, and online healthcare products.",
      techstack: " HTML, CSS, JavaScript, and JSON server",
      livelink: "https://wish-kart.vercel.app/",
      gitlink: "https://github.com/rohithanss/Pharmeasy-Clone",
    },

    {
      name: "PharmEasy",
      img: "https://rohithanss.github.io/pharmeasy.png",
      type: "Group",
      desc: "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep. In addition to selling medications, PharmEasy also offers a range of healthcare services, including lab test bookings, doctor consultations, and online healthcare products.",
      techstack: " HTML, CSS, JavaScript, and JSON server",
      livelink: "https://wish-kart.vercel.app/",
      gitlink: "https://github.com/rohithanss/Pharmeasy-Clone",
    },
    {
      name: "PharmEasy",
      img: "https://rohithanss.github.io/pharmeasy.png",
      type: "Group",
      desc: "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep. In addition to selling medications, PharmEasy also offers a range of healthcare services, including lab test bookings, doctor consultations, and online healthcare products.",
      techstack: " HTML, CSS, JavaScript, and JSON server",
      livelink: "https://wish-kart.vercel.app/",
      gitlink: "https://github.com/rohithanss/Pharmeasy-Clone",
    },
  ];

  return (
    <Box
      id="projects"
      className="project"
      w="full"
      color="#ffffff"
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
            color={"#00b9e8"}
            fontSize={["3xl", "4xl", "5xl"]}
          >
            Projects
          </Text>
          <Text mt={["8px", "10px", "15px"]} fontSize={["3xl", "4xl", "5xl"]}>
            <MdSlideshow className="bounce" color={"#00b9e8"} />
          </Text>
        </Box>
        <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
          {projectdata &&
            projectdata.map((project) => {
              return (
                <Box className="project-card" bg={"#0c1014"}>
                  <Box
                    display={["inline", "inline", "flex"]}
                    justifyContent="space-between"
                    border={"3px solid #1877f2"}
                  >
                    <Image
                      w={["100%", "97%", "60%"]}
                      m="auto"
                      src={project.img}
                      alt="project-thumbnail"
                    />
                    <Box w={["100%", "97%", "39%"]} m="auto">
                      <Text
                        fontSize={["2xl", "3xl", "4xl"]}
                        className="project-title"
                      >
                        {project.name}
                      </Text>
                      <Text fontSize={["xl", "2xl", "3xl"]}>
                        ( {project.type} )
                      </Text>
                      <Text
                        className="project-description"
                        textAlign={"center"}
                        w={["100%", "90%", "70%"]}
                        m="auto"
                        fontSize={["sm", "md", "md"]}
                      >
                        {project.desc}
                      </Text>
                      <Text
                        className="project-tech-stack"
                        w="85%"
                        m="auto"
                        mt="10px"
                        fontSize={["md", "mlgd", "lg"]}
                      >
                        Techstacks :-{project.techstack}
                      </Text>
                      <Box
                        display="flex"
                        w={["100%", "80%", "100%"]}
                        m="auto"
                        justifyContent="space-around"
                      >
                        <Button
                          className="project-deployed-link"
                          as="a"
                          target="_blank"
                          href={project.livelink}
                          _hover={{ color: "blue" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          color="black"
                          border="1px solid white"
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
                          _hover={{ color: "blue" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          color="black"
                          border="1px solid white"
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
