import { VStack, Box, Text, HStack, Icon, Flex } from "@chakra-ui/react";
import FeaturedProject from "../../lib/props/FeaturedProject";
import FramerBox from "../Motion/FramerBox";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";

export default function SummaryBox(props: FeaturedProject) {
    return <VStack w="360px" alignItems={"center"} justifyContent="center">
        <Box bgColor={ColourPaletteEnum.LightBlue} borderRadius="2" p="4" pb="0" w="100%">
            <img width="100%" src={props.featureImageURL} />
        </Box>
        <VStack w="100%" p={2} alignItems={"start"}>
            <Text fontSize="22" fontWeight="600" w="100%">{props.name}</Text>
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
            <Text size={"sm"} fontWeight="300" w="100%">{props.desc}</Text>
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
    </VStack>;
}