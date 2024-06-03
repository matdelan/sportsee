import Header from '../components/header/Header'
import Page from '../pages/Page'
import Aside from '../components/aside/Aside'
import './layout.sass'

export default function Layout() {
    return <>
      <Header/>
      <div className="body">
        <Aside />
        <div className="content">
          <Page/>
        </div>
      </div>
    </>
}