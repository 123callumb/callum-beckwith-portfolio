import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPhpmyadmin, SiReact, SiWebpack } from "react-icons/si";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";

export default function CruiseAddicts() {
    return <Layout breadcrumb="Work">
        <Summary 
            name="Cruise Addicts"
            desc="Cruise Addicts Magazine is a free online Magazine subscription company that provides their fans with the latest and greatest Cruise content.The  development for Cruise Addicts was completed by my freelance design and development partnership, Webur. Webur delivered a branding package and built an original content management system. Here they were able to distribute all their content and subscribe users to their magazine."
            featureImageURL={ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_CruiseAddicts)}
            brandLogoURL={ResourceHelper.CreateResourceURL(ResourceEnum.Logo_CruiseAddicts)}
            colours={["#1384A3", "#33A5B8", "#EFF9FE", "#282828"]}
            technologyUsed={[SiReact, SiWebpack, SiPhpmyadmin, SiMysql]}
            languagesUsed={[SiPhp, SiJavascript, SiCss3, SiHtml5]}
            showcaseImageURL={ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_CruiseAddicts)}
        />
    </Layout>;
} 