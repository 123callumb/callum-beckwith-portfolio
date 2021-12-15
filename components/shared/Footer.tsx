import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { ExternalLinkEnum } from "../../lib/enums/LinkEnum";

export default function Footer() {
    return <Container maxW="sm" pb="10" pt="12">
        <Flex direction={{ md: 'row' }} color="whiteShade" fontWeight="500" px={{ base: '10' }}>
            <a href={ExternalLinkEnum.GitHub} target="_blank" rel="noreferrer">
                <Text className="linkAnimation">GitHub</Text>
            </a>
            <Spacer />
            <a href={ExternalLinkEnum.LinkedIn} target="_blank" rel="noreferrer">
                <Text className="linkAnimation">Linkedin</Text>
            </a>
            <Spacer />
            <a href={ExternalLinkEnum.Twitter} target="_blank" rel="noreferrer">
                <Text className="linkAnimation">Twitter</Text>
            </a>
        </Flex>
        <Box textAlign="center" w="100%" pt="6">
            <Text color="whiteShade" fontWeight="100" fontSize="12">© Callum Beckwith {new Date().getFullYear()}</Text>
        </Box>
    </Container>
}