import { Box, Button, Flex, Icon, IconButton, Spacer, Stack, Text, VStack, Image, Container } from "@chakra-ui/react";
import { FaArrowCircleDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ExternalLinkEnum, InternalLinkEnum } from "../../lib/enums/LinkEnum";
import NextLink from 'next/link';
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";

export default function SplashSection() {
    return <Container maxW={"6xl"} pos="relative">
        <Flex>
            <Flex w="100%"
                height="70vh"
                color="blackShade"
                flexDirection="row"
                justifyContent="center">
                <Flex flexDir="column" minW="420px" maxW="420px" justifyContent="center">
                    <Box borderLeft="6px solid" borderColor="blackShade" pl="6" mb="10vh">
                        <Text fontSize="48" fontWeight="700" >Callum Beckwith</Text>
                        <Text fontSize="34" fontWeight="700" mt="-2">Software Developer</Text>
                        <Text fontSize="16" my="4">
                            Hey! I’m Callum, software developer from the north of England. Come have a look at some of my work and experience :)
                        </Text>
                        <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.CVSummary)}>
                            <Button maxW="max-content" bgColor="btnBlueShade" color="whiteShade" size="sm" mt="4" >Contact me</Button>
                        </NextLink>
                    </Box>
                </Flex>
                <Flex overflow="visible" maxW="50%">
                    <Image minH="100%" src={ResourceHelper.CreateResourceURL(ResourceEnum.IsometricSplash)} />
                </Flex>
            </Flex>
            {/* <Stack spacing={5} flexDirection="column" color="whiteShade" px="4" d={{ base: 'none', md: 'flex' }}>
                <a href={ExternalLinkEnum.Twitter} target="_blank" rel="noreferrer">
                    <IconButton variant="ghost" icon={<Icon as={FaTwitter} boxSize="10" />} aria-label="My Twitter" _hover={{ opacity: 0.8 }} />
                </a>
                <Spacer />
                <a href={ExternalLinkEnum.LinkedIn} target="_blank" rel="noreferrer">
                    <IconButton variant="ghost" icon={<Icon as={FaLinkedin} boxSize="10" />} aria-label="My Linkedin" _hover={{ opacity: 0.8 }} />
                </a>
                <Spacer />
                <a href={ExternalLinkEnum.GitHub} target="_blank" rel="noreferrer">
                    <IconButton variant="ghost" icon={<Icon as={FaGithub} boxSize="10" />} aria-label="My Github" _hover={{ opacity: 0.8 }} />
                </a>
            </Stack> */}
        </Flex>
        <VStack pos="absolute" bottom="12" w="100%">
            <Text fontSize="xl" fontWeight="400">What I've been up to...</Text>
            <Icon as={FaArrowCircleDown} boxSize="6" />
        </VStack>
    </Container>
}