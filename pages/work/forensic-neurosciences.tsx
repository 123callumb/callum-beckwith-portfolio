import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPhpmyadmin, SiReact, SiWebpack } from "react-icons/si";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import { InternalLinkEnum } from "../../lib/enums/LinkEnum";

export default function ForensicNeurosciences() {
    return <Layout breadcrumb="Work" useCircuit={true}>
        <Summary
            name="Forensic Neurosciences"
            desc="Forensic Neurosciences specialise in providing neurosurgical
            medical reports, with Paul Marks being a Consultant Neurosurgeon
            with over 30 years’ experience. The development for Forensic Neurosciences
            was completed by my freelance design and development partnership,
            Webur. Webur delivered a branding package and a marketing website. "
            featureImageURL={ResourceEnum.Showcase_ForensicNeurosciences}
            brandLogoURL={ResourceEnum.Logo_ForensicNeurosciences}
            colours={["#003A6A", "#005496", "#8FC9FF", "#FFFFFF"]}
            technologyUsed={[SiReact, SiWebpack, SiPhpmyadmin, SiMysql]}
            languagesUsed={[SiPhp, SiJavascript, SiCss3, SiHtml5]}
            showcaseImageURL={ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_ForensicNeurosciences)}
            slug={InternalLinkEnum.Work_ForensicNeurosciences}
        />
    </Layout>;
} 