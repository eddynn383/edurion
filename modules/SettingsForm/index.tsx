"use client"

import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import Section from "@/modules/Section";
import Content from "@/modules/Content";
import Form from "@/components/Form";
import InputGroup from "@/components/InputGroup";
import Label from "@/components/Label";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import FileUpload from "@/components/FileUpload";
import Cover from "@/components/Cover";
import UserProfile from "@/components/UserProfile";
import { languages } from "@/lib/languages";
import Icon from "@/components/Icon";

const SettingsForm = ({ profile }: any) => {
    const { data: session, status } = useSession()


    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState(profile.userEmail)
    const [bio, setBio] = useState()
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmNewPassword, setConfirmNewPassword] = useState()

    const user = session?.user

    console.log(profile)

    function saveHandler(e: FormEvent<HTMLFormElement>): Promise<void> {
        throw new Error("Function not implemented.");
    }

    return (
        <Form onSubmit={saveHandler}>
            <Section style={{ "height": "100%", "gap": "20px" }} id="personal-details">
                <Section.Title>Personal details</Section.Title>
                <Section.Content>
                    <InputGroup layout="one">
                        <UserProfile avatar={user?.imageLarge} cover="https://images.pexels.com/photos/3385662/pexels-photo-3385662.jpeg" name={user?.name} email={user?.email} />
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="full-name">Full name</Label>
                        </InputGroup>
                        <InputGroup layout="two">
                            <Input id="full-name" name="First Name" placeholder="Firstname" type="text" value={firstname} shade="100" size="L" onChange={(e: any) => { setFirstname(e.target.value) }} />
                            <Input id="full-name" name="Last Name" placeholder="Lastname" type="text" value={lastname} shade="100" size="L" onChange={(e: any) => { setLastname(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="email">Email</Label>
                        </InputGroup>
                        <InputGroup>
                            <Input id="email" name="Email" placeholder="example@domain.com" type="text" value={email} shade="100" size="L" iconBefore={<Icon value="envelope" />} onChange={(e: any) => { setEmail(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="description">Bio</Label>
                            <Text>Write a short introduction</Text>
                        </InputGroup>
                        <InputGroup>
                            <Textarea id="description" name="description" placeholder="Enter text here..." type="text" rows={10} columns={5} value={bio} shade="100" allowResize="vertical" style={{ "width": "100%" }} onChange={(e: any) => { setBio(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    {/* <InputGroup style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "8px" }}>
                        <InputGroup>
                            <Label htmlFor="level">Language</Label>
                            <Text>Choose the course language</Text>
                        </InputGroup>
                        <InputGroup>
                            <Select id="level" placeholder={"Select level"} options={languages} shade="200" onChange={(option: any) => { setLevel(option.title) }} />
                        </InputGroup>
                    </InputGroup> */}
                </Section.Content>
                {/* <Button type="submit" size="small" variant="solid" status="accent" content="text" >Save</Button> */}
            </Section>
            <Section id="password">
                <Section.Title>Password</Section.Title>
                <Section.Content>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="current-password">Current Password</Label>
                        </InputGroup>
                        <InputGroup>
                            <Input id="current-password" name="Current Password" placeholder="Current Password" type="password" value={currentPassword} shade="100" size="L" onChange={(e: any) => { setCurrentPassword(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="new-password">New Password</Label>
                        </InputGroup>
                        <InputGroup>
                            <Input id="new-password" name="New Password" placeholder="New Password" type="password" value={newPassword} shade="100" size="L" onChange={(e: any) => { setNewPassword(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                    <InputGroup layout="two">
                        <InputGroup>
                            <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                        </InputGroup>
                        <InputGroup>
                            <Input id="confirm-new-password" name="Confirm New Password" placeholder="Confirm New Password" type="password" value={confirmNewPassword} shade="100" size="L" onChange={(e: any) => { setConfirmNewPassword(e.target.value) }} />
                        </InputGroup>
                    </InputGroup>
                </Section.Content>
            </Section>
        </Form >
    )
}

export default SettingsForm