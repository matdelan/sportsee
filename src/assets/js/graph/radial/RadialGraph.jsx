import { PieChart, Pie, ResponsiveContainer } from "recharts";
import './radialGraph.sass'
import useFetchData from "../../useFetchData/useFetchData";
import {mock_data_user} from '../../mocks/user.js'

const dataGraph = [
  { name: "", value: 0.1 },

];

/*
* Render activity tooltip when cursor ar on a data
* @param {integer} id - user id
* @component
* @returns { React.Component }
*/
export default function RadialGraph({ id }) {
  
    const url = `http://localhost:3000/user/${id}`

    const { data, loading, error } = useFetchData(url);

    const renderChart = (angle, pourcent) => (
      <ResponsiveContainer className="radial__box" width="100%" height="100%">
      <PieChart className="radial__pie" width={400} height={400}>
        <Pie
          data={dataGraph}
          cx={160}
          cy={150}
          innerRadius={110}
          outerRadius={128}
          fill="#E60000"
          paddingAngle={5}
          dataKey="value"
          startAngle={90}
          endAngle={angle}
          className="pie__radial"
          cornerRadius={10}
        >
        </Pie>
        
      </PieChart>
      <div className="radial__text"><span className="radial__text-pourcent">{pourcent}% </span><br/><span className="radial__text-info">de votre objectif</span></div>
      <div className="radial__title">
        Score
      </div>
      </ResponsiveContainer>
    )
  
    if (loading) {
      return <div>Loading...</div>;
    }

  
  const value = error ? mock_data_user.todayScore : data.data.todayScore;

  
  const pourcent = value * 100
  const angle =  (value * 360) + 90

  return renderChart(angle, pourcent)
}