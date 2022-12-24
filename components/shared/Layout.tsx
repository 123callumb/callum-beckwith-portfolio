import { Box, Flex } from "@chakra-ui/react";
import Head from 'next/head';
import React from "react";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, breadcrumb }: { children: any, breadcrumb?: string }) => <Box bgColor="bgWhite">
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>Callum Beckwith</title>
    </Head>
    <main style={{ backgroundColor: ColourPaletteEnum.WhiteAlt }}>
        <Flex flexDir="column" minH="100vh" overflowX="hidden" >
            <Header breadcrumb={breadcrumb} />
            <Box w="100%" flex="1 1 auto">
                {children}
            </Box>
            <Footer />
        </Flex>
    </main>
</Box>;

export default Layout;