import { Flex, SimpleGrid, Text, Container, Icon} from "@chakra-ui/react";
import ScaleIntoView from "../Motion/ScaleIntoView";
import ProjectManager from "../../lib/services/ProjectManager";
import SummaryBox from "../Work/SummaryBox";
import { TiArrowRight } from 'react-icons/ti/index';

export default function Projects() {
    return <Flex pt={"120px"} bgColor="white" w="100%">
        <Container maxW={"4xl"} flexDirection={"column"} w="100%" columns={{ md: 2, sm: 1, base: 1 }}>
            <Flex alignItems={"baseline"} mb="60px">
                <Text fontSize="34" fontWeight="700" mr="20px">My Work.</Text>
                <Text>Here are a couple of my most recent projects I've worked on.</Text>
            </Flex>
            <ScaleIntoView style={{ width: '100%', marginBottom: "2%" }}>
                <SimpleGrid columns={{ sm: 1, md: 2 }} gap="10">
                    {ProjectManager.GetFeaturedProjects.map((m, i) => <SummaryBox {...m} key={i} />)}
                </SimpleGrid>
            </ScaleIntoView>
            <Flex justifyContent={"center"} alignItems="center" py="10" mb="10">
                <Text fontSize={"24"} fontWeight={"500"}>View all projects </Text>
                <Icon fontSize={"24"} as={TiArrowRight} />
            </Flex>
        </Container>
    </Flex>;
}