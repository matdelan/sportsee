import { RouterProvider, createBrowserRouter , defer} from 'react-router-dom'
import PageError from '../pages/pageerror/PageError'
import Profil from '../pages/profil/Profil'
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
      },
    ]
  }
])

/*
* Render page actually display
* @component
* @returns { React.Component }
*/
function Router() {
  return <RouterProvider router={router}/>
}

export default Router