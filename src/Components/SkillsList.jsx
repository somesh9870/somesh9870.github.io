import React from "react";
import {
  Box,
  Grid,
  useBreakpointValue,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Heading,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";

export const skillsData = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "Javascript",
    category: "frontend",
  },
  {
    icon: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
    name: "HTML",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/css.39769a8bd378bf410d6b381a8d88fa35.svg",
    name: "CSS",
    category: "frontend",
  },

  {
    icon: "https://alih6051.github.io/static/media/bootstrap.9d52c09ec3d831cca7244e06743aed7d.svg",
    name: "Bootstrap",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/tailwind.e7b4a92d5aefbddd6f0651c024144be2.svg",
    name: "Tailwind",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/react.4e0c97009b885bfa75c5412262a46f5f.svg",
    name: "React",
    category: "frontend",
  },
  {
    icon: "data:image/png;base64,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",
    name: "Next JS",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/redux.7fe607aacc31f6e6199e70f16aae407e.svg",
    name: "Redux",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/chakra.15320604467d004df871.png",
    name: "Chakra UI",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/mui.87264df237ee700ba78bb58ff701a6d3.svg",
    name: "Material UI",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/node.10c9e2aa0ca7edf36fceae25fec038a1.svg",
    name: "Node JS",
    category: "backend",
  },
  {
    icon: "https://alih6051.github.io/static/media/express.4925c0127df8857c18b38329795ce88f.svg",
    name: "Express",
    category: "backend",
  },
  {
    icon: "https://alih6051.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg",
    name: "MongoDB",
    category: "backend",
  },
  {
    icon: "https://alih6051.github.io/static/media/mongoose.51275a001caf5e6e30d4.png",
    name: "Mongoose",
    category: "backend",
  },
  {
    icon: "https://alih6051.github.io/static/media/git.c08353563539c6459b353f29d8dd7bf2.svg",
    name: "Git",
    category: "frontend",
  },
  {
    icon: "data:image/png;base64,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",
    name: "Postman",
    category: "frontend",
  },
];

const SkillsList = () => {
  const frontend_skills = skillsData.filter(
    (skill) =>
      skill.category === "frontend" ||
      skill.name === "Git" ||
      skill.name === "Postman"
  );

  const backend_skills = skillsData.filter(
    (skill) =>
      skill.category === "backend" ||
      skill.name === "Git" ||
      skill.name === "Postman"
  );

  return (
    <Box minH="100vh" p={20}>
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
          Technical Skills
        </Text>
      </Heading>
      <Tabs variant="unstyled" align="center">
        <TabList my={5}>
          <Tab
            _selected={{ color: "white", bg: "red.600" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            All
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "red.600" }}
            bg="white"
            color="black"
            mx={3}
            rounded="md"
          >
            Frontend
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "red.600" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            Backend
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {skillsData.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {frontend_skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {backend_skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SkillsList;
