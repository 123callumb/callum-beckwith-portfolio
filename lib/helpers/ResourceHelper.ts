import { InternalLinkEnum } from "../enums/LinkEnum";
import ResourceEnum from "../enums/ResourceEnum";

// This is such a faff that this is a thing, but it has to be until next js sort their routing out with static file generation.
export default class ResourceHelper {
    public static CreateInternalURL(url: InternalLinkEnum): string {
        return `/${url}${InternalLinkEnum.Home ? `.html` : ""}`;
    }

    public static CreateResourceURL(resource: ResourceEnum): string {
        let fodlerName = "img";
        
        if (resource.toLowerCase().includes(".svg"))
            fodlerName = `svg`;
        if (resource.toLowerCase().includes(".pdf"))
            fodlerName = `res`;

        return `${fodlerName}/${resource}`;
    }
}