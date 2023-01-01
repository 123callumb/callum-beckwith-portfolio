import { VStack, Box, Text, HStack, Icon } from "@chakra-ui/react";
import FeaturedProject from "../../lib/props/FeaturedProject";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import React from "react";
import GradientLink from "../Motion/GradientLink";
import ResourceHelper from "../../lib/helpers/ResourceHelper";

export default function SummaryBox(props: FeaturedProject) {
    return <VStack w="360px" alignItems={"center"} justifyContent="center">
        <Box bgColor={ColourPaletteEnum.LightBlue} borderRadius="2" p="4" pb="0" w="100%">
            <img width="100%" src={ResourceHelper.CreateResourceURL(props.featureImageURL)} />
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
            <GradientLink title="View Details" href={props.slug} />
        </VStack>
    </VStack>;
}