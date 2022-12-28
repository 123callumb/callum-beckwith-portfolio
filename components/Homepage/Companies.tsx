import { Container, Flex, Text, Box, Image, HStack, Tooltip, Center, TooltipProps, Icon, Divider } from "@chakra-ui/react";
import React from "react";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import { Job } from "../../lib/props/Job";
import CompanyManager from "../../lib/services/CompanyManager";
import GrowBox from "../Motion/GrowBox";

export default function Companies() {

    const GetTooltipProps = function (key: React.Key, job: Job): Partial<TooltipProps> {
        return ({
            key,
            borderRadius: "5px",
            bgColor: "white",
            borderTop: `2px solid ${ColourPaletteEnum.Cyan}`,
            placement: "top",
            color: "black",
            hasArrow: true,
            boxShadow: "1px 2px 0px rgba(40, 40, 40, 0.05)",
            padding: "3",
            label: <Box>
                <Flex>
                    <Center>
                        <Icon as={job.IconContext} p="2" boxSize={"10"} bgColor={ColourPaletteEnum.Cyan} borderRadius="50%" color={"white"} />
                    </Center>
                    <Box pl={"4"}>
                        <Text fontSize={16} fontWeight="700">{job.CompanyName}</Text>
                        <Text mt="1" fontWeight={"500"}>I worked with {job.CompanyName} as a {job.Title}!</Text>
                    </Box>
                </Flex>
                <Divider my="3" />
                <Text mt="2" fontStyle={"italic"} fontWeight="400" fontSize={"xs"}>
                    View my job timeline to learn more about my work with this company.
                </Text>
            </Box>
        });
    }

    const CompanyBox = function (job: Job, key: React.Key): JSX.Element {
        return <Tooltip {...GetTooltipProps(key, job)}>
            <Flex
                cursor={"pointer"}
                bgColor={"white"}
                borderRadius="4"
                w="300px"
                h="120px"
                alignItems={"center"}
                justifyContent={"center"}
                boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)"
                m={{ base: "2", lg: "0" }}>
                <Image h="60px" src={ResourceHelper.CreateResourceURL(job.LogoUrl)} />
            </Flex>
        </Tooltip>;
    }

    return <Flex w="100%" py="100px" flexDir={"column"}>
        <Container maxW={"4xl"}>
            <Flex flexDir={"column"} mb="50px">
                <Text fontSize="32" fontWeight="700">Who I've worked with.</Text>
            </Flex>
        </Container>
        <Flex flexDir="column" display={{ base: "none", lg: "flex" }}>
            <GrowBox>
                <HStack w="100%" justifyContent={"center"} gridGap={2}>
                    {CompanyManager.SoftwareJobs.slice(0, 2).map(CompanyBox)}
                </HStack>
            </GrowBox>
            <GrowBox>
                <HStack w="100%" justifyContent={"center"} my="4" gridGap={2}>
                    {CompanyManager.SoftwareJobs.slice(2, 5).map(CompanyBox)}
                </HStack>
            </GrowBox>
            <GrowBox>
                <HStack w="100%" justifyContent={"center"} gridGap={2}>
                    {CompanyManager.SoftwareJobs.slice(5, 7).map(CompanyBox)}
                </HStack>
            </GrowBox>
        </Flex>
        <Flex flexDir={"column"} display={{ base: "flex", lg: "none" }} justifyContent={"center"} alignItems={"center"}>
            {CompanyManager.SoftwareJobs.slice(0, 7).map((m, i) => <GrowBox>{CompanyBox(m, i)}</GrowBox>)}
        </Flex>
    </Flex>;
}