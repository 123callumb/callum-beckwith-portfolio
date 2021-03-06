import { Box, Center, Flex, Icon, LinkBox, SimpleGrid, Text, LinkOverlay } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";
import style from '../../styles/Components/Projects.module.scss';
import NextLink from "next/link";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import { InternalLinkEnum } from "../../lib/enums/LinkEnum";

const projects: { imgSrc?: string, name: string | JSX.Element, custom?: JSX.Element, forceHeight?: string, slug: string }[] = [
    {
        name: <Text fontSize="26" textAlign="center">Easy<b>Learn</b></Text>,
        forceHeight: "40px",
        slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_EasyLearn)
    },
    {
        name: 'Webur',
        imgSrc: ResourceHelper.CreateResourceURL(ResourceEnum.White_Logo_Webur),
        forceHeight: '60px',
        slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_Webur)
    },
    {
        name: 'Cruise Addicts',
        imgSrc: ResourceHelper.CreateResourceURL(ResourceEnum.White_Logo_CruiseAddicts),
        forceHeight: "120px",
        slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_CruiseAddicts)
    },
    {
        name: 'Forensic Neuroscience',
        imgSrc: ResourceHelper.CreateResourceURL(ResourceEnum.White_Logo_ForensicNeurosciences),
        slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_ForensicNeurosciences)
    },
    {
        name: 'Sheffield Hallam Students\' Union',
        imgSrc: ResourceHelper.CreateResourceURL(ResourceEnum.White_Logo_SHU),
        slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_SHU)
    },
    {
        name: 'Cv summary',
        custom: <Flex>
            <Text fontSize="24">CV Summary</Text>
            <Icon ml="3" mt="14px" as={FaArrowCircleRight} />
        </Flex>,
        forceHeight: "40px",
        slug: '../cv-summary'
    }
];
const desktopColourAlternation = (i: number) => (i % 4) > 1 ? (i % 2 ? "blueShade2" : "blueShade1") : (i % 2 ? "blueShade1" : "blueShade2");
const mobileColourAlternation = (i: number) => i % 2 ? "blueShade2" : "blueShade1";

export default function Projects() {
    return <SimpleGrid w="100%" color="whiteShade" columns={{ md: 2, sm: 1, base: 1 }}>
        {projects.map((m, i) => <LinkBox key={i}>
            <Center bgColor={{ md: desktopColourAlternation(i), base: mobileColourAlternation(i) }} height="400px" className={style.projectItem}>
                <NextLink href={m.slug} passHref>
                    <LinkOverlay>
                        <Box height={m.forceHeight || '90px'} className={style.projectContent}>
                            {m.imgSrc ? <embed src={m.imgSrc} height="100%" draggable="false" /> : m.custom || m.name}
                            {!m.custom && <Box opacity="0" className={style.projectTitle} mt="8" fontSize="sm">
                                <Text>View project details</Text>
                                <Icon ml="2" mt="2" as={FaArrowCircleRight} />
                            </Box>}
                        </Box>
                    </LinkOverlay>
                </NextLink>
            </Center>
        </LinkBox>)}
    </SimpleGrid>
}