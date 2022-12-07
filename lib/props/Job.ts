import { IconType } from "react-icons";
import ResourceEnum from "../enums/ResourceEnum";

export interface Job {
    Title: string;
    CompanyName: string;
    LogoUrl: ResourceEnum;
    Location: string;
    Description: string | JSX.Element;
    StartDate: Date;
    EndDate?: Date;
    IconContext: IconType;
    FrontEndTechnologies?: string[];
    BackendTechnologies?: string[];
    Languages?: string[];
    ShowInTimeline: boolean;
}