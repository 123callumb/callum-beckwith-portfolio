import { Box, Center, Flex, Icon, LinkBox, SimpleGrid, Text, LinkOverlay } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";
import style from '../../styles/Components/Projects.module.scss';
import NextLink from "next/link";

const projects: { imgSrc?: string, name: string | JSX.Element, custom?: JSX.Element, forceHeight?: string, slug: string }[] = [
    {
        name: <Text fontSize="26" textAlign="center">Easy<b>Learn</b></Text>,
        forceHeight: "40px",
        slug: 'easy-learn'
    },
    {
        name: 'Webur',
        imgSrc: "/svg/webur-white-logo.svg",
        forceHeight: '60px',
        slug: 'webur'
    },
    {
        name: 'Cruise Addicts',
        imgSrc: "/img/ca-white-logo.png",
        forceHeight: "120px",
        slug: 'cruise-addicts'
    },
    {
        name: 'Forensic Neuroscience',
        imgSrc: "/img/fn-white-logo.png",
        slug: 'forensic-neurosciences'
    },
    {
        name: 'Sheffield Hallam Students\' Union',
        imgSrc: "/img/shu-white-logo.png",
        slug: 'sheffield-hallam-students-union'
    },
    {
        name: 'View all projects',
        custom: <Flex>
            <Text fontSize="24">View all projects</Text>
            <Icon ml="3" mt="14px" as={FaArrowCircleRight} />
        </Flex>,
        forceHeight: "40px",
        slug: 'easy-learn'
    }
];

export default () => <SimpleGrid w="100%" color="whiteShade" columns={{ md: 2, sm: 1, base: 1 }}>
    {projects.map((m, i) => <LinkBox key={i}>
        <Center bgColor={(i % 4) > 1 ? (i % 2 ? "blueShade2" : "blueShade1") : (i % 2 ? "blueShade1" : "blueShade2")} height="400px" className={style.projectItem}>
            <NextLink href={`/work/${m.slug}`} passHref>
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