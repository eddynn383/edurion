import sx from '@/styles/modules.module.scss'

const Content = ({ children }: any) => {
    return (
        <div className={sx['content']}>
            <div className={sx["content-inner"]}>
                {children}
            </div>
        </div>
    )
}

const Header = ({ children, left, center, right }: any) => {
    if (children && (left || center || right)) {
        throw new Error("Header component doesn't accept data via props and children at the same time. You need to choose only one method");
    }
    return (
        <div className={sx['content-header']}>
            <div className={sx["content-header-inner"]}>
                {left && <div className={sx["content-header-left"]}>{left}</div>}
                {center && <div className={sx["content-header-center"]}>{center}</div>}
                {right && <div className={sx["content-header-right"]}>{right}</div>}
                {children && <div className={sx["content-header-center"]}>{children}</div>}
            </div>
        </div>
    )
}

const Body = ({ children, orient = "vertical", leftWidth, rightWidth }: any) => {

    return (
        <div className={sx['content-body']} data-orient={orient}>
            <div className={sx["content-body-inner"]} style={orient === "horizontal" ? { "gridTemplateColumns": `${leftWidth ? leftWidth : "auto"} ${rightWidth ? rightWidth : "auto"}` } : {}}>
                {children}
            </div>
        </div>
    )
}

const Footer = ({ children, left, center, right }: any) => {
    if (children && (left || center || right)) {
        throw new Error("Footer component doesn't accept data via props and children at the same time. You need to choose only one method");
    }
    return (
        <div className={sx['content-footer']}>
            <div className={sx["content-footer-inner"]}>
                {left && <div className={sx["content-footer-left"]}>{left}</div>}
                {center && <div className={sx["content-footer-center"]}>{center}</div>}
                {right && <div className={sx["content-footer-right"]}>{right}</div>}
                {children && <div className={sx["content-footer-center"]}>{children}</div>}
            </div>
        </div>
    )
}

Content.Header = Header;
Content.Body = Body;
Content.Footer = Footer;


export default Content;