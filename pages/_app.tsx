import { ChakraProvider } from '@chakra-ui/react';
import '../styles/global.scss';
import DefaultTheme from '../components/theme/DefaultTheme';
import 'react-vertical-timeline-component/style.min.css';
import { LazyMotion, domAnimation } from "framer-motion";

export default function App({ Component, pageProps }) {
    return <ChakraProvider theme={DefaultTheme}>
        <LazyMotion features={domAnimation}>
            <Component {...pageProps} />
        </LazyMotion>
    </ChakraProvider>;
}