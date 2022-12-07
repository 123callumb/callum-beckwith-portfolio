import { ChakraProvider } from '@chakra-ui/react';
import '../styles/global.scss';
import DefaultTheme from '../components/theme/DefaultTheme';
import 'react-vertical-timeline-component/style.min.css';

export default function App({ Component, pageProps }) {
    return <ChakraProvider theme={DefaultTheme}>
        <Component {...pageProps} />
    </ChakraProvider>;
}