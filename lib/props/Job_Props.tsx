import { ComponentWithAs, IconProps } from "@chakra-ui/react";

export interface Job {
    companyName: string;
    jobRole: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    roleDescription?: string;
    relatedIcon: JSX.Element;
    jobIndex?: number;
}