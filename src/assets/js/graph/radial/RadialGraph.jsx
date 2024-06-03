/*import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    uv: 12,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 12,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

export default function RadialGraph({value}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={20}
        data={data}
        >
        <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
        />
        </RadialBarChart>
    </ResponsiveContainer>
  );
}*/

import { PieChart, Pie, Sector, Cell } from "recharts";
import './radialGraph.sass'

const data = [
  { name: "", value: 0.1 },

];
/*
    12% en deg
    0.12 * 360 = 43.2 + 90 (angle de départ) = 133.2

*/

export default function RadialGraph({value}) {
    const pourcent = value * 100
    const angle =  (value * 360) + 90
  return (
    <>
    <PieChart className="radial__pie" width={800} height={400}>
      <Pie
        data={data}
        cx={150}
        cy={130}
        innerRadius={68}
        outerRadius={80}
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
    <div className="radial__content">{pourcent}% <br/><span className="radial__content-text">de votre objectif</span></div>
    </>
  );
}