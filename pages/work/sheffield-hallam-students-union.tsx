import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";

export default function SHU() {
    return <Layout breadcrumb="Work">
        <Summary
            name="Sheffield Hallam Students' Union"
            desc="We worked with Sheffield Hallam Students Union to create multiple
            content pages for their pre-existing website. All site pages were designed 
            and created by us. We produced a Welcome Week page to be viewed by the
            majority of people starting at the university and a creative content page
            where union members are able to post their own content to. We also created
            pages for their most recent student officers."
            featureImageURL="/img/shu-feature-preview.png"
            brandLogoURL="/img/shu-logo.png"
            colours={["#E50071", "#EA8C04", "#1275BB", "#00ADCD"]}
        />
    </Layout>;
} 