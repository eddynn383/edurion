"use client"

import FileUpload, { FileWithPreview } from "@/components/FileUpload"
import Input from "@/components/Input"
import InputGroup from "@/components/InputGroup"
import Label from "@/components/Label"
import Select from "@/components/Select"
import Text from "@/components/Text"
import Textarea from "@/components/Textarea"
import Section from "@/modules/Section"
import { useEffect, useState } from "react"

const CourseCreationForm = ({ onSubmit, action }: any) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState<FileWithPreview[]>([])
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [level, setLevel] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

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
        onSubmit({
            title,
            description,
            image,
            category,
            price,
            level,
            startDate,
            endDate,
        })
    }, [title, description, image, category, price, level, startDate, endDate])

    return (
        <>
            <Section style={{ "height": "100%", "gap": "20px" }}>
                <Section.Title>Course details</Section.Title>
                <Section.Content>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="cover">Cover</Label>
                            <Text>Upload a image which is relevant with your course</Text>
                        </InputGroup>
                        <InputGroup>
                            {/* <FileUpload id="course-cover" data={data} dispatch={dispatch} /> */}
                            <FileUpload id="cover" acceptedFiles="image" onUpload={action} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="title">Title</Label>
                            <Text>Define a course title</Text>
                        </InputGroup>
                        <InputGroup>
                            <Input id="title" name="Course Title" placeholder="Enter text" type="text" value={title} required={true} shade="100" size="L" onChange={(e: any) => { setTitle(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="description">Description</Label>
                            <Text>Describe your course in few words</Text>
                        </InputGroup>
                        <InputGroup>
                            <Textarea id="description" name="Course Description" placeholder="Enter text" type="text" rows={10} columns={5} value={description} shade="100" size="L" allowResize="vertical" style={{ "width": "100%" }} onChange={(e: any) => { setDescription(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    {/* <InputGroup style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "8px" }}>
                                <InputGroup>
                                    <Label htmlFor="level">Language</Label>
                                    <Text>Choose the course language</Text>
                                </InputGroup>
                                <InputGroup>
                                    <Select id="level" placeholder={"Select level"} options={levelOptions} shade="200" size="L" onChange={(option: any) => { setLevel(option.title) }} />
                                </InputGroup>
                            </InputGroup> */}
                </Section.Content>
                {/* <Button type="submit" size="small" variant="solid" status="accent" content="text" >Save</Button> */}
            </Section>
            <Section>
                <Section.Title>Metatags</Section.Title>
                <Section.Content>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="start-date">Timeline</Label>
                            <Text>Define course availability period</Text>
                        </InputGroup>
                        <InputGroup style={{ "display": "flex", "flexDirection": "row", "gap": "8px" }}>
                            <Input id="start-date" name="Course Start Date" placeholder="Start date" type="date" value={startDate} shade="200" size="L" onChange={(e: any) => { setStartDate(e.target.value) }} />
                            <Input id="end-date" name="Course End Date" placeholder="End date" type="date" value={endDate} shade="200" size="L" onChange={(e: any) => { setEndDate(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="category">Category</Label>
                            <Text>Upload a image which is relevant with your course</Text>
                        </InputGroup>
                        <InputGroup>
                            <Input id="category" name="Course Category" placeholder="Enter text" type="text" value={category} shade="100" size="L" onChange={(e: any) => { setCategory(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="price">Price</Label>
                            <Text>Upload a image which is relevant with your course</Text>
                        </InputGroup>
                        <InputGroup>
                            <Input id="price" name="Course Price" placeholder="Enter text" type="text" value={price} shade="100" size="L" onChange={(e: any) => { setPrice(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="level">Level</Label>
                            <Text>Upload a image which is relevant with your course</Text>
                        </InputGroup>
                        <InputGroup>
                            <Select id="level" placeholder={"Select level"} options={levelOptions} shade="200" size="L" onChange={(option: any) => { setLevel(option.value) }} />
                        </InputGroup>
                    </InputGroup>
                </Section.Content>
            </Section>
        </>
    )
}

export default CourseCreationForm