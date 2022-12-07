import ResourceHelper from "../helpers/ResourceHelper";
import ResourceEnum from "../enums/ResourceEnum";
import { InternalLinkEnum } from "../enums/LinkEnum";
import FeaturedProject from "../props/FeaturedProject";
import { SiCsharp, SiCss3, SiDocker, SiDotnet, SiHtml5, SiJavascript, SiJquery, SiMysql, SiNextdotjs, SiPhp, SiPhpmyadmin, SiReact, SiSass, SiTypescript, SiWebpack } from "react-icons/si";

export default class ProjectManager {
    public static GetProjects: { imgSrc?: string, name: string | JSX.Element, custom?: JSX.Element, forceHeight?: string, slug: string }[] = [
        {
            name: "YouLearn",
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
        }
    ];

    public static GetFeaturedProjects: FeaturedProject[] = [
        {
            name: "YouLearn",
            desc: "YouLearn delivers learning experiences for users to get to grips with using online services and mobile apps.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_EasyLearn),
            colours: ["#E4F2EE", "#BAD9C8", "#407352", "#68A67E", "#3B5946"],
            technologyUsed: [SiDotnet, SiReact, SiWebpack, SiMysql, SiDocker, SiNextdotjs],
            languagesUsed: [SiCsharp, SiTypescript, SiJavascript, SiSass],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_EasyLearn)
        },
        {
            name: "Webur",
            desc: "Webur have delivered websites, online software, and branding for multiple clients over the last several years.",
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
            desc:" These are the deliverables produced for their 2018 Welcome Week, which is viewed by the majority of people starting at Sheffield Hallam university.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_SHU),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_SHU),
            colours:["#E50071", "#EA8C04", "#1275BB", "#00ADCD"],
            technologyUsed:[SiJquery],
            languagesUsed:[SiJavascript, SiCss3, SiHtml5],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_SHU)
        },
        {
            name:"Cruise Addicts",
            desc:"Cruise Addicts Magazine is a free online Magazine subscription company that provides their fans with the latest and greatest Cruise content.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_CruiseAddicts),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_CruiseAddicts),
            colours: ["#1384A3", "#33A5B8", "#EFF9FE", "#282828"],
            technologyUsed: [SiReact, SiWebpack, SiPhpmyadmin, SiMysql],
            languagesUsed: [SiPhp, SiJavascript, SiCss3, SiHtml5],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_CruiseAddicts)
        }
    ];
}