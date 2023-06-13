import sx from '../../styles/modules.module.scss'

const Side = ({ children }: any) => {
    return (
        <aside className={sx["side-content"]}>{children}</aside>
    )
}


export default Side