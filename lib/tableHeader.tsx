"use client"

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const header = [
    {
        title: "Course",
        key: "title",
        style: {
            minWidth: "30%"
        },
        render: (item: any) => (
            <div style={{ "display": "flex", "gap": "8px", "alignItems": "center" }}>
                <Avatar src={item.image} alt={item.title} size="M" type="square" />
                <span>{item.title}</span>
            </div>
        )
    },
    {
        title: "Category",
        key: "category"
    },
    {
        title: "Duration",
        key: "endDate",
        render: (item: any) => {
            const startDate: any = new Date(item.startDate);
            const endDate: any = new Date(item.endDate);

            const diffTime = Math.abs(endDate - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return (
                <span>{diffDays + " days"}</span>
            )
        }
    },
    {
        title: "Price",
        key: "price"
    },
    {
        title: "Level",
        key: "level"
    },
    {
        title: "Status",
        key: "status"
    },
    {
        title: '',
        dataIndex: '',
        key: 'x',
        render: (data: { id: any; }) => (
            <div style={{ "display": "flex", "gap": "8px" }}>
                <Button type="button" title="Delete this navigation entry" mode="secondary" variant="solid" status="fail" shade="150" size="S" content="icon"
                // onClick={() => onDelete(data.id)}
                >
                    <Icon value="trash" />
                </Button>
                <Button type="button" title="Edit this navigation entry" mode="secondary" variant="solid" status="warning" shade="150" size="S" content="icon"
                // onClick={() => onEdit(data.id)}
                >
                    <Icon value="edit" />
                </Button>
                <Button type="button" title="Add children for this navigation entry" mode="secondary" variant="solid" status="info" shade="150" size="S" content="icon"
                // onClick={() => onAdd(data.id)}
                >
                    <Icon value="clone" />
                </Button>
            </div>
        )
    }
]

export default header