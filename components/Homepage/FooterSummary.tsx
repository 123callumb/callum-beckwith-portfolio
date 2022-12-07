import { Container, Divider, Flex, Text, Box, Link, VStack, Center, Icon } from "@chakra-ui/react";
import StandoutButton from "../shared/StandoutButton";
import { InternalLinkEnum } from "../../lib/enums/LinkEnum";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import CompanyManager from "../../lib/services/CompanyManager";

export default function FooterSummary() {
    return <Flex w="100%" bgColor="white" py="100px">
        <Container maxW={"4xl"} flexDir={"column"}>
            <Text fontSize="32" fontWeight="700" mb="50px">To Conclude.</Text>
            <Flex>
                <Flex gap={3} w={{ md: "50%" }} alignItems="flex-start" flexDir={"column"}>
                    <Text fontSize={"20"} fontWeight="600">My Timeline</Text>
                    <Text mb="3">To find further information about my previous job positions, the technologies I have used, and the responsibilites I've had, click below to visit a detailed timeline:</Text>
                    <StandoutButton text="View detailed timeline" href={InternalLinkEnum.CVSummary} />
                    <Text fontSize={"20"} fontWeight="600" mt="10">Download CV</Text>
                    <Text mb="3">My CV is a compact version of this portfolio. I try to keep this document as up to date as possible, if you do not believe this is the most recent version, please contact me.</Text>
                    <StandoutButton text="Download" href={InternalLinkEnum.CV_File} newWindow={true} />
                    <Text fontSize={"20"} fontWeight="600" mt="10">Contact Me</Text>
                    <Text mb="3">
                        Reach out to my email:  <Link fontWeight={"600"} href="mailto:123callumb@gmail.com" color={ColourPaletteEnum.Cyan}>123callumb@gmail.com</Link>
                    </Text>
                    <Box fontStyle={"italic"} fontWeight="light" fontSize={"sm"}>
                        If you're interested, you can view the source code for this portfolio site on my GitHub
                        <Link fontWeight={"500"} color={ColourPaletteEnum.Cyan} href="https://github.com/123callumb/callum-beckwith-portfolio" target={"_blank"}> here</Link>.
                        <Divider w="10%" my="2" />
                        As much as I'd love to share all of my code, most repositories on my GitHub are not public for client privacy reasons.
                    </Box>
                </Flex>
                <VerticalTimeline>
                    {CompanyManager.SoftwareJobs.filter(f => f.ShowInTimeline).map((m, i) => <VerticalTimelineElement
                        key={i}
                        icon={<Icon as={m.IconContext} />}
                        iconStyle={{ background: ColourPaletteEnum.Cyan, color: ColourPaletteEnum.White }}
                        date={m.StartDate.toLocaleString('default', { month: 'long', year: 'numeric' }) + " - " + m.EndDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? 'Present'}>
                            {m.CompanyName}
                        </VerticalTimelineElement>)}
                </VerticalTimeline>
            </Flex>
        </Container>
    </Flex>;
}