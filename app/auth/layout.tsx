import Image from 'next/image'
import imageUrl from '@/public/assets/images/login.jpg'
import LightLogo from '@/public/assets/images/edurion-light.svg'
import DarkLogo from '@/public/assets/images/edurion-dark.svg'

import sx from "@/styles/layout.module.scss";

interface IPropsAuthLayout {
    children: React.ReactNode;
}


export default function AuthLayout({ children }: IPropsAuthLayout) {
    const year = new Date().getFullYear();

    return (
        <div className={sx["auth"]}>
            <div className={sx["left"]}>
                <div className={sx["inner"]}>
                    <div className={sx["logo"]}>
                        <Image className={sx["volvo"]} src={DarkLogo} alt="Volvo" />
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

    // <section data-type="test">{children}</section>;
}