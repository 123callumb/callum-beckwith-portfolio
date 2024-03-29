import { Flex, HStack, VStack, Text, Icon, Box } from "@chakra-ui/react";
import FeaturedProject from "../../lib/props/FeaturedProject";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { TiArrowRight } from "react-icons/ti";
import NextLink from 'next/link';
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import SlideInBox from "../Motion/SlideInBox";

export default function SummaryHorizontalBox(props: FeaturedProject) {
    return <SlideInBox display="flex" flexDir={{ md: "row", base: "column" }} bgColor={"white"} border={`4px solid white`} borderLeft={`6px solid ${ColourPaletteEnum.Cyan}`} borderRightRadius={4} pl={{ base: "0", md: "2" }} boxShadow="1px 2px 1px rgba(40, 40, 40, 0.05)">
        <Box bgColor={ColourPaletteEnum.LightBlue} borderRadius="2" borderLeft={"4px solid white"} p="4" pb="0" alignSelf={"center"} width={{ base: "100%", md: "270px" }}>
            <img width={"100%"} src={ResourceHelper.CreateResourceURL(props.featureImageURL)} alt={props.name + " feature image"} />
        </Box>
        <VStack w="100%" p={2} pl="4" alignItems={"start"} flex="1" gap={{ base: 1, md: 0 }} mt={{ base: 2, md: 0 }}>
            <Text fontSize={{ base: "26", md: "22" }} fontWeight="600" w="100%">{props.name}</Text>
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
            <Flex
                fontWeight={"500"}
                color={ColourPaletteEnum.DarkBlue}
                fontStyle={"italic"}
                justifyContent={{ base: "right", md: "left" }}
                w="100%"
                pr={{ base: 3, md: 0 }}>
                <Flex className="linkAnimation"                 alignItems={"center"}>
                    <NextLink href={ResourceHelper.CreateInternalURL(props.slug)}>
                        View Details
                    </NextLink>
                    <Icon as={TiArrowRight} />
                </Flex>
            </Flex>
        </VStack>
    </SlideInBox>
}