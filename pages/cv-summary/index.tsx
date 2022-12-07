import { Box, Button, Container, Icon, Link, Text, VStack } from "@chakra-ui/react";
import Layout from "../../components/shared/Layout";
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import JobTimelineElement from "../../components/CVSummary/JobTimelineElement";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import CompanyManager from "../../lib/services/CompanyManager";

export default function CVSummary() {
    return <Layout>
        <Box textAlign="center" py="40">
            <Container maxW="6xl" color={ColourPaletteEnum.White}>
                <Text mb="8" fontSize="xl">
                    You can get a local copy of my cv here.
                </Text>
                <Link href={ResourceHelper.CreateResourceURL(ResourceEnum.CV_PDF)} target="_blank">
                    <Button bgColor="cyanShade1" color={ColourPaletteEnum.White}>Download CV</Button>
                </Link>
            </Container>
        </Box>
        <Box bgColor="blueShade1">
            <Container maxW="6xl" py="8" pb="12">
                <Box textAlign={{ lg: 'center', md: 'left' }} mb="4" fontWeight="500" fontSize="lg" color={ColourPaletteEnum.White}>
                    <Text>My journey</Text>
                </Box>
                <VerticalTimeline>
                    {CompanyManager.SoftwareJobs.filter(f => f.ShowInTimeline).map((m, i) => <JobTimelineElement key={i} {...m} />)}
                </VerticalTimeline>
                <Text my="6" color={ColourPaletteEnum.White} fontWeight="500" fontSize="md" textAlign={{ lg: 'center', md: 'left' }}>
                    Non tech related
                </Text>
                <VerticalTimeline>
                    {CompanyManager.NonSoftwareJobs.filter(f => f.ShowInTimeline).map((m, i) => <JobTimelineElement key={i} {...m} />)}
                </VerticalTimeline>
            </Container>
        </Box>
    </Layout>
}