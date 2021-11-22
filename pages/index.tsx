import { Box, VStack, Text, Icon } from "@chakra-ui/react";
import { FaArrowCircleDown } from "react-icons/fa";
import Projects from "../components/Homepage/Projects";
import SplashSection from "../components/Homepage/SplashSection";
import Layout from "../components/shared/Layout";

export default function Home(){
  return <Layout>
    <SplashSection /> 
    <Projects />
  </Layout>
}