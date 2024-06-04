import { RouterProvider, createBrowserRouter , defer} from 'react-router-dom'
import PageError from '../pages/pageerror/PageError'
import Profil from '../pages/profil/Profil'
//import About from '../pages/about/About'
//import PageRental from '../pages/pagerental/PageRental'
import './routes.sass'
import Layout from '../layout/Layout'

const router = createBrowserRouter([
  {
    path: '/profil',
    element: <Layout/>,
    errorElement: <PageError/>,
    children: [
      {
        path: '',
        element: <Profil/>,
        loader: () => {
          const profilData = fetch('http://localhost:3000/user/12').then(r=>r.json())
          const activityData = fetch('http://localhost:3000/user/12/activity').then(r=>r.json())
          const averageData = fetch('http://localhost:3000/user/12/average-sessions').then(r=>r.json())
          const performanceData = fetch('http://localhost:3000/user/12/performance').then(r=>r.json())
          
          return defer({ profilData, activityData, averageData, performanceData })
        }
      },
    ]
  }
])

function Router() {
  return <RouterProvider router={router}/>
}

export default Router