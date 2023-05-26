"use client";

import sx from "@/styles/component.module.scss";

const TableRow = ({ id, style, children }: any) => {
    return (
        <div className={sx["table-row"]} id={id} role="row" style={style} >
            {children}
        </div>
    )
}

export default TableRow
