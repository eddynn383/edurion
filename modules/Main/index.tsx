import sx from '@/styles/modules.module.scss'

const Main = ({ children }: any) => {
    return (
        <main className={sx["main"]}>
            <div className={sx["main-inner"]}>
                {children}
            </div>
        </main>
    )
}

export default Main