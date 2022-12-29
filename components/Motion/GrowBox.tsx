import { m } from "framer-motion";
import React from "react";

export default function GrowBox({ children }) {
    return <m.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, bounce: 0.4, type: "spring" }}>
        {children}
    </m.div>;
}