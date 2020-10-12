export const Footer = ({ className = "", path }) => {

    if (path !== "/") {
        return null;
    }

    return (
        <footer className={className.footer}>
            <img src="/js.png" alt=""/>
            <img src="/next-js.png" alt=""/>
            <img src="/material-UI.png" alt=""/>
            <img src="/html-css.png" alt=""/>
            <img src="/react-js.png" alt=""/>
        </footer>
    )
}