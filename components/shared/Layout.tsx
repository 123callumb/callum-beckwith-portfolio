import { Box, Flex } from "@chakra-ui/react";
import Head from 'next/head';
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, breadcrumb }: { children: any, breadcrumb?: string}) => <Box bgColor="blueShade3">
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>Callum Beckwith</title>
    </Head>
    <main>
        <Flex flexDir="column" minH="100vh">
            <Header breadcrumb={breadcrumb} />
            <Box flex="1 1 auto">
                {children}
            </Box>
            <Footer />
        </Flex>
    </main>
</Box>;

export default Layout;