import Header from '../components/header/Header'
import Aside from '../components/aside/Aside'
import './layout.sass'
import { Outlet } from 'react-router-dom'

/*
* Render layout page between React router dom page
* @component
* @returns { React.Component }
*/
export default function Layout() {
    return <>
    <div className="profil">
      <Header/>
      <div className="body">
        <Aside />
        <div className="content">
          <Outlet/>
        </div>
      </div>
    </div>
    </>
}