import { Flex, SimpleGrid, Text, Container, Icon, Center, Box } from "@chakra-ui/react";
import ProjectManager from "../../lib/services/ProjectManager";
import SummaryBox from "../Work/SummaryBox";
import { TiArrowRight } from 'react-icons/ti/index';

export default function Projects() {
    return <Flex pt={"120px"} bgColor="white" w="100%">
        <Container maxW={"4xl"} flexDirection={"column"} w="100%">
            <Flex alignItems={"baseline"} mb="60px">
                <Text fontSize="34" fontWeight="700" mr="20px">My Work.</Text>
                <Text>Here are a couple of my most recent projects I've worked on.</Text>
            </Flex>
            <SimpleGrid columns={{ sm: 1, md: 2 }} gap="10" rowGap="16">
                {ProjectManager.GetFeaturedProjects.map((m, i) => <SummaryBox {...m} key={i} />)}
            </SimpleGrid>
            <Flex justifyContent={"center"} alignItems="center" py="10" my="10">
                <Flex flexDir={"row"} fontSize={"24"} fontWeight={"500"} className="linkAnimation">
                    <Text>View all my work</Text>
                    <Center pt={"1.5"}>
                        <Icon as={TiArrowRight} />
                    </Center>
                </Flex>
            </Flex>
        </Container>
    </Flex>;
}