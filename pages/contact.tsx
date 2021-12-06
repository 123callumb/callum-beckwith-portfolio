import { Center, Container, Icon, Text } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Layout from "../components/shared/Layout";
import ColourPaletteEnum from "../lib/enums/ColourPaletteEnum";

export default function Contact(){
    return <Layout>
        <Container maxW="6xl" color={ColourPaletteEnum.White}>
            <Text>Hey, I'm in Yorkshire</Text>
            <Center>
                <Icon as={FaPhone} mr="2"/>
                <Text>0740 3333 115</Text>
            </Center>
            <Center>
                <Icon as={MdAlternateEmail} mr="2"/>
                <Text>123callumb@gmail.com</Text>
            </Center>
        </Container>
    </Layout>;
}