import { ChakraProvider } from '@chakra-ui/react';
import '../styles/global.scss';
import Theme from '../components/theme/theme';

export default function App({ Component, pageProps }) {
    return <ChakraProvider theme={Theme}>
        <Component {...pageProps} />
    </ChakraProvider>;
}