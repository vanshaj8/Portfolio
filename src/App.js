import { IconButton } from "@chakra-ui/button";
import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    //...
    backgroundColor: isHover ? "black" : "pink"
  };

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8"
          size="sm"
          fontWeight="semibold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          color={isDark ? "cyan.500" : "black.500"}
        >
          vanshajsharma8@gmail.com
        </Heading>

        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/vanshaj-sharma-9239481a1/")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/vanshaj8/")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaTwitter />}
          isRound="true"
          onClick={() => window.open("https://twitter.com/imvanshaj")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
