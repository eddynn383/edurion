"use client";

import sx from "@/styles/component.module.scss";

const Table = ({ id, style, theme = "light", children }: any) => {
    return (
        <div className={sx["table"]} id={id} role="table" data-theme={theme} style={style}>
            {children}
        </div>
    )
}

export default Table
