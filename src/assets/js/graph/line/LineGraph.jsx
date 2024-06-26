import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Text,
    ResponsiveContainer,
  } from "recharts";
import './lineGraph.sass'  
import {mock_data_sessions} from '../../mocks/average_sessions.js'
import CustomToolTip from "./CustomToolTip.jsx";
import useFetchData from "../../useFetchData/useFetchData.jsx";
  
/*
* Render line graph activity of the user
* @param {integer} id - user id
* @component
* @returns { React.Component }
*/
export default function LineGraph({ id }) {


  const jour = (value) => {
		if (value === 1) return 'L'
		if (value === 2) return 'M'
		if (value === 3) return 'M'
		if (value === 4) return 'J'
		if (value === 5) return 'V'
		if (value === 6) return 'S'
		if (value === 7) return 'D'
	}
  const url = `http://localhost:3000/user/${id}/average-sessions`

  const { data, loading, error } = useFetchData(url);

  const renderChart = (sessions) => (
    <>
      <h3 className="lineGraph__title">
            Durée moyenne des<br/>
            sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={sessions} margin={{top: 100, right: 0, left: 0, bottom: 30,}}>
          <XAxis 
            dataKey="day" 
            padding={{ left: 10, right: 10 }} 
            tickFormatter={jour} 
            axisLine={false} 
            tickLine={false} 
            tick={{	fill: 'rgba(255,255,255,0.6)',	fontSize: '0.75rem',}} 
            tickMargin={20}
          />
          <YAxis hide />
          <Tooltip content={<CustomToolTip/>}/>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    
    </>
  )

  if (loading) {
    return <div>Loading...</div>;
  }

  const sessions = error ? mock_data_sessions.sessions : data.data.sessions;

  return renderChart(sessions);
  
}