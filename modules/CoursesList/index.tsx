"use client"

import Table from "@/components/Table";
import TableHead from "@/components/TableHead";
import TableRow from "@/components/TableRow";
import TableBody from "@/components/TableBody";
import TableCell from "@/components/TableCell";
import Checkbox from "@/components/Checkbox";

const CoursesList = ({ dataHeading, dataBody }: any) => {

    const changeHandler = () => {
        console.log("test")
    }

    return (
        <Table theme={"dark"}>
            <TableHead>
                <TableRow>
                    <TableCell size="inline">
                        <Checkbox checked={false} indeterminate={false} onChange={changeHandler} />
                    </TableCell>
                    {
                        dataHeading?.map((item: any) => {
                            return item.title && <TableCell key={item.key} size={item?.size} style={item?.style}>{item.title}</TableCell>
                        })
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dataBody?.map((item: any, index: number) => {
                        return (
                            <TableRow key={index}>
                                <TableCell size="inline">
                                    <Checkbox checked={false} indeterminate={false} onChange={changeHandler} />
                                </TableCell>
                                {dataHeading.map((header: any, index: number) => {
                                    return (
                                        <TableCell key={index} size={header?.size} style={header?.style}>
                                            {header.render ? header.render(item) : item[header.key]}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default CoursesList