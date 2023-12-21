import { Box, Container, Flex, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
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

export default function CVSummary() {
    return <Layout breadcrumb="Timeline" useCircuit={true}>
        <Box textAlign="center" pt={{ base: "4%", md: "10%"}}>
            <Container maxW="4xl">
                <VStack
                    bgColor={"white"}
                    borderBottom={`6px solid ${ColourPaletteEnum.Cyan}`}
                    borderTop={`4px solid black`}
                    p="4"
                    pb="6"
                    borderRadius={"4"}
                    mx={{ base: "5", md: 0}}
                    boxShadow="1px 0px 10px 1px rgba(40, 40, 40, 0.1)"
                    alignItems={"start"}>
                    <Text fontSize={"20"} fontWeight={"600"}>About me:</Text>
                    <Text fontSize={"md"} textAlign="left">
                        I&apos;m a full-stack software developer with multiple
                        years of programming experience that engages with
                        market-leading technologies to deliver creative
                        and effective business solutions. 
                        <Box my="2"/>
                        I have a Bachelor of Science with First Class
                        Honours in Computer Science and currently,
                        work as a Senior Software Developer for Audit
                        Partnership. 
                        <Box my="2" />
                        I build and maintain data-heavy software used 
                        to audit some of the largest companies in the
                        UK and USA. 
                        <Box my="2" />
                        Prior to working in the finance sector, I ran
                        a freelance design and development partnership,
                        where I produced branding, marketing, and online
                        software solutions for a wide range of clients.
                    </Text>
                    <Flex w={"100%"} justifyContent={"center"} alignItems={"center"} flexDir="column" pt="5">
                        <Text fontStyle={"italic"} fontWeight="light" fontSize={"sm"}>For further information you can access my cv here:</Text>
                        <Flex mt="4">
                            <GradientButton title="Click to Download CV" href={ResourceHelper.CreateResourceURL(ResourceEnum.CV_PDF)} customIcon={FaFileDownload} />
                        </Flex>
                    </Flex>
                </VStack>
            </Container>
        </Box>
        <Container maxW="5xl" pb="8" px={{ base: "6", '2xl': "14" }}>
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