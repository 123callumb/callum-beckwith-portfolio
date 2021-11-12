import { Box, Button, Flex, Icon, IconButton, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowCircleDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default () => <Box w="100%" h="68vh" pos="relative">
    <Flex mt="28vh">
        <Flex spacing={4} color="whiteShade" borderLeft="6px white solid" ml="15%" pl="6" pb="3" flexDirection="column">
            <Text fontSize="56" fontWeight="600">Callum Beckwith</Text>
            <Text fontSize="26" fontWeight="200" mt="-2">Software Developer</Text>
            <Button maxW="max-content" bgColor="cyanShade1" size="sm" mt="4" >Contact me</Button>
        </Flex>
        <Spacer />
        <Stack spacing={8} flexDirection="column" color="whiteShade" px="4">
            <IconButton variant="ghost" icon={<Icon as={FaTwitter} boxSize="10" />} aria-label="My Twitter" />
            <IconButton variant="ghost" icon={<Icon as={FaLinkedin} boxSize="10" />} aria-label="My Linkedin" />
            <IconButton variant="ghost" icon={<Icon as={FaGithub} boxSize="10" />} aria-label="My Github" />
        </Stack>
    </Flex>
    <VStack pos="absolute" bottom="12" w="100%">
        <Text color="whiteShade" fontSize="2xl" fontWeight="100">What I've been up to...</Text>
        <Icon as={FaArrowCircleDown} color="whiteShade" boxSize="6"/>
      </VStack>
</Box>