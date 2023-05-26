"use client";

import sx from "@/styles/component.module.scss";

const TableCell = ({ id, size = "full", type = "cell", style, children }: any) => {
    return (
        <div className={sx["table-cell"]} id={id} role={type} data-size={size} style={style}>
            {children}
        </div>
    )
}

export default TableCell
