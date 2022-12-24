import { Container, Divider, Flex, Text, Box, Link, Center, Icon, Spacer } from "@chakra-ui/react";
import { InternalLinkEnum } from "../../lib/enums/LinkEnum";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import CompanyManager from "../../lib/services/CompanyManager";
import { MdLocationPin } from "react-icons/md";
import GradientButton from "../Motion/GradientButton";
import ResourceHelper from "../../lib/helpers/ResourceHelper";

export default function FooterSummary() {
    return <Flex w="100%" bgColor="white" py="100px">
        <Container maxW={"4xl"} flexDir={"column"}>
            <Text fontSize="32" fontWeight="700" mb="50px">To Conclude.</Text>
            <Flex w={"100%"}>
                <Flex gap={3} w={{ md: "50%" }} alignItems="flex-start" flexDir={"column"}>
                    <Text fontSize={"20"} fontWeight="600">My Timeline</Text>
                    <Text mb="3">To find further information about my previous job positions, the technologies I have used, and the responsibilites I've had, click below to visit a detailed timeline:</Text>
                    <GradientButton title="View detailed timeline" href={ResourceHelper.CreateInternalURL(InternalLinkEnum.CVSummary)} />
                    <Text fontSize={"20"} fontWeight="600" mt="10">Download CV</Text>
                    <Text mb="3">My CV is a compact version of this portfolio. I try to keep this document as up to date as possible, if you do not believe this is the most recent version, please contact me.</Text>
                    <GradientButton title="Download" href={ResourceHelper.CreateInternalURL(InternalLinkEnum.CV_File)} />
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
                <Spacer />
                <Flex w={{ md: "40%"}} mt="-36px">
                    <VerticalTimeline lineColor={ColourPaletteEnum.Cyan} layout="1-column-right">
                        {CompanyManager.SoftwareJobs.filter(f => f.ShowInTimeline).map((m, i) => <VerticalTimelineElement
                            key={i}
                            position={"left"}
                            icon={<Icon as={m.IconContext} />}
                            iconStyle={{ background: ColourPaletteEnum.Cyan, color: ColourPaletteEnum.White }}
                            contentStyle={{ padding: '0', boxShadow: 'unset' }}
                            contentArrowStyle={{ backgroundColor: ColourPaletteEnum.Cyan }}>
                            <Flex borderRadius={"4"} boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)" flexDir={"column"} bgColor={ColourPaletteEnum.WhiteAlt} borderTop={`2px solid ${ColourPaletteEnum.Cyan}`} p="2" pl="3">
                                <Box fontSize={"md"} fontWeight="600">{m.Title}</Box>
                                <Box fontSize={"sm"} fontWeight="400">{m.CompanyName}</Box>
                                <Flex mt="2">
                                    <Center>
                                        <Icon as={MdLocationPin} />
                                    </Center>
                                    <Box marginLeft="1" pt="0.5" fontSize="xs" fontWeight={"light"} fontStyle="italic">
                                        {m.Location}
                                    </Box>
                                </Flex>
                            </Flex>
                        </VerticalTimelineElement>)}
                    </VerticalTimeline>
                </Flex>
            </Flex>
        </Container>
    </Flex>;
}