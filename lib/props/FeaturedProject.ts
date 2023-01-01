import { IconType } from "react-icons/lib";
import { InternalLinkEnum } from "../enums/LinkEnum";
import ResourceEnum from "../enums/ResourceEnum";

export default interface FeaturedProject {
    name: string;
    desc: string | JSX.Element;
    featureImageURL: ResourceEnum;
    brandLogoURL?: ResourceEnum;
    link?: string;
    colours: string[];
    technologyUsed: IconType[];
    languagesUsed: IconType[];
    showcaseImageURL: string;
    slug: InternalLinkEnum;
}