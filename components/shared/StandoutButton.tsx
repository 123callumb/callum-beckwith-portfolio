import { Button } from "@chakra-ui/react";


export default function StandoutButton(props: { text: string, size?: string }) {
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
        {props.text}
    </Button>;
}