"use client"

import Avatar from "@/components/Avatar";
// import { deleteCourse } from "./removeData";
import TableActions from "@/components/TableActions";

const header = [
    {
        title: "Course",
        key: "title",
        style: {
            minWidth: "30%"
        },
        render: (item: any) => (
            <div style={{ "display": "grid", "gridTemplateColumns": "min-content 1fr", "gap": "8px", "alignItems": "center" }}>
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
    // {
    //     title: "Price",
    //     key: "price",
    //     render: (item: any) => {
    //         return (
    //             <>
    //                 <span>{item.price.currency}{item.price.value}</span>
    //                 <span>({item.price.discount}%)</span>
    //             </>
    //         )
    //     }
    // },
    {
        title: "Level",
        key: "level"
    },
    {
        title: "Status",
        key: "status"
    }
]

export default header