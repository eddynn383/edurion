"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { IPropsChip } from "./interface";
import sx from "@/styles/component.module.scss";

const Chip = ({ id, title, style, size = "S", status = "default", onClose, children }: IPropsChip) => {
    return (
        <span className={sx["chip"]} id={id} title={title} style={style} data-size={size} data-status={status} >
            <span className={sx["chip-text"]}>{children}</span>
            {onClose &&
                <Button type="button" mode="secondary" variant="solid" shade="150" status="accent" size="XS" content="icon" onClick={onClose} >
                    <Icon value="close" />
                </Button>
            }
        </span>
    )
}

export default Chip