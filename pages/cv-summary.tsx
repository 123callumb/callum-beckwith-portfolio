import { Box, Button, Icon, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/shared/Layout";
import { Job } from "../lib/props/Job_Props";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdGroups, MdAnalytics } from 'react-icons/md/index';
import { FaPencilRuler } from 'react-icons/fa/index';
import { AiOutlineFileSearch } from 'react-icons/ai/index';
import ColourPaletteEnum from "../lib/enums/ColourPaletteEnum";

const jobDetails: Job[] = [
    {
        companyName: 'Audit Partnership Ltd',
        jobRole: 'Software Developer',
        location: 'York, UK - Remote',
        roleDescription: 'Full stack application developer working with large client datasets - skills include .Net Core/Framework,  Node.Js, TypeScript, SQL and more...',
        startDate: new Date(2019, 6, 1, 0, 0, 0, 0),
        relatedIcon: <Icon as={AiOutlineFileSearch} />
    },
    {
        companyName: 'Webur',
        jobRole: 'Freelance Web Designer and Developer',
        location: 'Sheffield, UK',
        roleDescription: 'Duties include handling clients, producing company branding, site designs and full stack web development - skills include PHP, React.JS, Node.Js and more...',
        startDate: new Date(2018, 6, 1, 0, 0, 0, 0),
        relatedIcon: <Icon as={FaPencilRuler} />
    },
    {
        companyName: 'Sheffield Hallam Students Union',
        jobRole: 'Junior Web Developer',
        location: 'Sheffield, UK',
        roleDescription: 'Duties include the creation of multiple web pages (including designs), a blog system and a Welcome Week page.',
        startDate: new Date(2018, 6, 1, 0, 0, 0, 0),
        endDate: new Date(2018, 8, 1, 0, 0, 0, 0),
        relatedIcon: <Icon as={MdGroups} />
    },
    {
        companyName: 'Liberty Trading GB Ltd',
        jobRole: 'Junior Web Application Developer',
        location: 'Barnsley, UK',
        roleDescription: 'Duties include handling stock values across three companies and developing private inventory analysis software. ',
        startDate: new Date(2017, 4, 1, 0, 0, 0, 0),
        endDate: new Date(2017, 8, 1, 0, 0, 0, 0),
        relatedIcon: <Icon as={MdAnalytics} />
    }
]

export default function CVSummary() {
    return <Layout>
        <VerticalTimeline>
            {jobDetails.map((m, i) => <VerticalTimelineElement
                key={i}
                contentStyle={{ boxShadow: 'unset', backgroundColor: ColourPaletteEnum.White }}
                icon={m.relatedIcon}
                iconStyle={{ background: ColourPaletteEnum.Cyan, color: ColourPaletteEnum.White }}
                date={<Text mt='0' color={ColourPaletteEnum.White}>
                    {m.startDate.toLocaleString('default', { month: 'long', year: 'numeric' })} - {m.endDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? 'Present'}
                </Text>}
            >
                <VStack spacing={2} alignItems="start">
                    <Box fontSize="xl" fontWeight="500">{m.jobRole}</Box>
                    <Box fontSize="md" fontWeight="500">{m.companyName}</Box>
                    <Box fontSize="sm">{m.roleDescription}</Box>
                </VStack>
            </VerticalTimelineElement>)}
        </VerticalTimeline>
        <a href="/res/CallumBeckwith_LatestCV.pdf" target="_blank">
            <Button colorScheme="blueShade2">Download CV</Button>
        </a>
    </Layout>
}