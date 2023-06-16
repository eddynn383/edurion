import sx from "@/styles/component.module.scss"
import { IPropsSkeleton } from "./interface"

const Skeleton = ({ animationType, animationDuration }: IPropsSkeleton) => {
    return (
        <span className={sx["skeleton"]} >a</span >
    )
}

export default Skeleton