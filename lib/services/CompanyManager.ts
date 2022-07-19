import ResourceEnum from "../enums/ResourceEnum";
import ResourceHelper from "../helpers/ResourceHelper";

export default class CompanyManager {
    public static GetCompanies: { Name: string, ImageUrl: string, JobTitle: string }[] = [
        { 
            Name: "Audit Partnership Ltd",
            ImageUrl: ResourceHelper.CreateResourceURL(ResourceEnum.AP_Logo),
            JobTitle: "Software Developer"
        },
        {
            Name: "Webur",
            ImageUrl: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_Webur),
            JobTitle: "Designer & Developer"
        },
        {
            Name: "Sheffield Hallam Students Union",
            ImageUrl: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_SHU),
            JobTitle: "Junior Developer"
        },
        {
            Name: "Cruise Addicts",
            ImageUrl: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_CruiseAddicts),
            JobTitle: "Freelance Designer & Developer"
        },
        {
            Name: "Forensic Neurosciences",
            ImageUrl: ResourceHelper.CreateResourceURL(ResourceEnum.Logo_ForensicNeurosciences),
            JobTitle: "Freelance Designer & Developer"
        },
        {
            Name: "Liberty Trading",
            ImageUrl: ResourceHelper.CreateResourceURL(ResourceEnum.LT_Logo),
            JobTitle: "IT Support Assistant"
        },
        {
            Name: "Liberty Charms",
            ImageUrl: ResourceHelper.CreateResourceURL(ResourceEnum.LC_Logo),
            JobTitle: "Junior Systems Developer"
        }
    ]
}