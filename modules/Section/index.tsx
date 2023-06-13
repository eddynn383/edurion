import sx from '../../styles/modules.module.scss'

const Section = ({ children, id }: any) => {
    return (
        <section className={sx["section"]} id={id}>{children}</section>
    )
}

const Title = ({ children }: any) => (
    <div className={sx['section-title']}>
        <h2>{children}</h2>
    </div>
)

const Content = ({ children, orient = "vertical" }: any) => (
    <div className={sx['section-content']} data-orient={orient}>
        {children}
    </div>
)

Section.Title = Title;
Section.Content = Content;


export default Section