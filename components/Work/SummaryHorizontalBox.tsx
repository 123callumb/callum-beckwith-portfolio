import { Flex, HStack, VStack, Text, Icon, Box } from "@chakra-ui/react";
import FeaturedProject from "../../lib/props/FeaturedProject";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { TiArrowRight } from "react-icons/ti";
import NextLink from 'next/link';
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import SlideInBox from "../Motion/SlideInBox";

export default function SummaryHorizontalBox(props: FeaturedProject) {
    return <SlideInBox display="flex" flexDir={{ md: "row", base: "column" }} bgColor={"white"} border={`4px solid white`}>
        <Box bgColor={ColourPaletteEnum.LightBlue} borderRadius="2" borderLeft={"4px solid white"} p="4" pb="0" alignSelf={"center"} width={{ base: "100%", md: "270px"}}>
            <img width={"100%"} src={props.featureImageURL} alt={props.name + " feature image"} />
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
            <Flex fontWeight={"500"} color={ColourPaletteEnum.DarkBlue} fontStyle={"italic"} alignItems="center" className="linkAnimation">
                <NextLink href={ResourceHelper.CreateInternalURL(props.slug)}>
                    View Details
                </NextLink>
                <Icon as={TiArrowRight} />
            </Flex>
        </VStack>
    </SlideInBox>
}