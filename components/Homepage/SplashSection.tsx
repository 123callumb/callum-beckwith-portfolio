import { Box, Flex, Text, Image, Container, IconButton, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ExternalLinkEnum } from "../../lib/enums/LinkEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import Vivus from "vivus";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SplashSection() {
    const [blueCircuitRef, setBlueCircuitRef] = useState<HTMLObjectElement>();

    useEffect(() => {
        if (blueCircuitRef) {
            new Vivus(blueCircuitRef, {
                duration: 500,
                type: "scenario",
                reverseStack: true
            }, vivus => {
                if (vivus.getStatus() === "end") {
                    (vivus as any).parentEl.classList.add("fade-out-long");
                    setTimeout(() => {
                        (vivus as any).parentEl.classList.remove("fade-out-long");
                        vivus.reset().play();
                    }, (1000));
                }
            });
        }
    });

    return <Flex
        w="100%"
        flexDir={"column"}
        minH={"96vh"}>
        <Flex
            color="blackShade"
            flexDirection="row"
            justifyContent="center"
            alignItems={"center"}
            flex={1}>
            <Flex maxH={"240px"}>
                <Box overflow="visible" height="100%" pr="10px" flex="1" pos={"relative"}>
                    <object
                        ref={setBlueCircuitRef}
                        style={{
                            maxHeight: "233px",
                            left: "11px",
                            top: "2px",
                            position: "absolute"
                        }}
                        type="image/svg+xml"
                        data={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuitBlue)}
                    />
                    <Image height="240px" width="432px" src={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuit)} />
                </Box>
                <Flex flexDir="column" maxW="420px" justifyContent="center" borderLeft="6px solid">
                    <Box borderColor="blackShade" pl="6">
                        <Text fontSize="48" fontWeight="700" mt="-4">Callum Beckwith</Text>
                        <Text fontSize="34" fontWeight="700" mt="-2">Software Developer</Text>
                        <Text fontSize="16" my="3">
                            Hey! I&apos;m Callum, a software developer from the north of England. Come have a look at some of my work and experience :)
                        </Text>
                        <Flex color="blackShade">
                            <motion.a whileHover={{ scale: 1.1, transition: { type: "spring", velocity: 6, stiffness: 500 } }} whileTap={{ scale: 0.8 }} href={ExternalLinkEnum.Twitter} target="_blank" rel="noreferrer">
                                <IconButton mr="10px" variant="ghost" icon={<Icon as={FaTwitter} boxSize="8" />} aria-label="My Twitter" />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.1, transition: { type: "spring", velocity: 6, stiffness: 500 } }} whileTap={{ scale: 0.8 }} href={ExternalLinkEnum.LinkedIn} target="_blank" rel="noreferrer">
                                <IconButton mr="10px" variant="ghost" icon={<Icon as={FaLinkedin} boxSize="8" />} aria-label="My Linkedin" />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.1, transition: { type: "spring", velocity: 6, stiffness: 500 } }} whileTap={{ scale: 0.8 }} href={ExternalLinkEnum.GitHub} target="_blank" rel="noreferrer">
                                <IconButton variant="ghost" icon={<Icon as={FaGithub} boxSize="8" />} aria-label="My Github" />
                            </motion.a>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
        <Flex w="100%" marginBottom={"-6%"}>
            <img src={ResourceHelper.CreateResourceURL(ResourceEnum.Header_Abstract)} width="100%" />
        </Flex>
    </Flex>;
}