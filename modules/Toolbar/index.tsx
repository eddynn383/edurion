"use client"

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import sx from '@/styles/modules.module.scss'
import { useRouter } from 'next/navigation'

const Toolbar = ({ type = "header" }) => {
    const router = useRouter()

    return (
        <div className={sx["toolbar"]}>
            <div className={sx["toolbar-left"]}>
                {type === "header" && <Input id="search" name="search" placeholder="Search" type="text" shade="200" iconAfter={<Icon value="magnifying-glass" />} variant="solid" />}
                {type === "footer" && <Button type="button" mode="secondary" variant="outline" size="S" >Reset</Button>}
            </div>
            <div className={sx["toolbar-right"]}>
                {type === "header" && <Button type="button" mode="primary" size="M" content="icon" shade="150" onClick={() => router.push('/management/courses/new')} ><Icon value="plus" /></Button>}
                {type === "header" && <Button type="button" mode="secondary" size="M" content="icon" status="accent" shade="100" ><Icon value="filter" /></Button>}
                {type === "footer" && <Button type="button" mode="secondary" size="S" disabled>Prev</Button>}
                {type === "footer" && <Button type="button" mode="secondary" size="S" >Next</Button>}
            </div>
        </div>
    )
}

export default Toolbar