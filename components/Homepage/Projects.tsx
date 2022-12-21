import { Flex, Text, Container, Icon, Center } from "@chakra-ui/react";
import ProjectManager from "../../lib/services/ProjectManager";
import SummaryBox from "../Work/SummaryBox";
import { TiArrowRight } from 'react-icons/ti/index';
import { m, Variants } from 'framer-motion';
import FramerBox from "../Motion/FramerBox";
import NextLink from "next/link";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import { InternalLinkEnum } from "../../lib/enums/LinkEnum";

export default function Projects() {
    const projContainer: Variants = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2,
                delay: 0.1,
                bounce: 0.4,
                type: "spring"
            }
        },
        hidden: {
            opacity: 0
        }
    };

    const projItem: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    };

    return <Flex pt={"120px"} bgColor="white" w="100%">
        <Container maxW={"4xl"} flexDirection={"column"} w="100%">
            <Flex alignItems={"baseline"} mb="60px">
                <Text fontSize="34" fontWeight="700" mr="20px">My Work.</Text>
                <Text>Here are a couple of my most recent projects I've worked on.</Text>
            </Flex>
            <Flex as={m.div} variants={projContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} justifyContent="space-between" mb="60px">
                {ProjectManager.GetFeaturedProjects.slice(0, 2).map((x, i) => <FramerBox key={i} variants={projItem}>
                    <SummaryBox {...x} />
                </FramerBox>)}
            </Flex>
            <Flex as={m.div} variants={projContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} justifyContent="space-between">
                {ProjectManager.GetFeaturedProjects.slice(2, 4).map((x, i) => <FramerBox key={i} variants={projItem}>
                    <SummaryBox {...x} />
                </FramerBox>)}
            </Flex>
            <Flex justifyContent={"center"} alignItems="center" py="10" my="10">
                <Flex flexDir={"row"} fontSize={"24"} fontWeight={"500"} className="linkAnimation">
                    <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Work)}>
                        <Text>View all my work</Text>
                    </NextLink>
                    <Center pt={"1.5"}>
                        <Icon as={TiArrowRight} />
                    </Center>
                </Flex>
            </Flex>
        </Container>
    </Flex>;
}