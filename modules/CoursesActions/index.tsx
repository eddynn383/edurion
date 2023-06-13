"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import Button from "@/components/Button";
import Toolbar from "@/modules/PageToolbar";
import Input from "@/components/Input";
import Icon from "@/components/Icon";
import Drawer from "@/components/Drawer";
import Form from "@/components/Form";
import InputGroup from "@/components/InputGroup";
import Label from "@/components/Label";

import sx from "@/styles/component.module.scss";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";

const CoursesActions = ({ theme }: any) => {
    const [drawerStateOpen, setDrawerStateOpen] = useState(false)
    const [action, setAction] = useState("add")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [level, setLevel] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const router = useRouter();

    const addNewCourseDrawer = () => {
        setDrawerStateOpen((prev) => !prev)
    }

    const leftComp = (
        <Input id="search" name="search" placeholder="Search" type="text" shade="200" iconAfter={<Icon value="magnifying-glass" />} variant="solid" />
    )

    const rightComp = (
        <>
            <Button type="button" mode="primary" variant="solid" status="accent" shade="150" content="icon" size="M" onClick={() => router.push('/management/courses/new')} ><Icon value="plus" /></Button>
            <Button type="button" mode="secondary" variant="solid" status="accent" content="icon" shade="100" size="M" ><Icon value="filter" /></Button>
        </>
    )

    const saveHandler = async (e: FormEvent<HTMLFormElement>) => {
        console.log("test")
    }

    const handleCreateCourse = () => {

    }

    const handleCancelClick = () => {
        setDrawerStateOpen(false)
    }

    const levelOptions = [
        {
            value: "Begginer",
            key: 1
        },
        {
            value: "Intermediate",
            key: 2
        },
        {
            value: "Advanced",
            key: 3
        },
        {
            value: "Expert",
            key: 4
        }
    ]

    useEffect(() => {
        console.log(level)
    })

    return (
        <>
            <Toolbar left={leftComp} right={rightComp} />
            {drawerStateOpen && <Drawer width="50%" state={drawerStateOpen ? "open" : "close"} onClickOutside={() => setDrawerStateOpen(false)} >
                <Form onSubmit={saveHandler} style={{ "height": "100%", "gap": "0" }}>
                    <Drawer.Header>
                        <div className={sx["drawer-header-inner"]}>
                            <h2 className={sx["drawer-header-heading"]}>{action === "add" ? "Create" : "Edit"} course</h2>
                            <span className={sx["drawer-header-subheading"]}>{action === "add" ? "Fullfill the form below" : "Change the form values below"}</span>
                        </div>
                        <Button type="button" mode="secondary" variant="solid" status="accent" shade="200" size="M" content="icon" onClick={handleCreateCourse} >
                            <Icon value="close" />
                        </Button>
                    </Drawer.Header>
                    <Drawer.Body>
                        {/* {
                            showError && alert
                        } */}
                        <InputGroup>
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" placeholder="Enter text" type="text" value={title} required={true} shade="200" onChange={(e: any) => { setTitle(e.target.value) }} />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" placeholder="Enter text" type="text" rows={10} columns={5} value={description} shade="200" allowResize="vertical" onChange={(e: any) => { setDescription(e.target.value) }} />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="image">Image</Label>
                            <Input id="image" name="image" placeholder="Enter text" type="text" value={image} shade="200" onChange={(e: any) => { setImage(e.target.value) }} />
                        </InputGroup>
                        <InputGroup style={{ "flexDirection": "row", "gap": "8px" }}>
                            <InputGroup>
                                <Label htmlFor="category">Category</Label>
                                <Input id="category" name="category" placeholder="Enter text" type="text" value={category} shade="200" onChange={(e: any) => { setCategory(e.target.value) }} />
                            </InputGroup>
                            <InputGroup>
                                <Label htmlFor="price">Price</Label>
                                <Input id="price" name="price" placeholder="Enter text" type="text" value={price} shade="200" onChange={(e: any) => { setPrice(e.target.value) }} />
                            </InputGroup>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="level">Level</Label>
                            <Select id="level" placeholder={"Select level"} options={levelOptions} onChange={(option: any) => { setLevel(option.title) }} />
                        </InputGroup>
                        <InputGroup style={{ "flexDirection": "row", "gap": "8px" }}>
                            <InputGroup>
                                <Label htmlFor="start-date">Start Date</Label>
                                <Input id="start-date" name="start-date" placeholder="Select date" type="date" value={startDate} shade="200" onChange={(e: any) => { setStartDate(e.target.value) }} />
                            </InputGroup>
                            <InputGroup>
                                <Label htmlFor="end-date">End Date</Label>
                                <Input id="end-date" name="end-date" placeholder="Start date" type="date" value={endDate} shade="200" onChange={(e: any) => { setEndDate(e.target.value) }} />
                            </InputGroup>
                        </InputGroup>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button type="submit" mode="primary" variant="solid" status="accent" size="S" content="text" >Save</Button>
                        <Button type="button" mode="secondary" variant="solid" status="accent" shade="200" size="S" content="text" onClick={handleCancelClick}>Cancel</Button>
                    </Drawer.Footer>
                </Form>
            </Drawer>}
        </>

    )
}

export default CoursesActions