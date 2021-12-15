import { Link } from "@chakra-ui/react";
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPhpmyadmin, SiReact, SiWebpack } from "react-icons/si";
import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";

export default function Webur() {
    return <Layout breadcrumb="Work">
        <Summary 
            name="Webur"
            desc={<a>Webur is my web design & development partnership I created with 
            <Link href="https://www.linkedin.com/in/killian-comerford/" 
             ml="1" 
             fontWeight="500"
             color={ColourPaletteEnum.Cyan} 
             target="_blank">
                 Killian Comerford
            </Link>. 
            Webur have delivered websites, online software, and branding for multiple
            clients over the last several years. There are a couple of projects
            showcased on my portfolio associated with Webur.
            The work I&apos;ve done with Webur, the diversity of projects delivered, and
            the client experience gained is something I am very proud of.</a>}
            featureImageURL={ResourceHelper.CreateResourceURL(ResourceEnum.Showcase_Webur)}
            brandLogoURL={ResourceHelper.CreateResourceURL(ResourceEnum.Logo_Webur)}
            colours={["#F15D5E", "#2A2B2A", "#FAFAFA", "#393939"]}
            link="https://webur.co.uk"
            technologyUsed={[SiReact, SiWebpack, SiPhpmyadmin, SiMysql]}
            languagesUsed={[SiPhp, SiJavascript, SiCss3, SiHtml5]}
        />
    </Layout>;
} 