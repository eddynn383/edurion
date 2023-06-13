"use client"

import Avatar from "@/components/Avatar";
import Cover from "@/components/Cover";
import defaultAvatar from "@/public/assets/images/avatar-placeholder.svg";
import defaultCover from "@/public/assets/images/cover-placeholder.jpg";

import { IPropsUserProfile } from "./interface";
import sx from "@/styles/component.module.scss";

const UserProfile = ({ avatar, cover, name, email }: IPropsUserProfile) => {

    return (
        <div className={sx["user-profile"]}>
            <Cover src={cover ? cover : defaultCover} alt="test" width={1080} height={80} />
            <div className={sx["user-profile-info"]}>
                <Avatar src={avatar ? avatar : defaultAvatar} alt="user profile" size="XXL" type="circle" />
                <div className={sx["user-profile-details"]}>
                    <h3>{name ? name : "Undefined"}</h3>
                    <p>{email ? email : "Undefined"}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile