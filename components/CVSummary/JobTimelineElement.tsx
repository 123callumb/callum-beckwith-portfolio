import React from "react";
import { Job } from "../../lib/props/Job_Props";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { Box, VStack, Text, Icon, Center } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

export default class JobTimelineElement extends React.Component<Job> {
    render() {
        return <VerticalTimelineElement
            key={this.props.jobIndex}
            contentStyle={{ boxShadow: 'unset', backgroundColor: ColourPaletteEnum.White }}
            icon={this.props.relatedIcon}
            iconStyle={{ background: ColourPaletteEnum.Blue, color: ColourPaletteEnum.White }}
            date={<Text mt='0' color={{ lg: ColourPaletteEnum.White, md: 'black' }}>
                {this.props.startDate.toLocaleString('default', { month: 'long', year: 'numeric' })} - {this.props.endDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? 'Present'}
            </Text>}
        >
            <VStack spacing={2} alignItems="start">
                <Box fontSize="xl" fontWeight="500">{this.props.jobRole}</Box>
                <Box fontSize="md" fontWeight="500">{this.props.companyName}</Box>
                <Center>
                    <Icon as={MdLocationPin} />
                    <Box marginLeft="2" fontSize="sm" fontStyle="italic">
                        {this.props.location}
                    </Box>
                </Center>
                {this.props.roleDescription && <Box fontSize="sm">{this.props.roleDescription}</Box>}
            </VStack>
        </VerticalTimelineElement>
    }
}