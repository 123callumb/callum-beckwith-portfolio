import { Box, Container, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import Layout from "../../components/shared/Layout";
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import JobTimelineElement from "../../components/CVSummary/JobTimelineElement";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import CompanyManager from "../../lib/services/CompanyManager";
import GradientButton from "../../components/Motion/GradientButton";
import { FaFileDownload } from "react-icons/fa";
import { GrDocumentUser } from 'react-icons/gr/index';

export default function CVSummary() {
    return <Layout breadcrumb="Timeline" useCircuit={true}>
        <Box textAlign="center" pt="10%">
            <Container maxW="4xl">
                <VStack
                    bgColor={"white"}
                    borderBottom={`6px solid ${ColourPaletteEnum.Cyan}`}
                    borderTop={`4px solid black`}
                    p="4"
                    pb="6"
                    borderRadius={"4"}
                    boxShadow="1px 0px 10px 1px rgba(40, 40, 40, 0.1)">
                    <Icon as={GrDocumentUser} boxSize="10" m="4" />
                    <Text fontWeight={"500"} fontSize="md">
                        You can get a local copy of my cv here.
                    </Text>
                    <Flex justifyContent={"center"} alignContent={"center"} pt="5">
                        <GradientButton title="Click to download" href={ResourceHelper.CreateResourceURL(ResourceEnum.CV_PDF)} customIcon={FaFileDownload} />
                    </Flex>

                </VStack>
            </Container>
        </Box>
        <Container maxW="5xl" pb="8" px={{ base: "6", '2xl': "14"}}>
            <VerticalTimeline lineColor={ColourPaletteEnum.Cyan} className="timeline-extra">
                {CompanyManager.SoftwareJobs.filter(f => f.ShowInTimeline).map((m, i) => <JobTimelineElement key={i} {...m} />)}
            </VerticalTimeline>
            <Text my="6" fontWeight="600" fontSize="md" textAlign={{ md: 'center', base: 'left' }}>
                Non tech related
            </Text>
            <VerticalTimeline lineColor={ColourPaletteEnum.Cyan}>
                {CompanyManager.NonSoftwareJobs.filter(f => f.ShowInTimeline).map((m, i) => <JobTimelineElement key={i} {...m} />)}
            </VerticalTimeline>
        </Container>
    </Layout>;
}