import { Box, Button, Container, Icon, Link, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/shared/Layout";
import { Job } from "../lib/props/Job_Props";
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdGroups, MdAnalytics, MdFoodBank } from 'react-icons/md/index';
import { FaHotel, FaPencilRuler } from 'react-icons/fa/index';
import { AiOutlineFileSearch } from 'react-icons/ai/index';
import ColourPaletteEnum from "../lib/enums/ColourPaletteEnum";
import JobTimelineElement from "../components/CVSummary/JobTimelineElement";

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

const nonTechJobDetails: Job[] = [
    {
        companyName: 'Wetherby Whaler',
        jobRole: 'Waiter',
        location: 'Wakefield, UK',
        startDate: new Date(2016, 6, 1, 0, 0, 0, 0),
        endDate: new Date(2016, 8, 1, 0, 0, 0, 0),
        relatedIcon: <Icon as={MdFoodBank} />
    },
    {
        companyName: 'Cedar Court Hotel Wakefield',
        jobRole: 'Conference and Banqueting',
        location: 'Wakefield, UK',
        startDate: new Date(2014, 11, 1, 0, 0, 0, 0),
        endDate: new Date(2016, 1, 1, 0, 0, 0, 0),
        relatedIcon: <Icon as={FaHotel} />
    }
]

export default function CVSummary() {
    return <Layout>
        <Box textAlign="center" py="40">
            <Container maxW="6xl" color={ColourPaletteEnum.White}>
                <Text mb="8" fontSize="xl">
                    You can get a local copy of my cv here.
                </Text>
                <Link href="/res/CallumBeckwith_LatestCV.pdf" target="_blank">
                    <Button bgColor="cyanShade1" color={ColourPaletteEnum.White}>Download CV</Button>
                </Link>
            </Container>
        </Box>
        <Box bgColor="blueShade1">
            <Container maxW="6xl" py="8" pb="12">
                <Box textAlign={{ lg: 'center', md: 'left' }} mb="4" fontWeight="500" fontSize="lg" color={ColourPaletteEnum.White}>
                    <Text>My journey</Text>
                </Box>
                <VerticalTimeline>
                    {jobDetails.map((m, i) => <JobTimelineElement key={i} {...m} />)}
                </VerticalTimeline>
                <Text my="6" color={ColourPaletteEnum.White} fontWeight="500" fontSize="md" textAlign={{ lg: 'center', md: 'left' }}>
                    Non tech related
                </Text>
                <VerticalTimeline>
                    {nonTechJobDetails.map((m, i) => <JobTimelineElement key={i} {...m} />)}
                </VerticalTimeline>
            </Container>
        </Box>
    </Layout>
}