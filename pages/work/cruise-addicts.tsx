import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";

export default function CruiseAddicts() {
    return <Layout breadcrumb="Work">
        <Summary 
            name="Cruise Addicts"
            desc="Cruise Addicts Magazine are a free online Magazine 
            subscription company which provide fans with the latest and
            greatest Cruise content. We created them a branding package
            and built an original platform (Website) where they could
            distribute all their content."
            featureImageURL="/img/ca-feature-preview.png"
            brandLogoURL="/img/ca-logo.png"
            colours={["#1384A3", "#33A5B8", "#EFF9FE", "#282828"]}
        />
    </Layout>;
} 