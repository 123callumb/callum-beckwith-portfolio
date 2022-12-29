import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children, breadcrumb, useCircuit }: { children: any, breadcrumb?: string, useCircuit?: boolean }) {
    const pageTitle = `${breadcrumb ? `${breadcrumb} - ` : ``}Callum Beckwith`; // `breadcrumb && ` didn't work here?

    return <Box bgColor="bgWhite">
        <main style={{ backgroundColor: ColourPaletteEnum.WhiteAlt }}>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Flex flexDir="column" minH="100vh" overflowX="hidden" >
                <Header breadcrumb={breadcrumb} useCircuit={useCircuit ?? false} />
                <Box w="100%" flex="1 1 auto" zIndex={"2"}>
                    {children}
                </Box>
                <Footer />
            </Flex>
        </main>
    </Box>;
}