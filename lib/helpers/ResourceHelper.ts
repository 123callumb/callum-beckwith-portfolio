import { InternalLinkEnum } from "../enums/LinkEnum";
import ResourceEnum from "../enums/ResourceEnum";

export default class ResourceHelper {
    public static CreateInternalURL(url: InternalLinkEnum): string {
        return `/${url}`;
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