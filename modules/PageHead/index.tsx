import Badge from "@/components/Badge"
import Button from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import Profile from "@/components/Profile"
import Icon from "@/components/Icon"

import sx from '../../styles/modules.module.scss'

const PageHead = ({ theme }: any) => {

    return (
        <div className={sx["head"]} data-theme={theme}>
            <div className={sx["head-inner"]}>
                <div className={sx["head-left"]}>
                    <PageTitle />
                </div>
                <div className={sx["head-right"]}>
                    <Button type="button" mode="primary" variant="solid" status="accent" size="M" content="text" >Create</Button>
                    <Button type="button" mode="secondary" variant="solid" status="accent" shade="150" size="M" content="icon" >
                        <>
                            <Icon value="comment" theme={theme} />
                            <Badge value={55} max={50} size="medium" />
                        </>
                    </Button>
                    <Button type="button" mode="secondary" variant="solid" status="accent" shade="150" size="M" content="icon" >
                        <>
                            <Icon value="bell" />
                            <Badge value={1} size="small" />
                        </>
                    </Button>
                    <Profile id="profile-1" size="M" />
                </div>
            </div>
        </div>
    )
}

export default PageHead