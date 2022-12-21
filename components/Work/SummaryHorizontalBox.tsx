import { Job } from "../../lib/props/Job";
import FramerBox from "../Motion/FramerBox";

export default function SummaryHorizontalBox(job: Job){
    return <FramerBox whileInView={{
         opacity: 1,
         y: 0,
         transition: {
            delay: 0.1,
            bounce: 0.4,
            type: "spring"
         }
    }}
    initial={{
        y: -2,
        opacity: 0
    }}>
        {/* <Image /> */}
    </FramerBox>
}