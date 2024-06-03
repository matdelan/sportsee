import Activity from "../graph/activity/Activity.jsx"
import Infos from "../components/tags/Tags.jsx"
import './page.sass'
import {mock_data_user} from '../mocks/user.js'
import LineGraph from "../graph/line/LineGraph.jsx"
import RadarGraph from "../graph/radar/RadarGraph.jsx"
import RadialGraph from "../graph/radial/RadialGraph.jsx"
import LoadApi from "../loadapi/LoadApi.jsx"

import icon_calories from '/icon_calories.svg'
import icon_proteines from '/icon_proteines.svg'
import icon_glucides from '/icon_glucides.svg'
import icon_lipides from '/icon_lipides.svg'
import Tags from "../components/tags/Tags.jsx"


export default function Page() {
    const name = mock_data_user.userInfos.firstName
    const todayScore = mock_data_user.todayScore
    const user = LoadApi("http://localhost:3000/user/12")
    console.log(user.apiData)

    console.log(user.apiData)

    return <>
        
        <div className="page">
            <div className="page__title">
                <h1>Bonjour <span className="page__title-firstName">{name}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            
            <div className="page__content">
                <div className="page__left">
                    <div className="page__activity">
                        <Activity/>
                    </div>
                    <div className="page__list">
                        <div className="page__line">
                            <LineGraph/>
                        </div>
                        <div className="page__radar">
                            <RadarGraph/>
                        </div>
                        <div className="page__radial">
                            <RadialGraph value={todayScore}/>
                        </div>
                    </div>
                    
                </div>
                <div className="page__right">
                    <Tags  userKeyData={mock_data_user.keyData.calorieCount} unit="KCal" subtitle="Calorie" logo={icon_calories}/>
                    <Tags  userKeyData={mock_data_user.keyData.proteinCount} unit="g" subtitle="Proteines" logo={icon_proteines}/>
                    <Tags  userKeyData={mock_data_user.keyData.carbohydrateCount} unit="g" subtitle="Glucides" logo={icon_glucides}/>
                    <Tags  userKeyData={mock_data_user.keyData.lipidCount} unit="g" subtitle="Lipides" logo={icon_lipides}/>
                </div>
            </div>
        </div>
    </>
}