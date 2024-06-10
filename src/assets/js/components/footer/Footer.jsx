import "./footer.sass"

/*
* Render Footer
* @component
* @returns { React.Component }
*/
export default function Footer() {

    return <>
        <footer className="footer">
            <p className='footer__content'>Copiryght, SportSee {new Date().getFullYear()}</p>
        </footer>
    </>
}
