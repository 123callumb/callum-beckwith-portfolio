import ResourceHelper from "../helpers/ResourceHelper";
import ResourceEnum from "../enums/ResourceEnum";
import FeaturedProject from "../props/FeaturedProject";
import { SiCsharp, SiCss3, SiDocker, SiDotnet, SiHtml5, SiJavascript, SiJquery, SiMysql, SiNextdotjs, SiPhp, SiPhpmyadmin, SiReact, SiSass, SiTypescript, SiWebpack } from "react-icons/si";
import { InternalLinkEnum } from "../enums/LinkEnum";

export default class ProjectManager {
    public static GetFeaturedProjects: FeaturedProject[] = [
        {
            name: "YouLearn",
            desc: "YouLearn delivers learning experiences for users to get to grips with using online services and mobile apps.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_YouLearn),
            colours: ["#E4F2EE", "#BAD9C8", "#407352", "#68A67E", "#3B5946"],
            technologyUsed: [SiDotnet, SiReact, SiWebpack, SiMysql, SiDocker, SiNextdotjs],
            languagesUsed: [SiCsharp, SiTypescript, SiJavascript, SiSass],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_YouLearn),
            slug: InternalLinkEnum.Work_YouLearn
        },
        {
            name: "Webur",
            desc: "Webur have delivered websites, online software, and branding for multiple clients over the last several years.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_Webur),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_Webur),
            colours: ["#F15D5E", "#2A2B2A", "#FAFAFA", "#393939"],
            link:"https://webur.co.uk",
            technologyUsed: [SiReact, SiWebpack, SiPhpmyadmin, SiMysql, SiNextdotjs, SiDocker],
            languagesUsed: [SiPhp, SiJavascript, SiCss3, SiHtml5, SiTypescript],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_Webur),
            slug: InternalLinkEnum.Work_Webur
        },
        {
            name:"Sheffield Hallam Students' Union",
            desc:" These are the deliverables produced for their 2018 Welcome Week, which is viewed by the majority of people starting at Sheffield Hallam university.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_SHU),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_SHU),
            colours:["#E50071", "#EA8C04", "#1275BB", "#00ADCD"],
            technologyUsed:[SiJquery],
            languagesUsed:[SiJavascript, SiCss3, SiHtml5],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_SHU),
            slug: InternalLinkEnum.Work_SHU
        },
        {
            name:"Cruise Addicts",
            desc:"Cruise Addicts Magazine is a free online Magazine subscription company that provides their fans with the latest and greatest Cruise content.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_CruiseAddicts),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_CruiseAddicts),
            colours: ["#1384A3", "#33A5B8", "#EFF9FE", "#282828"],
            technologyUsed: [SiReact, SiWebpack, SiPhpmyadmin, SiMysql],
            languagesUsed: [SiPhp, SiJavascript, SiCss3, SiHtml5],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.HomeFeature_CruiseAddicts),
            slug: InternalLinkEnum.Work_CruiseAddicts
        },
        {
            name:"Forensic Neuroscience",
            desc:"Forensic Neurosciences specialise in providing neurosurgical medical reports. With Webur and Forensic Neurosciences, I helped produce a branding package and website.",
            showcaseImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_ForensicNeurosciences),
            brandLogoURL: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_ForensicNeurosciences),
            colours: ["#003A6A", "#005496", "#8FC9FF", "#FFFFFF"],
            technologyUsed: [SiReact, SiWebpack, SiPhpmyadmin, SiMysql],
            languagesUsed: [SiPhp, SiJavascript, SiCss3, SiHtml5],
            featureImageURL: ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_ForensicNeurosciences),
            slug: InternalLinkEnum.Work_ForensicNeurosciences
        }
    ];
}