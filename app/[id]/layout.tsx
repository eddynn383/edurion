import { Suspense } from 'react';
import Main from "@/modules/Main";

import Menu from "@/components/Menu";
import { IMenuItem } from "@/components/MenuItem/interface";
import { getUserPreferences } from '@/lib/getData';
import { Theme } from "@/interfaces/global";
import Logo from '@/components/Logo';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import PageTitle from '@/components/PageTitle';
import Profile from "@/components/Profile"
import Header from '@/modules/Header';
import sx from "@/styles/layout.module.scss";

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
        title: "Management",
        url: "/management",
        icon: "suitcase",
        children: [
            {
                title: "Courses",
                url: "/management/courses",
                icon: "book-open"
            },
            {
                title: "Users",
                url: "/management/users",
                icon: "users"
            },
            {
                title: "Tests",
                url: "/management/test",
                icon: "vials",
                children: [
                    {
                        title: "Buttons",
                        url: "/management/test/buttons",
                        icon: "play",
                    },
                    {
                        title: "Upload",
                        url: "/management/test/upload",
                        icon: "upload",
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
        children: [
            {
                title: "Profile",
                url: "/settings/profile",
                icon: "user"
            },
            {
                title: "Account",
                url: "/settings/account",
                icon: "gear"
            },
            {
                title: "Appearance",
                url: "/settings/appearance",
                icon: "paintbrush",
            }
        ]
    }
]

export default async function UserLayout({ children }: IPropsUserLayout) {
    const prefs = await getUserPreferences()
    const theme = prefs?.themeMode as Theme


    return (
        <div className={sx["main"]}>
            <div className={sx["left"]}>
                <div className={sx["inner"]}>
                    <div className={sx["logo"]}>
                        <Logo alt="Edurion Logo" theme={theme} />
                    </div>
                    <div className={sx["menu"]}>
                        <Suspense fallback={<p>Loading navigation...</p>}>
                            {staticMenu && <Menu data={staticMenu} />}
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className={sx["right"]}>
                <div className={sx["inner"]}>
                    <Header>
                        <Header.Left>
                            <PageTitle />
                        </Header.Left>
                        <Header.Right>
                            <Button type="button" mode="primary" variant="solid" status="accent" size="M" content="text" >Create</Button>
                            <Button type="button" mode="secondary" variant="solid" status="accent" shade="150" size="M" content="icon" >
                                <>
                                    <Icon value="comment" />
                                    <Badge value={55} max={50} size="medium" />
                                </>
                            </Button>
                            <Button type="button" mode="secondary" variant="solid" status="accent" shade="150" size="M" content="icon"  >
                                <>
                                    <Icon value="bell" />
                                    <Badge value={1} size="small" />
                                </>
                            </Button>
                            <Profile id="profile-1" size="M" />
                        </Header.Right>
                    </Header>
                    <Main>
                        <Suspense fallback={<p>Loading...</p>}>
                            {children}
                        </Suspense>
                    </Main>
                </div>
            </div>
        </div>
    )
}