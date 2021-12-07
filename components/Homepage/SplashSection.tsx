import { Box, Button, Flex, Icon, IconButton, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowCircleDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import LinkEnum from "../../lib/enums/LinkEnum";

export default () => <Box w="100%" h="68vh" pos="relative">
    <Flex mt={{ md:"28vh", base: "24vh" }}>
        <Flex spacing={4} color="whiteShade" borderLeft="6px white solid" ml={{md:"15%", base: "5%"}} pl="6" pb="0" flexDirection="column">
            <Text fontSize="56" fontWeight="600">Callum Beckwith</Text>
            <Text fontSize="26" fontWeight="200" mt="-2">Software Developer</Text>
            <Button maxW="max-content" bgColor="cyanShade1" size="sm" mt="4" >Contact me</Button>
        </Flex>
        <Spacer />
        <Stack spacing={5} flexDirection="column" color="whiteShade" px="4" d={{ base: 'none', md: 'flex'}}>
            <a href={LinkEnum.GitHub} target="_blank">
                <IconButton variant="ghost" icon={<Icon as={FaTwitter} boxSize="10" />} aria-label="My Twitter" _hover={{ opacity: 0.8 }} />
            </a>
            <Spacer />
            <a href={LinkEnum.LinkedIn} target="_blank">
                <IconButton variant="ghost" icon={<Icon as={FaLinkedin} boxSize="10" />} aria-label="My Linkedin" _hover={{ opacity: 0.8 }} />
            </a>
            <Spacer />
            <a href={LinkEnum.Twitter} target="_blank">
                <IconButton variant="ghost" icon={<Icon as={FaGithub} boxSize="10" />} aria-label="My Github" _hover={{ opacity: 0.8 }} />
            </a>
        </Stack>
    </Flex>
    <VStack pos="absolute" bottom="12" w="100%">
        <Text color="whiteShade" fontSize="2xl" fontWeight="100">What I've been up to...</Text>
        <Icon as={FaArrowCircleDown} color="whiteShade" boxSize="6" />
    </VStack>
</Box>