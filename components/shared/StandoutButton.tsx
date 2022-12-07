import { Button } from "@chakra-ui/react";
import NextLink from 'next/link';
import { InternalLinkEnum } from "../../lib/enums/LinkEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";


export default function StandoutButton(props: { text: string, size?: string, href?: InternalLinkEnum, newWindow?: boolean }) {
    return <Button
        size={props.size ?? "sm"}
        backgroundImage={'linear-gradient(to right, #589EA6 0%, #68D8C3  61%, #589EA6  100%) !important'}
        transition="0.5s all"
        backgroundSize="200%"
        color="white"
        boxShadow="1px 2px 1px rgba(40, 40, 40, 0.1)"
        borderRadius={4}
        _hover={{
            backgroundPosition: "right center !important",
        }}
        _focus={{
            backgroundPosition: "right center !important"
        }}>
        {props.href ? <NextLink href={ResourceHelper.CreateInternalURL(props.href)} target={props.newWindow ? "_blank" : "_self"} rel={props.newWindow ? "noopener noreferrer" : ""}>
            {props.text}
        </NextLink> : props.text}
    </Button>;
}