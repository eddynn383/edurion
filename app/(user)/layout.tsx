"use client"

import { Suspense } from 'react';
import Image from "next/image";
import PageHead from "@/modules/PageHead";
import PageBody from "@/modules/PageBody";
import LightLogo from "@/public/assets/images/logo-light.svg";
import DarkLogo from "@/public/assets/images/logo-dark.svg";
import sx from "@/styles/layout.module.scss";
import Menu from "@/components/Menu";
import { IMenuItem } from "@/components/MenuItem/interface";

import { useTheme } from 'next-themes'
import { Theme } from "@/interfaces/global";

interface IPropsUserLayout {
    children: React.ReactNode;
    catalog: any;
}

const staticMenu: IMenuItem[] = [
    {
        title: "Dashboard",
        url: "/dashboard/0001",
        icon: "gauge",
    },
    {
        title: "Catalog",
        url: "/catalog",
        icon: "book",
    },
    {
        title: "Manager",
        url: "/management",
        icon: "suitcase",
        children: [
            {
                title: "Courses",
                url: "/courses",
                icon: "book-open"
            },
            {
                title: "Users",
                url: "/users",
                icon: "users"
            },
            {
                title: "Tests",
                url: "/tests",
                icon: "vials",
                children: [
                    {
                        title: "Test 1",
                        url: "/test-1",
                        icon: "vial",
                    },
                    {
                        title: "Test 2",
                        url: "/test-2",
                        icon: "vial",
                    }
                ]
            }
        ]
    },
    {
        title: "Learning Area",
        url: "/learning-area",
        icon: "laptop",
    },
    {
        title: "Settings",
        url: "/settings",
        icon: "gears",
    }
]

export default function UserLayout({ children }: IPropsUserLayout) {

    const { resolvedTheme } = useTheme()
    const theme: any = resolvedTheme

    return (
        <div className={sx.main}>
            <div className={sx.left}>
                <div className={sx.inner}>
                    <div className={sx.logo}>
                        <Image className={sx.volvo} src={DarkLogo} alt="Volvo" />
                    </div>
                    <div className={sx.menu}>
                        <Suspense fallback={<p>Loading navigation...</p>}>
                            {staticMenu && <Menu data={staticMenu} theme={theme} />}
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className={sx.right}>
                <div className={sx.inner}>
                    <PageHead theme={theme} />
                    {/* <PageBody > */}
                    {children}
                    {/* </PageBody> */}
                </div>
            </div>
        </div>
    )
}