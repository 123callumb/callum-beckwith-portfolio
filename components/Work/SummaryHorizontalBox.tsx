import { Flex, HStack, VStack, Text, Icon, Box, Divider, Center } from "@chakra-ui/react";
import FeaturedProject from "../../lib/props/FeaturedProject";
import FramerBox from "../Motion/FramerBox";
import Image from 'next/image';
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { TiArrowRight } from "react-icons/ti";

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
        }} display="flex" flexDir={{md: "row", base: "column" }} viewport={{ once: true }} bgColor={"white"} border={`4px solid white`}>
        <Box bgColor={ColourPaletteEnum.LightBlue} borderRadius="2" borderLeft={"4px solid white"} p="4" pb="0" alignSelf={"center"}>
            <Box height={"200px"} width={{base: "100%" , md:"200px"}} pos={"relative"}>
                <Image layout="fill" src={`/${props.featureImageURL}`} alt={props.name + " feature image"} />
            </Box>
        </Box>
        <VStack w="100%" p={2} pl="4" alignItems={"start"} flex="1">
            <Text fontSize="22" fontWeight="600" w="100%">{props.name}</Text>
            <Text size={"sm"} fontWeight="300" w="100%">{props.desc}</Text>
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
            <Flex fontWeight={"500"} color={ColourPaletteEnum.DarkBlue} fontStyle={"italic"} alignItems="center">
                <Text>
                    View Details
                </Text>
                <Icon as={TiArrowRight} />
            </Flex>
        </VStack>
    </FramerBox>
}