"use client";

import Icon from "@/components/Icon";

const StatusIcon = ({ status }: any) => {
    let icon: any

    switch (status) {
        case "success": icon = "circle-check"
            break;
        case "fail": icon = "circle-exclamation"
            break;
        case "warning": icon = "triangle-exclamation"
            break;
        case "info": icon = "circle-info"
        default:
            break;
    }

    return (
        <Icon value={icon} />
    )
}

export default StatusIcon