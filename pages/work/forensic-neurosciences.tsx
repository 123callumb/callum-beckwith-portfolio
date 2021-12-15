import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPhpmyadmin, SiReact, SiWebpack } from "react-icons/si";

export default function ForensicNeurosciences() {
    return <Layout breadcrumb="Work">
        <Summary
            name="Forensic Neurosciences"
            desc="Forensic Neurosciences specialise in providing neurosurgical
            medical reports, with Paul Marks being a Consultant Neurosurgeon
            with over 30 years’ experience. The development for Forensic Neurosciences
            was completed by my freelance design and development partnership,
            Webur. Webur delivered a branding package and a marketing website. "
            featureImageURL="/img/fn-feature-preview.png"
            brandLogoURL="/img/fn-logo.png"
            colours={["#003A6A", "#005496", "#8FC9FF", "#FFFFFF"]}
            technologyUsed={[SiReact, SiWebpack, SiPhpmyadmin, SiMysql]}
            languagesUsed={[SiPhp, SiJavascript, SiCss3, SiHtml5]}
        />
    </Layout>;
} 