import { FaArrowCircleRight } from "react-icons/fa";
import ResourceHelper from "../helpers/ResourceHelper";
import ResourceEnum from "../enums/ResourceEnum";
import { InternalLinkEnum } from "../enums/LinkEnum";
import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import Summary_Props from "../props/Summary_Props";
import { SiCsharp, SiCss3, SiDocker, SiDotnet, SiHtml5, SiJavascript, SiJquery, SiMysql, SiNextdotjs, SiPhp, SiPhpmyadmin, SiReact, SiSass, SiTypescript, SiWebpack } from "react-icons/si";
import ColourPaletteEnum from "../enums/ColourPaletteEnum";

export default class ProjectManager {
    public static GetProjects: { imgSrc?: string, name: string | JSX.Element, custom?: JSX.Element, forceHeight?: string, slug: string }[] = [
        {
            name: <Text fontSize="26" textAlign="center">You<b>Learn</b></Text>,
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

    public static GetFeaturedProjects: Summary_Props[] = [
        {
            name: "YouLearn",
            desc: "YouLearn delivers learning experiences for users to get to grips with using online services and mobile apps. EasyLearn places the users in guided sandbox environments where they can learn through realistic scenarios and experiences.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_EasyLearn),
            colours: ["#E4F2EE", "#BAD9C8", "#407352", "#68A67E", "#3B5946"],
            technologyUsed: [SiDotnet, SiReact, SiWebpack, SiMysql, SiDocker, SiNextdotjs],
            languagesUsed: [SiCsharp, SiTypescript, SiJavascript, SiSass],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_EasyLearn)
        },
        {
            name: "Webur",
            desc: "Webur have delivered websites, online software, and branding for multiple clients over the last several years. There are a couple of projects showcased on my portfolio associated with Webur. The work I&apos;ve done with Webur, the diversity of projects delivered, and the client experience gained is something I am very proud of.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_Webur),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_Webur),
            colours: ["#F15D5E", "#2A2B2A", "#FAFAFA", "#393939"],
            link:"https://webur.co.uk",
            technologyUsed: [SiReact, SiWebpack, SiPhpmyadmin, SiMysql],
            languagesUsed: [SiPhp, SiJavascript, SiCss3, SiHtml5],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_Webur)
        },
        {
            name:"Sheffield Hallam Students' Union",
            desc:"After working for Sheffield Hallam Students Union for a period of time, they were quick to contact my freelance design and development partnership, Webur, throughout my time at university. Although there are multiple projects that have been worked on with Sheffield Hallam Students' Union, the one showcased below is a personal favourite of mine. These are the deliverables produced for their 2018 Welcome Week, which is viewed by the majority of people starting at Sheffield Hallam university.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_SHU),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_SHU),
            colours:["#E50071", "#EA8C04", "#1275BB", "#00ADCD"],
            technologyUsed:[SiJquery],
            languagesUsed:[SiJavascript, SiCss3, SiHtml5],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_SHU)
        },
        {
            name:"Cruise Addicts",
            desc:"Cruise Addicts Magazine is a free online Magazine subscription company that provides their fans with the latest and greatest Cruise content.The  development for Cruise Addicts was completed by my freelance design and development partnership, Webur. Webur delivered a branding package and built an original content management system. Here they were able to distribute all their content and subscribe users to their magazine.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_CruiseAddicts),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_CruiseAddicts),
            colours: ["#1384A3", "#33A5B8", "#EFF9FE", "#282828"],
            technologyUsed: [SiReact, SiWebpack, SiPhpmyadmin, SiMysql],
            languagesUsed: [SiPhp, SiJavascript, SiCss3, SiHtml5],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_CruiseAddicts)
        }
    ];
}