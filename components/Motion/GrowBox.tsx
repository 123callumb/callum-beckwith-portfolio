import { m } from "framer-motion";
import React from "react";

export default class GrowBox extends React.Component<any> {
    render() {
        return <m.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, bounce: 0.4, type: "spring" }} key={this.props.key ?? undefined}>
            {(this.props as any).children}
        </m.div>;
    }
}