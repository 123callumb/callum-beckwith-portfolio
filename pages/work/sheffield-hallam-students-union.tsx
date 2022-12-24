import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";
import { SiCss3, SiHtml5, SiJavascript, SiJquery } from "react-icons/si";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import { InternalLinkEnum } from "../../lib/enums/LinkEnum";

export default function SHU() {
    return <Layout breadcrumb="Work">
        <Summary
            name="Sheffield Hallam Students' Union"
            desc="After working for Sheffield Hallam Students Union for a period of time,
            they were quick to contact my freelance design and development partnership,
            Webur, throughout my time at university. Although there are multiple projects
            that have been worked on with Sheffield Hallam Students' Union, the one showcased
            below is a personal favourite of mine. These are the deliverables produced
            for their 2018 Welcome Week, which is viewed by the majority of people starting
            at Sheffield Hallam university."
            featureImageURL={ResourceEnum.Showcase_SHU}
            showcaseImageURL={ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_SHU)}
            brandLogoURL={ResourceEnum.Logo_SHU}
            colours={["#E50071", "#EA8C04", "#1275BB", "#00ADCD"]}
            technologyUsed={[SiJquery]}
            languagesUsed={[SiJavascript, SiCss3, SiHtml5]}
            slug={InternalLinkEnum.Work_SHU}
        />
    </Layout>;
} 