import { FaArrowCircleRight } from "react-icons/fa";
import ResourceHelper from "../helpers/ResourceHelper";
import ResourceEnum from "../enums/ResourceEnum";
import { InternalLinkEnum } from "../enums/LinkEnum";
import { Flex, Icon, Text } from '@chakra-ui/react';

export default class ProjectManager {
    public static GetProjects: { imgSrc?: string, name: string | JSX.Element, custom?: JSX.Element, forceHeight?: string, slug: string }[] = [
        {
            name: <Text fontSize="26" textAlign="center">Easy<b>Learn</b></Text>,
            forceHeight: "40px",
            slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_EasyLearn)
        },
        {
            name: 'Webur',
            imgSrc: ResourceHelper.CreateResourceURL(ResourceEnum.White_Logo_Webur),
            forceHeight: '60px',
            slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_Webur)
        },
        {
            name: 'Cruise Addicts',
            imgSrc: ResourceHelper.CreateResourceURL(ResourceEnum.White_Logo_CruiseAddicts),
            forceHeight: "120px",
            slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_CruiseAddicts)
        },
        {
            name: 'Forensic Neuroscience',
            imgSrc: ResourceHelper.CreateResourceURL(ResourceEnum.White_Logo_ForensicNeurosciences),
            slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_ForensicNeurosciences)
        },
        {
            name: 'Sheffield Hallam Students\' Union',
            imgSrc: ResourceHelper.CreateResourceURL(ResourceEnum.White_Logo_SHU),
            slug: ResourceHelper.CreateInternalURL(InternalLinkEnum.Work_SHU)
        },
        {
            name: 'Cv summary',
            custom: <Flex>
                <Text fontSize="24">CV Summary</Text>
                <Icon ml="3" mt="14px" as={FaArrowCircleRight} />
            </Flex>,
            forceHeight: "40px",
            slug: '../cv-summary'
        }
    ];
}