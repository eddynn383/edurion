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
                    <PageTitle theme={theme} />
                </div>
                <div className={sx["head-right"]}>
                    <Button type="button" size="medium" variant="solid" status="accent" content="text" theme={theme}>Create</Button>
                    <Button type="button" size="medium" variant="neutral" status="neutral" surface="2" content="icon" theme={theme}>
                        <>
                            <Icon value="comment" theme={theme} />
                            <Badge value={55} max={50} theme={theme} size="medium" />
                        </>
                    </Button>
                    <Button type="button" size="medium" variant="neutral" status="neutral" surface="2" content="icon" theme={theme} >
                        <>
                            <Icon value="bell" theme={theme} />
                            <Badge value={1} theme={theme} size="small" />
                        </>
                    </Button>
                    <Profile id="profile-1" theme={theme} size="medium" />
                </div>
            </div>
        </div>
    )
}

export default PageHead