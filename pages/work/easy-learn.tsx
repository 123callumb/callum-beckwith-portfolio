import Layout from "../../components/shared/Layout";
import Summary from "../../components/Work/Summary";
import { SiDotnet, SiReact, SiMysql, SiDocker, SiCsharp, SiWebpack, SiTypescript, SiJavascript, SiSass, SiNextdotjs } from 'react-icons/si/index';

export default function EasyLearn() {
    return <Layout breadcrumb="Work">
        <Summary
            name="Easy Learn"
            desc="Easy Learn is one of my favourite ongoing projects to date.
            The goal is to deliver learning experiences for users to get to
            grips with using online services and mobile apps. EasyLearn places
            the users in guided sandbox environments where they can learn
            through realistic scenarios and experiences. EasyLearn also provides
            teachers with classroom management abilities, ease of access features
            for their learners, and performance analysis tools."
            featureImageURL="/img/el-feature-preview.png"
            colours={["#E4F2EE", "#BAD9C8", "#407352", "#68A67E", "#3B5946"]}
            technologyUsed={[SiDotnet, SiReact, SiWebpack, SiMysql, SiDocker, SiNextdotjs]}
            languagesUsed={[SiCsharp, SiTypescript, SiJavascript, SiSass]}
        />
    </Layout>;
} 