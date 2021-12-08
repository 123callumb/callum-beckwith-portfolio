import { IconType } from "react-icons/lib";

export default interface Summary_Props {
    name: string;
    desc: string;
    featureImageURL: string;
    brandLogoURL?: string;
    link?: string;
    colours: string[];
    technologyUsed: IconType[];
    languagesUsed: IconType[]
}