import Companies from "../components/Homepage/Companies";
import Projects from "../components/Homepage/Projects";
import SplashSection from "../components/Homepage/SplashSection";
import Layout from "../components/shared/Layout";

export default function Home(){
  return <Layout>
    <SplashSection /> 
    <Projects />
    <Companies />
  </Layout>
}