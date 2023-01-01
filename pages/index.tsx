import Companies from "../components/Homepage/Companies";
import FooterSummary from "../components/Homepage/FooterSummary";
import Projects from "../components/Homepage/Projects";
import SplashSection from "../components/Homepage/SplashSection";
import Layout from "../components/shared/Layout";

export default function Home(){
  return <Layout useCircuit={true}>
    <SplashSection /> 
    <Projects />
    <Companies />
    <FooterSummary />
  </Layout>;
}