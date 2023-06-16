"use client"

import Button from "@/components/Button"
import Icon from "@/components/Icon"
import sx from "@/styles/component.module.scss"
import { IPropsTableActions } from "./interface"

const TableActions = ({ data, onDuplicate, onEdit, onDelete }: IPropsTableActions) => {
    return (
        <div className={sx["table-actions"]} style={{ "display": "flex", "gap": "8px" }}>
            <Button type="button" title="Delete this navigation entry" mode="secondary" variant="solid" status="fail" shade="150" size="S" content="icon" onClick={() => onDelete(data.id)}>
                <Icon value="trash" />
            </Button>
            <Button type="button" title="Edit this navigation entry" mode="secondary" variant="solid" status="warning" shade="150" size="S" content="icon" onClick={() => onEdit(data.id)}>
                <Icon value="edit" />
            </Button>
            <Button type="button" title="Add children for this navigation entry" mode="secondary" variant="solid" status="info" shade="150" size="S" content="icon" onClick={() => onDuplicate(data.id)}>
                <Icon value="clone" />
            </Button>
        </div>
    )
}

export default TableActions