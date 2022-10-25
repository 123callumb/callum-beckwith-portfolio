import { Button } from "@chakra-ui/react";
import style from "../../styles/Components/StandoutButton.module.scss";


export default function StandoutButton(props: { text: string, size?: string }) {
    return <Button
        size={props.size ?? "sm"}
        backgroundImage={'linear-gradient(to right, #589EA6 0%, #68D8C3  61%, #589EA6  100%) !important'}
        transition="0.5s all"
        backgroundSize="200%"
        color="white"
        boxShadow="2px 2px 3px rgba(0, 0, 0, 0.1)"
        _hover={{
            backgroundPosition: "right center !important",
        }}
        _focus={{
            backgroundPosition: "right center !important"
        }}>
        {props.text}
    </Button>;
}