import { Flex, Icon, Text } from "@chakra-ui/react";
import Layout from "../components/shared/Layout";
import SlideInBox from "../components/Motion/SlideInBox";
import { TiArrowLeft } from "react-icons/ti";
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter();

    return <Layout>
        <Flex height={"100%"} pt={"20%"} flexDirection={"column"} alignContent="center" alignItems={"center"} justifyContent={"center"}>
            <Text fontSize={"xl"}>Hmm this doesn&apos;t seem right, how did you get here?</Text>
            <SlideInBox className="linkAnimation" display={"flex"} alignItems="center" mt={"4"} fontWeight={"600"}>
                <Icon as={TiArrowLeft} />
                <Text onClick={() => router.back()}>Click to go back</Text>
            </SlideInBox>
        </Flex>
    </Layout>;
}