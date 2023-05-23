"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import ProfileAvatar from "@/public/assets/images/profile-avatar.png";
import Avatar from "@/components/Avatar";
import sx from "@/styles/component.module.scss";
import Link from "../Link";
import Button from "../Button";

const Profile = ({ data, id, theme = "light", size }: any) => {
    const { data: session, status } = useSession()
    const [dropdownVisiblity, setDropdownVisiblity] = useState(false)

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (!session) {
        return <div>You are not logged in</div>
    }

    const user = session?.user
    const { image, name, email, roles }: any = user
    const role = roles[roles.length - 1]

    return (
        <div className={sx["profile"]} id={id} data-theme={theme} data-size={size} onClick={() => setDropdownVisiblity(prev => !prev)} aria-expanded={dropdownVisiblity} >
            <div className={sx["profile-button"]}>
                <div className={sx["profile-left"]}>
                    <Avatar src={image ? image : ProfileAvatar} alt={email} theme={theme} size={size} type="square" />
                </div>
                <div className={sx["profile-right"]}>
                    <span className={sx["profile-name"]}>{name ? name : email}</span>
                    {size !== "small" && <span className={sx["profile-role"]}>{role}</span>}
                </div>
            </div>
            {
                dropdownVisiblity &&
                <div className={sx["dropdown"]}>
                    <ul>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link href="/my-purchases">My Purchases</Link>
                        </li>
                        <li>
                            <Link href="/settings">Settings</Link>
                        </li>
                        <li>
                            <Button type="button" size="small" onClick={signOut}>Log Out</Button>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Profile