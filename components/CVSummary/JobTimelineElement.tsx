import React from "react";
import { Job } from "../../lib/props/Job";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { Box, VStack, Text, Icon, Center } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

export default class JobTimelineElement extends React.Component<Job> {
    render() {
        return <VerticalTimelineElement
            contentStyle={{ boxShadow: 'unset', backgroundColor: ColourPaletteEnum.White }}
            icon={<Icon as={this.props.IconContext} />}
            iconStyle={{ background: ColourPaletteEnum.Blue, color: ColourPaletteEnum.White }}
            date={this.props.StartDate.toLocaleString('default', { month: 'long', year: 'numeric' }) + " - " +this.props.EndDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? 'Present'}>
            <VStack spacing={2} alignItems="start">
                <Box fontSize="xl" fontWeight="500">{this.props.Title}</Box>
                <Box fontSize="md" fontWeight="500">{this.props.CompanyName}</Box>
                <Center>
                    <Icon as={MdLocationPin} />
                    <Box marginLeft="2" fontSize="sm" fontStyle="italic">
                        {this.props.Location}
                    </Box>
                </Center>
                {this.props.Description && <Box fontSize="sm">{this.props.Description}</Box>}
            </VStack>
        </VerticalTimelineElement>
    }
}