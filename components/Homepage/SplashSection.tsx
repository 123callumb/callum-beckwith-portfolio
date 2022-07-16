import { Box, Button, Flex, Text, Image, Container, Stack, IconButton, Spacer, Icon } from "@chakra-ui/react";
import { FaArrowCircleDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ExternalLinkEnum, InternalLinkEnum } from "../../lib/enums/LinkEnum";
import NextLink from 'next/link';
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import Vivus from "vivus";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SplashSection() {
    const [blueCircuitRef, setBlueCircuitRef] = useState<HTMLObjectElement>();

    useEffect(() => {

        if (blueCircuitRef) {
            const circuitAnimation = new Vivus(blueCircuitRef, {
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

    return <Container maxW={"4xl"}>
        <Flex w="100%"
            color="blackShade"
            flexDirection="row"
            justifyContent="center"
            py="100px">
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
                    <Text fontSize="48" fontWeight="700" mt="-4" >Callum Beckwith</Text>
                    <Text fontSize="34" fontWeight="700" mt="-2">Software Developer</Text>
                    <Text fontSize="16" my="3">
                        Hey! I’m Callum, software developer from the north of England. Come have a look at some of my work and experience :)
                    </Text>
                    <Flex color="blackShade">
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} href={ExternalLinkEnum.Twitter} target="_blank" rel="noreferrer">
                            <IconButton mr="10px" variant="ghost" icon={<Icon as={FaTwitter} boxSize="8" />} aria-label="My Twitter" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} href={ExternalLinkEnum.LinkedIn} target="_blank" rel="noreferrer">
                            <IconButton mr="10px" variant="ghost" icon={<Icon as={FaLinkedin} boxSize="8" />} aria-label="My Linkedin" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} href={ExternalLinkEnum.GitHub} target="_blank" rel="noreferrer">
                            <IconButton variant="ghost" icon={<Icon as={FaGithub} boxSize="8" />} aria-label="My Github" />
                        </motion.a>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    </Container>;
}