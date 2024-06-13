import Activity from "../../graph/activity/Activity.jsx"
import Infos from "../../components/tags/Tags.jsx"
import './profil.sass'
import {mock_data_user} from '../../mocks/user.js'
import LineGraph from "../../graph/line/LineGraph.jsx"
import RadarGraph from "../../graph/radar/RadarGraph.jsx"
import RadialGraph from "../../graph/radial/RadialGraph.jsx"
import LoadApi from "../../useFetchData/useFetchData.jsx"

import icon_calories from '/icon_calories.svg'
import icon_proteines from '/icon_proteines.svg'
import icon_glucides from '/icon_glucides.svg'
import icon_lipides from '/icon_lipides.svg'
import Tags from "../../components/tags/Tags.jsx"
import {  Await, useLoaderData} from 'react-router-dom'
import useFetchData from "../../useFetchData/useFetchData.jsx"

/*
* Render activity graph of the user profil page
* @component
* @returns { React.Component }
*/
export default function Profil() {
    const userId = "12"

    const url = `http://localhost:3000/user/${userId}`

    const { data, loading, error } = useFetchData(url);

    const renderChart = (user) => (
        <>
        <div className="page">
            <div className="page__title">
                <h1>Bonjour <span className="page__title-firstName">{user.userInfos.firstName}</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        <div className="page__content">
                    <div className="page__left">
                        <div className="page__activity">
                            <Activity id={userId} />  
                        </div>
                        <div className="page__list">
                            <div className="page__line">
                                <LineGraph id={userId}/>
                            </div>
                            <div className="page__radar">
                                <RadarGraph id={userId}/>
                            </div>
                            <div className="page__radial">
                                <RadialGraph id={userId}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="page__right">
                        <Tags  userKeyData={user.keyData.calorieCount} unit="KCal" subtitle="Calorie" logo={icon_calories}/>
                        <Tags  userKeyData={user.keyData.proteinCount} unit="g" subtitle="Proteines" logo={icon_proteines}/>
                        <Tags  userKeyData={user.keyData.carbohydrateCount} unit="g" subtitle="Glucides" logo={icon_glucides}/>
                        <Tags  userKeyData={user.keyData.lipidCount} unit="g" subtitle="Lipides" logo={icon_lipides}/>
                    </div>
                </div>

        </div>
    </>
    )

    if (loading) {
        return <>
        <div className="page">
        
            <div className="page__title">
                Loading ...
            </div>

            <div className="page__content">
                    <div className="page__left">
                        <div className="page__activity">
                            <Activity id={userId} />  
                        </div>
                        <div className="page__list">
                            <div className="page__line">
                                <LineGraph id={userId}/>
                            </div>
                            <div className="page__radar">
                                <RadarGraph id={userId}/>
                            </div>
                            <div className="page__radial">
                                <RadialGraph id={userId}/>
                            </div>
                        </div>
                        
                    </div>
                </div>

        </div>
        
        </>
    }

    const user = error ? mock_data_user : data.data;
    
    return renderChart(user);

}