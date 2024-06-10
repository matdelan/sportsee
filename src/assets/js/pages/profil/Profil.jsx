import Activity from "../../graph/activity/Activity.jsx"
import Infos from "../../components/tags/Tags.jsx"
import './profil.sass'
import {mock_data_user} from '../../mocks/user.js'
import LineGraph from "../../graph/line/LineGraph.jsx"
import RadarGraph from "../../graph/radar/RadarGraph.jsx"
import RadialGraph from "../../graph/radial/RadialGraph.jsx"
import LoadApi from "../../loadapi/LoadApi.jsx"

import icon_calories from '/icon_calories.svg'
import icon_proteines from '/icon_proteines.svg'
import icon_glucides from '/icon_glucides.svg'
import icon_lipides from '/icon_lipides.svg'
import Tags from "../../components/tags/Tags.jsx"
import {  Await, useLoaderData} from 'react-router-dom'

/*
* Render activity graph of the user profil page
* @component
* @returns { React.Component }
*/
export default function Profil() {
    //const name = mock_data_user.userInfos.firstName
    const todayScore = mock_data_user.todayScore

    const { profilData } = useLoaderData()
    const { activityData } = useLoaderData()
    const { averageData } = useLoaderData()
    const { performanceData } = useLoaderData()
    const name = profilData.userInfos.firstName
    return <>
    <div className="page">
        <Await resolve={profilData}>
            
            { (profilData) => 
                
                <div className="page__title">
                    <h1>Bonjour <span className="page__title-firstName">{profilData.data.userInfos.firstName}</span></h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>

            }
        </Await>

    <div className="page__content">
                <div className="page__left">
                    <div className="page__activity">
                            <Await resolve={activityData}>
                                {
                                    (activityData) =>
                                        <Activity sessions={activityData.data.sessions}/>
                                }
                                
                            </Await> 
                    </div>
                    <div className="page__list">
                        <div className="page__line">
                                <Await resolve={averageData}>
                                {
                                    (averageData) =>
                                        <LineGraph average={averageData.data.sessions}/>
                                }
                                
                                </Await>
                        </div>
                        <div className="page__radar">
                                <Await resolve={performanceData}>
                                    {
                                        (performanceData) =>
                                            <RadarGraph data={performanceData.data.data}/>
                                    }
                                    
                                </Await>
                            
                        </div>
                        <div className="page__radial">
                                <Await resolve={profilData}>
                                    {
                                        (profilData) =>
                                            <RadialGraph value={profilData.data.todayScore}/>
                                    }
                                    
                                </Await>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="page__right">
                            <Await resolve={profilData}>
                                {
                                    (profilData) =>
                                        <>
                                            <Tags  userKeyData={profilData.data.keyData.calorieCount} unit="KCal" subtitle="Calorie" logo={icon_calories}/>
                                            <Tags  userKeyData={profilData.data.keyData.proteinCount} unit="g" subtitle="Proteines" logo={icon_proteines}/>
                                            <Tags  userKeyData={profilData.data.keyData.carbohydrateCount} unit="g" subtitle="Glucides" logo={icon_glucides}/>
                                            <Tags  userKeyData={profilData.data.keyData.lipidCount} unit="g" subtitle="Lipides" logo={icon_lipides}/>
                                        </>
                                        
                                }
                            </Await>
                    
                </div>
            </div>

    </div>
    </>

}