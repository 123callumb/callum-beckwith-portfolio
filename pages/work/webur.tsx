import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPhpmyadmin, SiReact, SiWebpack } from "react-icons/si";
import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";

export default function Webur() {
    return <Layout breadcrumb="Work">
        <Summary 
            name="Webur"
            desc="Webur is a web design & development company based in Sheffield. 
            The team has more than 6 years web development experience.
            We focus on user experience design and make sure that all our clients 
            are happy with the final product. We are always open to opportunities,
            so feel free to contact us at any time!"
            featureImageURL="/img/wb-feature-preview.png"
            brandLogoURL="/img/wb-logo.png"
            colours={["#F15D5E", "#2A2B2A", "#FAFAFA", "#393939"]}
            link="https://webur.co.uk"
            technologyUsed={[SiReact, SiWebpack, SiPhpmyadmin, SiMysql]}
            languagesUsed={[SiPhp, SiJavascript, SiCss3, SiHtml5]}
        />
    </Layout>;
} 