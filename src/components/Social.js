import Icon from "@chakra-ui/icon";
import React, { useState } from "react";

import { HStack } from "@chakra-ui/layout";
import {
  FaFacebookF,
  FaGoogle,
  FaSpotify,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

function Social() {
  const handleMouseEnter = (e) => {
    e.target.style.background = "grey";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "maroon";
  };
  // const [isShown, setIsShown] = useState(false);
  return (
    <HStack spacing="40">
      {/* <Icon as={FaFacebookF} boxSize="50" /> */}
      {/* <Icon as={FaGoogle} boxSize="50" /> */}

      <Icon
        as={FaGithub}
        boxSize="50"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}

        onClick={() => window.open("https://github.com/vanshaj8")}
      />
      <Icon
        as={FaTwitter}
        boxSize="50"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        onClick={() => window.open("https://twitter.com/imvanshaj")}
      />
      <Icon
        as={FaLinkedin}
        boxSize="50"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        onClick={() =>
          window.open("https://www.linkedin.com/in/vanshaj-sharma-9239481a1/")
        }
      />
    </HStack>
  );
}

export default Social;
