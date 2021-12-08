import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";
import { SiDotnet, SiReact, SiMysql, SiDocker, SiCsharp, SiWebpack, SiTypescript, SiJavascript, SiSass, SiNextdotjs } from 'react-icons/si/index';

export default function EasyLearn() {
    return <Layout breadcrumb="Work">
        <Summary
            name="Easy Learn"
            desc="Easy Learn is one of my favourite on going projects to date.
            The goal is to deliver an online learning experience for users who 
            are not familiar with using online services. EasyLearn places the 
            user in guided sandbox environments where they are able to learn 
            through world like experiences. EasyLearn is built with teachers
            in mind, providing them with ease of access features for their
            learners, and classroom management analysis and tools."
            featureImageURL="/img/el-feature-preview.png"
            colours={["#E4F2EE", "#BAD9C8", "#407352", "#68A67E", "#3B5946"]}
            technologyUsed={[SiDotnet, SiReact, SiWebpack, SiMysql, SiDocker, SiNextdotjs]}
            languagesUsed={[SiCsharp, SiTypescript, SiJavascript, SiSass]}
        />
    </Layout>;
} 