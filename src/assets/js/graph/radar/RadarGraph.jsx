import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
  } from "recharts";
  import {mock_data_performance} from '../../mocks/performance.js'
  
  export default function RadarGraph() {

    const data = mock_data_performance.data

    const kindResult = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    }

    const order = ['Intensité','Vitesse','Force','Endurance','Energie','Cardio']
    const dataResult = data.map(({value, kind}) =>  ({
      value,
      kind : kindResult[kind]
    }))

    const sortedData = order.map((kind) => 
      dataResult.filter((d) => d.kind === kind)[0]
    )


    return (
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
    );
  }