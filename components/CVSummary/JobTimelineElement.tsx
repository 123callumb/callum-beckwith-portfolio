import React from "react";
import { Job } from "../../lib/props/Job";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { Box, VStack, Text, Icon, Center, Flex } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

export default function JobTimelineElement(props: Job) {
    return <VerticalTimelineElement
        icon={<Icon as={props.IconContext} />}
        iconStyle={{ background: ColourPaletteEnum.Cyan, color: ColourPaletteEnum.White }}
        contentStyle={{ padding: '0', boxShadow: 'unset' }}
        contentArrowStyle={{ backgroundColor: ColourPaletteEnum.Cyan }}
        date={props.StartDate.toLocaleString('default', { month: 'long', year: 'numeric' }) + " - " + (props.EndDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? 'Present')}>
        <Flex borderRadius={"4"} boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)" flexDir={"column"} bgColor={"white"} borderTop={`2px solid ${ColourPaletteEnum.Cyan}`} p="2" pl="3">
            <Box fontSize="xl" fontWeight="600">{props.Title}</Box>
            <Box fontSize="md" fontWeight="400">{props.CompanyName}</Box>
            <Flex my={"2"}>
                <Icon as={MdLocationPin} />
                <Box marginLeft="2" fontSize="sm" fontStyle="italic">
                    {props.Location}
                </Box>
            </Flex>
            {props.Description && <Box fontSize="sm">{props.Description}</Box>}
        </Flex>
    </VerticalTimelineElement>;
}