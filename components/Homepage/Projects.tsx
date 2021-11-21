import { Box, Center, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";
import style from '../../styles/Components/Projects.module.scss';
const projects: { imgSrc: string, name: string }[] = [
    
];

export default () => <SimpleGrid w="100%" color="whiteShade" columns={{ md: 2, sm: 1, base: 1 }}>
    <Center bgColor="blueShade2" height="400px">
        <Text fontSize="24">Easy<b>Learn</b></Text>
    </Center>
    <Center bgColor="blueShade1" height="400px">
        <Box height="50px" transition="0.3s all" _hover={{ transform: 'scale(1.1)' }}>
            <embed src="/svg/webur-white-logo.svg" width="80%" height="100%" draggable="false" />
        </Box>
    </Center>
    <Center bgColor={{ md: "blueShade1", base: "blueShade2" }} height="400px">
        <Box height="150px" transition="0.3s all" _hover={{ transform: 'scale(1.1)' }}>
            <embed src="/img/ca-white-logo.png" height="100%" draggable="false" />
        </Box>
    </Center>
    <Center bgColor={{ md: "blueShade2", base: "blueShade1" }} height="400px">
        <Box height="110px" transition="0.3s all" _hover={{ transform: 'scale(1.1)' }}>
            <embed src="/img/fn-white-logo.png" height="100%" draggable="false" />
        </Box>
    </Center>
    <Center bgColor="blueShade2" height="400px" className={style.projectItem}>
        <Box height="110px" className={style.projectContent}>
            <embed src="/img/shu-white-logo.png" height="100%" draggable="false" />
            <Box opacity="0" className={style.projectTitle} mt="8" fontSize="sm">
                <Text>View project details</Text>
                <Icon ml="2" mt="2" as={FaArrowCircleRight} />
            </Box>
        </Box>
    </Center>
    <Center bgColor="blueShade1" height="400px">
        <Text fontSize="24">View all projects</Text>
        <Icon ml="2" mt="2" as={FaArrowCircleRight} />
    </Center>
</SimpleGrid>