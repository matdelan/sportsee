import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts"
import CustomToolTip from "./CustomToolTip.jsx"
import './activity.sass'
import {mock_data_activity} from '../../mocks/activity.js'
import useFetchData from "../../useFetchData/useFetchData.jsx"
import { useState } from "react"

/*
* Render activity bartchart
* @param {integer} id - user id
* @component
* @returns { React.Component }
*/
export default function Activity({id}) {

  const url = `http://localhost:3000/user/${id}/activity`;
  const { data, loading, error } = useFetchData(url);

  const renderChart = (sessions) => (
    <>
      <h3 className="activity__title">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={835}
          height={420}
          data={sessions}
          margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={20}
            tickFormatter={(day) => new Date(day).getDate()}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={20}
            tick={{ fill: '#9B9EAC' }}
            tickLine={false}
            axisLine={false}
            tickCount={3}
            domain={['dataMin-2', 'dataMax+1']}
          />
          <YAxis hide yAxisId="calories" />
          <Tooltip content={<CustomToolTip />} />
          <Legend align="right" verticalAlign="top" iconType="circle" height={80} />
          <Bar
            name="Poids (kg)"
            radius={[20, 20, 0, 0]}
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={6}
          />
          <Bar
            name="Calories brûlées (kCal)"
            radius={[20, 20, 0, 0]}
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={6}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const sessions = error ? mock_data_activity.sessions : data.data.sessions;

  return renderChart(sessions);
  
}