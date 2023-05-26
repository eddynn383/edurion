"use client";

import { FormEvent, useState } from "react";
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

    const addNewCourseDrawer = () => {
        setDrawerStateOpen((prev) => !prev)
    }

    const leftComp = (
        <Input id="search" name="search" placeholder="Search" type="text" iconAfter={<Icon value="magnifying-glass" theme={theme} />} variant="solid" theme={theme} />
    )

    const rightComp = (
        <>
            <Button type="button" size="medium" content="icon" theme={theme} onClick={addNewCourseDrawer} ><Icon value="plus" theme={theme} /></Button>
            <Button type="button" size="medium" content="icon" variant="neutral" status="neutral" theme={theme} ><Icon value="filter" theme={theme} /></Button>
        </>
    )

    const saveHandler = async (e: FormEvent<HTMLFormElement>) => {
        console.log("test")
    }

    const handleCancelClick = () => {
        setDrawerStateOpen(false)
    }

    return (
        <>
            <Toolbar left={leftComp} right={rightComp} />
            {drawerStateOpen && <Drawer width="400px" state={drawerStateOpen ? "open" : "close"} theme={theme} onClickOutside={() => setDrawerStateOpen(false)} >
                <Form onSubmit={saveHandler} style={{ "height": "100%", "gap": "0" }}>
                    <Drawer.Header>
                        {action === 'add' ? (
                            <div className={sx["drawer-header-inner"]}>
                                <h2 className={sx["drawer-header-heading"]}>{action === "add" ? "Create" : "Edit"} course</h2>
                                <span className={sx["drawer-header-subheading"]}>{action === "add" ? "Fullfill the form below" : "Change the form values below"}</span>
                            </div>
                        ) : (
                            <div className={sx["drawer-header-inner"]}>
                                <h2 className={sx["drawer-header-heading"]}>Edit course</h2>
                                <span className={sx["drawer-header-subheading"]}>Change the form values below</span>
                            </div>
                        )}
                        {/* <Button type="button" size="xsmall" theme={theme} variant="neutral" status="neutral" surface="1" content="icon" onClick={() => onStateUpdate("close")} >
                            <Icon value="close" theme={theme} />
                        </Button> */}
                    </Drawer.Header>
                    <Drawer.Body>
                        {/* {
                            showError && alert
                        } */}
                        <InputGroup>
                            <Label htmlFor="title" theme={theme}>Title</Label>
                            <Input id="title" name="title" placeholder="Enter text" type="text" value={title} required={true} theme={theme} shade="200" onChange={(e: any) => { setTitle(e.target.value) }} />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="description" theme={theme}>Description</Label>
                            <Textarea id="description" name="description" placeholder="Enter text" type="text" value={description} theme={theme} shade="200" allowResize="vertical" onChange={(e: any) => { setDescription(e.target.value) }} />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="image" theme={theme}>Image</Label>
                            <Input id="image" name="image" placeholder="Enter text" type="text" value={image} theme={theme} shade="200" onChange={(e: any) => { setImage(e.target.value) }} />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="category" theme={theme}>Category</Label>
                            <Input id="category" name="category" placeholder="Enter text" type="text" value={category} theme={theme} shade="200" onChange={(e: any) => { setCategory(e.target.value) }} />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="price" theme={theme}>Price</Label>
                            <Input id="price" name="price" placeholder="Enter text" type="text" value={price} theme={theme} shade="200" onChange={(e: any) => { setPrice(e.target.value) }} />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="level" theme={theme}>Level</Label>
                            <Input id="level" name="level" placeholder="Enter text" type="text" value={level} theme={theme} shade="200" onChange={(e: any) => { setLevel(e.target.value) }} />
                        </InputGroup>
                        <InputGroup style={{ "flexDirection": "row", "gap": "8px" }}>
                            <InputGroup>
                                <Label htmlFor="start-date" theme={theme}>Start Date</Label>
                                <Input id="start-date" name="start-date" placeholder="Select date" type="date" value={startDate} theme={theme} shade="200" onChange={(e: any) => { setStartDate(e.target.value) }} />
                            </InputGroup>
                            <InputGroup>
                                <Label htmlFor="end-date" theme={theme}>End Date</Label>
                                <Input id="end-date" name="end-date" placeholder="Start date" type="date" value={endDate} theme={theme} shade="200" onChange={(e: any) => { setEndDate(e.target.value) }} />
                            </InputGroup>
                        </InputGroup>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button type="submit" size="small" theme={theme} variant="solid" status="accent" content="text" >Save</Button>
                        <Button type="button" size="small" theme={theme} variant="neutral" status="neutral" surface="2" content="text" onClick={handleCancelClick}>Cancel</Button>
                    </Drawer.Footer>
                </Form>
            </Drawer>}
        </>

    )
}

export default CoursesActions