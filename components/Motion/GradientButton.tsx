import NextLink from 'next/link';
import FramerBox from './FramerBox';
import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { TiArrowRight } from 'react-icons/ti';
import { IconType } from 'react-icons';

export default function GradientButton(props: { href: string, title: string, customIcon?: IconType }) {
    const GradientButtonComp = React.forwardRef((p: any, ref: any) => {
        return (<FramerBox
            flexDir={"column"}
            px={"10px"}
            py={"6px"}
            fontSize={"sm"}
            whileHover={"hover"}
            cursor="pointer"
            initial="start"
            onClick={p.onClick}
            ref={ref}
            color="white"
            boxShadow="1px 2px 1px rgba(40, 40, 40, 0.1)"
            borderRadius={"4"}
            fontWeight="500"
            variants={{
                start: {
                    background: "linear-gradient(to right, #589EA6 0%, #61BEB6  0%, #589EA6  100%)"
                },
                hover: {
                    background: "linear-gradient(to right, #589EA6 0%, #68D8C3  100%, #589EA6  100%)",
                    transition: {
                        duration: 0.3,
                        type: "tween",
                        ease: "easeInOut"
                    }
                }
            }}>
            <Flex pos={"relative"}>
                <FramerBox
                    variants={{
                        hover: {
                            paddingRight: '20px',
                            transition: {
                                delay: 0.2
                            }
                        }
                    }}>{props.title}</FramerBox>
                <FramerBox
                    pos={"absolute"}
                    variants={{
                        start: {
                            opacity: 0,
                            display: 'none'
                        }, hover: {
                            opacity: 1,
                            display: 'block',
                            transition: {
                                delay: 0.3
                            }
                        }
                    }}
                    right="0px"
                    top="2px">
                    <Icon as={props.customIcon ? props.customIcon : TiArrowRight} />
                </FramerBox>
            </Flex>
        </FramerBox>);
    });
    GradientButtonComp.displayName = "GradientButtonComp";
    
    return <NextLink href={props.href} passHref legacyBehavior>
        <GradientButtonComp />
    </NextLink>;
}