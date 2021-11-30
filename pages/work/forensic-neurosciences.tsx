import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";

export default function ForensicNeurosciences() {
    return <Layout breadcrumb="Work">
        <Summary
            name="Forensic Neurosciences"
            desc="For this project with Forensic Neurosciences, we were asked to create
             a new logo and a website for them. Forensic Neurosciences specialise in providing
             neurosurgical medical reports, with Paul Marks being a Consultant Neurosurgeon
             with over 30 years’ experience. For this site we made sure to keep it professional
             and to the point, with a sleek design that gets the company’s tone across to the 
             user."
            featureImageURL="/img/fn-feature-preview.png"
            brandLogoURL="/img/fn-logo.png"
            colours={["#003A6A", "#005496", "#8FC9FF", "#FFFFFF"]}
        />
    </Layout>;
} 