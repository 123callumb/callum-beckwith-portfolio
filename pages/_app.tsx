import { ChakraProvider } from '@chakra-ui/react';
import '../styles/global.scss';
import DefaultTheme from '../components/theme/DefaultTheme';
import 'react-vertical-timeline-component/style.min.css';
import { LazyMotion, domAnimation } from "framer-motion";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return <ChakraProvider theme={DefaultTheme}>
        <LazyMotion features={domAnimation}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            </Head>
            <Component {...pageProps} />
        </LazyMotion>
    </ChakraProvider>;
}