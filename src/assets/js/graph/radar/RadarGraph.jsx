import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
  } from "recharts";
import {mock_data_performance} from '../../mocks/performance.js'
import useFetchData from "../../useFetchData/useFetchData.jsx"
  
/*
* Render activity tooltip when cursor ar on a data
* @param {integer} id - user id
* @component
* @returns { React.Component }
*/
  export default function RadarGraph({id}) {

    const url = `http://localhost:3000/user/${id}/performance`

    const { data, loading, error } = useFetchData(url);


    const renderChart = (sortedData) => (
      <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx={160}
          cy={150}
          outerRadius={100}
          width={100}
          height={100}
          data={sortedData}
        >
          <PolarGrid radialLines={false} stroke="white"/>
          <PolarAngleAxis 
            dataKey="kind"
            stroke="white"
            tickLine={false}  
            tickSize={14}
            dy={4}
          />
          <Radar
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  )

  if (loading) {
    return <div>Loading...</div>;
  }

  const sessions = error ? mock_data_performance.data : data.data.data;

  const dataImport = sessions

    const kindResult = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    }

    const order = ['Intensité','Vitesse','Force','Endurance','Energie','Cardio']
    const dataResult = dataImport.map(({value, kind}) =>  ({
      value,
      kind : kindResult[kind]
    }))

    const sortedData = order.map((kind) => 
      dataResult.filter((d) => d.kind === kind)[0]
    )

  return renderChart(sortedData);
}