import { Container, VStack } from "@chakra-ui/react";
import SummaryHorizontalBox from "../../components/Work/SummaryHorizontalBox";
import Layout from "../../components/shared/Layout";
import ProjectManager from "../../lib/services/ProjectManager";

export default function Work() {
    return <Layout breadcrumb="Work">
        <Container maxW={"4xl"} pt="10">
            <VStack rowGap={"2"}>
                {ProjectManager.GetFeaturedProjects.map((m, i) => <SummaryHorizontalBox {...m} key={i} />)}
            </VStack>
        </Container>
    </Layout>;
}