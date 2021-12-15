import { InternalLinkEnum } from "../enums/LinkEnum";
import ResourceEnum from "../enums/ResourceEnum";
const isProd = process.env.NODE_ENV === 'production'
const rootDir = process.env.NEXT_PUBLIC_LOCAL_DIR;

// This is such a faff that this is a thing, but it has to be until next js sort their routing out with static file generation.
export default class ResourceHelper {
    public static CreateInternalURL(url: InternalLinkEnum): string {
        return `${isProd ? rootDir : ""}/${url}${isProd && url !== InternalLinkEnum.Home ? `.html` : ""}`;
    }

    public static CreateResourceURL(resource: ResourceEnum): string {
        let fodlerName = "img";
        
        if (resource.toLowerCase().includes(".svg"))
            fodlerName = `svg`;
        if (resource.toLowerCase().includes(".pdf"))
            fodlerName = `res`;

        return `${isProd ? rootDir : ""}/${fodlerName}/${resource}`;
    }
}