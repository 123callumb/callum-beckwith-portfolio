import { Flex, HStack, VStack, Text, Icon, Box, Divider } from "@chakra-ui/react";
import FeaturedProject from "../../lib/props/FeaturedProject";
import FramerBox from "../Motion/FramerBox";
import Image from 'next/image';
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";

export default function SummaryHorizontalBox(props: FeaturedProject) {
    return <FramerBox whileInView={{
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.1,
            bounce: 0.4,
            type: "spring"
        }
    }}
        initial={{
            x: 20,
            opacity: 0
        }} display="flex" flexDir={"row"} viewport={{ once: true }} bgColor={"white"} border={`6px solid white`}>
        <Box bgColor={ColourPaletteEnum.LightBlue} borderRadius="2" p="4" pb="0" alignSelf={"center"}>
            <Box height={"200px"} width={"200px"} pos={"relative"}>
                <Image layout="fill" src={`/${props.featureImageURL}`} alt={props.name + " feature image"} />
            </Box>
        </Box>
        <VStack w="100%" p={2} pl="4" alignItems={"start"} flex="1">
            <Text fontSize="22" fontWeight="600" w="100%">{props.name}</Text>
            <Text size={"sm"} fontWeight="300" w="100%">{props.desc}</Text>
            <Flex>
                <HStack w="100%">{props.technologyUsed.map((m, i) =>
                    <Icon
                        key={i}
                        as={m}
                        boxSize={9}
                        color="white"
                        bgColor={"#68D8C2"}
                        p="6px"
                        borderRadius={"6"}
                    />)}
                </HStack> 
                <Divider orientation="vertical" mx="3" />
                <HStack w="100%">{props.languagesUsed.map((m, i) =>
                    <Icon
                        key={i}
                        as={m}
                        boxSize={9}
                        color="white"
                        bgColor={"#68D8C2"}
                        p="6px"
                        borderRadius={"6"}
                    />)}
                </HStack>
            </Flex>
            <Flex flexDir={"column"} pt={2}>
                <Text px="4" fontWeight={"600"}>View Details</Text>
                <Box
                    mt="2px"
                    height={"4px"}
                    w="100%"
                    background={"linear-gradient(to right, #589EA6 0%, #68D8C3  61%, #589EA6  100%)"}
                    boxShadow="2px 2px 3px rgba(0, 0, 0, 0.1)"></Box>
            </Flex>
        </VStack>
    </FramerBox>
}