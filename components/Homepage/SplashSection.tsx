import { Box, Flex, Text, Image, IconButton, Icon, chakra } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ExternalLinkEnum } from "../../lib/enums/LinkEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import Vivus from "vivus";
import React, { SetStateAction, useEffect, useRef, useState, Dispatch } from "react";
import { motion } from "framer-motion";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";

export default function SplashSection() {
    const [blueCircuitRef, setBlueCircuitRef] = useState<HTMLObjectElement>();
    const [blueCircuitRefMobile, setBlueCircuitRefMobile] = useState<HTMLObjectElement>();

    useEffect(() => {
        [blueCircuitRef, blueCircuitRefMobile].forEach(f => {
            if (!f) return;

            new Vivus(f, {
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
        });
    });

    return <Flex
        w="100%"
        flexDir={"column"}
        minH={"100vh"}
        overflowY={"visible"}>
        <Flex
            color="blackShade"
            flexDirection="row"
            justifyContent="center"
            alignItems={"center"}
            flex={1}
            zIndex={"2"}
            pos="relative">
            <Flex marginLeft={"-60px"}>
                <Box overflow="visible" height="100%" pr="10px" flex="1" pos={"relative"} display={{ base: "none", md: "none", lg: "block" }} marginRight="-22px">
                    <chakra.object
                        ref={setBlueCircuitRef}
                        maxH={"233px"}
                        minH={"233px"}
                        left={"11px"}
                        top={"22px"}
                        position={"absolute"}
                        type="image/svg+xml"
                        data={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuitBlue)}
                    />
                    <Image
                        maxW={"unset"}
                        height={"280px"}
                        minH={"280px"}
                        maxH={"280px"}
                        width={"432px"}
                        src={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuit)}
                    />
                </Box>
                <Flex maxW={"440px"} flexDir="column" justifyContent="center" borderLeft="12px solid black" bgColor={"white"} borderTop={`10px solid ${ColourPaletteEnum.Cyan}`} borderRadius={2} boxShadow="1px 0px 10px 1px rgba(40, 40, 40, 0.12)">
                    <Box borderColor="blackShade" p="6">
                        <Text fontSize="48" fontWeight="700" mt="-4">Callum Beckwith</Text>
                        <Text fontSize="34" fontWeight="700" mt="-2">Software Developer</Text>
                        <Text fontSize="16" my="3">
                            Hey! I&apos;m Callum, a software developer from the north of England
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
        <Flex w="100%" flexDir={"column"}>
            <Box display={{ base: "block", md: "block" }} pos="relative">
                <Box pos="absolute" mx="auto" right="-5vw" bottom={"-14vh"} textAlign={"center"} zIndex={"1"} >
                    <chakra.object
                        ref={setBlueCircuitRefMobile}
                        maxW={"unset"}
                        maxH={"unset"}
                        width={"143vh"}
                        left={"4vh"}
                        top={"0.7vh"}
                        position={"absolute"}
                        type="image/svg+xml"
                        opacity={"0.05"}
                        data={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuitBlue)}
                    />
                    <Image
                        opacity={"0.02"}
                        maxW={"unset"}
                        maxH={"unset"}
                        width={"150vh"}
                        src={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuit)}
                    />
                </Box>
            </Box>
            <Image src={ResourceHelper.CreateResourceURL(ResourceEnum.Header_Abstract)} width="100%" zIndex={"4"} />
        </Flex>
    </Flex>;
}