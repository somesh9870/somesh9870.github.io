// import { Box, Button, Heading, Text } from "@chakra-ui/react";
// import React from "react";

// const About = () => {
//   return (
//     <Box>
//       <Heading>About</Heading>
//       <Text>
//         A passionate and adaptable full stack web developer, skilled in
//         JavaScript, Node JS, Express, MongoDB, with proficiency in
//         problem-solving. A dependable and responsible team player with an eye to
//         detail. Looking for a position to enhance once skills while
//         significantly contributing to the company's growth.
//       </Text>
//       <Button>Resume</Button>
//       <Button>Github</Button>
//     </Box>
//   );
// };

// export default About;

import { Box, Text, Heading } from "@chakra-ui/react";

function About() {
  return (
    <Box textAlign="center" py={12} id="about" className="about section">
      <Heading as="h2" size="2xl" mb={4}>
        About Me
      </Heading>
      <Text fontSize="xl" maxW="3xl" mx="auto">
        Hi there! My name is [Your Name] and I'm a [Your Profession] based in
        [Your Location]. I specialize in [Your Expertise] and have experience
        working with [Your Skills].
      </Text>
      <Text fontSize="xl" maxW="3xl" mx="auto" mt={6}>
        A passionate and adaptable full stack web developer, skilled in
        JavaScript, Node JS, Express, MongoDB, with proficiency in
        problem-solving. A dependable and responsible team player with an eye to
        detail. Looking for a position to enhance once skills while
        significantly contributing to the company's growth.
      </Text>
    </Box>
  );
}

export default About;
