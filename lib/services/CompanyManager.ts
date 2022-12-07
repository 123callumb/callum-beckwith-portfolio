import { AiOutlineFileSearch } from "react-icons/ai";
import { FaHotel, FaPencilRuler } from "react-icons/fa";
import { MdAnalytics, MdDock, MdFoodBank, MdGroups, MdWaves } from "react-icons/md";
import ResourceEnum from "../enums/ResourceEnum";
import { Job } from "../props/Job";

export default class CompanyManager {
    public static SoftwareJobs: Job[] = [
        {
            CompanyName: "Audit Partnership Ltd",
            LogoUrl: ResourceEnum.AP_Logo,
            Location: 'York, UK - Remote',
            Title: "Senior Software Developer",
            Description: 'Full stack application developer working with large client datasets - skills include .Net Core/Framework,  Node.Js, TypeScript, SQL and more...',
            StartDate: new Date(2019, 6, 1, 0, 0, 0, 0),
            IconContext: AiOutlineFileSearch,
            ShowInTimeline: true
        },
        {
            CompanyName: "Webur",
            LogoUrl: ResourceEnum.Logo_Webur,
            Location: "Sheffield, UK",
            Description: "Duties include handling clients, producing company branding, site designs and full stack web development - skills include PHP, React.JS, Node.Js and more...",
            Title: "Designer & Developer",
            StartDate: new Date(2018, 6, 1, 0, 0, 0, 0),
            EndDate: new Date(2022, 1, 1, 0, 0, 0),
            IconContext: FaPencilRuler,
            ShowInTimeline: true
        },
        {
            CompanyName: "Sheffield Hallam Students Union",
            LogoUrl: ResourceEnum.Logo_SHU,
            Title: "Junior Developer",
            Location: "Sheffield, UK",
            Description: "Duties include the creation of multiple web pages (including designs), a blog system and a Welcome Week page.",
            StartDate: new Date(2018, 6, 1, 0, 0, 0, 0),
            EndDate: new Date(2018, 9, 1, 0, 0, 0, 0),
            IconContext: MdGroups,
            ShowInTimeline: true
        },
        {
            CompanyName: "Cruise Addicts",
            LogoUrl: ResourceEnum.Logo_CruiseAddicts,
            Title: "Designer & Developer",
            ShowInTimeline: false,
            Location: "Sheffield, UK",
            Description: "Designer & developer at Webur",
            IconContext: MdWaves,
            StartDate: new Date(2019, 1, 1, 0, 0 ,0)
        },
        {
            CompanyName: "Forensic Neurosciences",
            LogoUrl: ResourceEnum.Logo_ForensicNeurosciences,
            Title: "Designer & Developer",
            ShowInTimeline: false,
            Location: "Sheffield, UK",
            Description: "Designer & developer at Webur",
            IconContext: MdDock,
            StartDate: new Date(2019, 6, 1, 0, 0 ,0)
        },
        {
            CompanyName: "Liberty Trading",
            LogoUrl: ResourceEnum.LT_Logo,
            ShowInTimeline: true,
            Title: "Junior Systems Developer",
            Location: 'Barnsley, UK',
            Description: 'Duties include handling stock values across three companies and developing private inventory analysis software. ',
            StartDate: new Date(2017, 4, 1, 0, 0, 0, 0),
            EndDate: new Date(2017, 8, 1, 0, 0, 0, 0),
            IconContext: MdAnalytics
        },
        {
            CompanyName: "Liberty Charms",
            LogoUrl: ResourceEnum.LC_Logo,
            Title: "Junior Systems Developer",
            ShowInTimeline: false,
            Location: 'Barnsley, UK',
            Description: 'Parent company is Liberty Trading. Duties include handling stock values across three companies and developing private inventory analysis software. ',
            StartDate: new Date(2017, 4, 1, 0, 0, 0, 0),
            EndDate: new Date(2017, 8, 1, 0, 0, 0, 0),
            IconContext: MdAnalytics
        }
    ]

    public static NonSoftwareJobs: Job[] = [
        {
            CompanyName: 'Wetherby Whaler',
            Title: 'Waiter',
            Location: 'Wakefield, UK',
            StartDate: new Date(2016, 6, 1, 0, 0, 0, 0),
            EndDate: new Date(2016, 8, 1, 0, 0, 0, 0),
            IconContext: MdFoodBank,
            Description: "A waiter at a fish & chip restaurant",
            LogoUrl: ResourceEnum.TitleCircuit,
            ShowInTimeline: true
        },
        {
            CompanyName: 'Cedar Court Hotel Wakefield',
            Title: 'Conference and Banqueting',
            Location: 'Wakefield, UK',
            StartDate: new Date(2014, 11, 1, 0, 0, 0, 0),
            EndDate: new Date(2016, 1, 1, 0, 0, 0, 0),
            IconContext: FaHotel,
            Description: "A member of the banquetting team.",
            ShowInTimeline: true,
            LogoUrl: ResourceEnum.TitleCircuit
        }
    ]
}