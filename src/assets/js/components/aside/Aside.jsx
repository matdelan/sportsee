import "./aside.sass"
import icon_yogi from '/icon_yogi.svg'
import icon_swim from '/icon_swim.svg'
import icon_bike from '/icon_bike.svg'
import icon_alter from '/icon_alter.svg'
import Footer from '../footer/Footer'

/*
* Render aside 4 icons
* @component
* @returns { React.Component }
*/
export default function Aside(){

    return <>
        <aside>
            <nav className="aside__nav">
                <ul className="aside__ul">
                    <li className="aside__li"><img src={icon_yogi}className="aside__icon" alt="icon yogi" /></li>
                    <li className="aside__li"><img src={icon_swim}className="aside__icon" alt="icon swim" /></li>
                    <li className="aside__li"><img src={icon_bike}className="aside__icon" alt="icon bike" /></li>
                    <li className="aside__li"><img src={icon_alter}className="aside__icon" alt="icon alter" /></li>
                </ul>
            </nav>
            <Footer />
        </aside>
    </>
}