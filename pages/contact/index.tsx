import { Avatar, Button, Center, Container, Flex, HStack, Icon, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Layout from "../../components/shared/Layout";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";

export default function Contact() {
    return <Layout>
        <Center height="100%">
            <Container maxW="6xl" color={ColourPaletteEnum.White} textAlign="center" pt="10%">
                <VStack spacing={3}>
                    <Avatar boxSize="52" name="Callum Beckwith" src="https://avatars.githubusercontent.com/u/6897908?v=4" userSelect="none" />
                    <Text fontSize="lg" fontWeight="600">Callum Beckwith</Text>
                    <Text fontWeight="100" fontStyle="italic" fontSize="sm">123callumb@gmail.com</Text>
                    <HStack spacing={6} pt="4">
                        <Popover trigger="hover" id="email-popover">
                            <PopoverTrigger >
                                <Avatar bg={ColourPaletteEnum.Cyan} color={ColourPaletteEnum.White} icon={<Icon as={MdAlternateEmail} />} cursor="pointer" />
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverBody color="black">
                                    <Flex>
                                        <Center>
                                            <Text fontWeight="500">123callumb@gmail.com</Text>
                                        </Center>
                                        <Spacer />
                                        <a href="mailto:123callumb@gmail.com">
                                            <Button color={ColourPaletteEnum.White} bgColor={ColourPaletteEnum.Cyan} >Send email</Button>
                                        </a>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover trigger="hover" id="phone-popover">
                            <PopoverTrigger >
                                <Avatar bg={ColourPaletteEnum.Cyan} color={ColourPaletteEnum.White} icon={<Icon as={FaPhone} />} cursor="pointer" />
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverBody color="black">
                                    <Flex>
                                        <Center>
                                            <Text fontWeight="500">0740 3333 115</Text>
                                        </Center>
                                        <Spacer />
                                        <a href="tel:07403333115">
                                            <Button color={ColourPaletteEnum.White} bgColor={ColourPaletteEnum.Cyan}>Call</Button>
                                        </a>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </HStack>
                </VStack>
            </Container>
        </Center>
    </Layout>;
}