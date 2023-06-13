import sx from '../../styles/modules.module.scss'

const Header = ({ children }: any) => {
    return (
        <header className={sx['header']}>
            <div className={sx["header-inner"]}>
                {children}
            </div>
        </header>
    )
}

const Left = ({ children }: any) => (
    <div className={sx["header-left"]}>
        {children}
    </div>
)

const Right = ({ children }: any) => (
    <div className={sx["header-right"]}>
        {children}
    </div>
)

Header.Left = Left;
Header.Right = Right;

export default Header