import {useRouteError} from 'react-router-dom'
import Header from '../../components/header/Header'
import './pageError.sass'

/*
* Render page error
* @component
* @returns { React.Component }
*/
export default function PageError() {
    const error = useRouteError()
    return <>
        <Header/>
        <div className='pe'>
            <p className='pe__number'>404</p>
            <h2 className='pe__title'>La page n'existe pas</h2>
            <p className='pe__content'>{error?.error?.toString() ?? error?.toString()}</p>
            <a href="/" className='pe__link'>Retourner sur la page d’accueil</a>
        </div>
    </>
}