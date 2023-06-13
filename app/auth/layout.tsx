import Image from 'next/image'
import imageUrl from '@/public/assets/images/login.jpg'
import Logo from '@/components/Logo';

import { getUserPreferences } from '@/lib/getData';
import { Theme } from '@/interfaces/global';

import sx from "@/styles/layout.module.scss";
interface IPropsAuthLayout {
    children: React.ReactNode;
}


export default async function AuthLayout({ children }: IPropsAuthLayout) {
    const year = new Date().getFullYear();
    const prefs = await getUserPreferences()
    const theme = prefs?.themeMode as Theme

    return (
        <div className={sx["auth"]}>
            <div className={sx["left"]}>
                <div className={sx["inner"]}>
                    <div className={sx["logo"]}>
                        <Logo alt="Edurion Logo" theme={theme} />
                    </div>
                    <div className={sx["form"]}>
                        {children}
                    </div>
                    <div className={sx["copyright"]}>
                        {`@ ${year} Boboc Eduard. All rights reserved.`}
                    </div>
                </div>
            </div>
            <div className={sx.right}>
                <div className={sx.inner}>
                    <div className={sx.wallpaper}>
                        <Image className={sx.image} src={imageUrl} alt="Auth Wallpaper" />
                    </div>
                </div>
            </div>
        </div>
    )
}