import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import LinkEnum from "../../lib/models/LinkEnum";

export default () => <Container maxW="sm" pb="10" pt="12">
    <Flex direction={{ md: 'row' }} color="whiteShade" fontWeight="500">
        <a href={LinkEnum.GitHub} target="_blank">
            <Text className="linkAnimation">GitHub</Text>
        </a>
        <Spacer />
        <a href={LinkEnum.LinkedIn} target="_blank">
            <Text className="linkAnimation">Linkedin</Text>
        </a>
        <Spacer />
        <a href={LinkEnum.Twitter} target="_blank">
            <Text className="linkAnimation">Twitter</Text>
        </a>
    </Flex>
    <Box textAlign="center" w="100%" pt="6">
        <Text color="whiteShade" fontWeight="100" fontSize="12">© Callum Beckwith {new Date().getFullYear()}</Text>
    </Box>
</Container>