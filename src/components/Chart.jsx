import React from "react";
import { LineChart, Line,Area } from "recharts";
import "./Chart.css";

export const Graph = () => {
  const data = [
    { name: "Page A", uv: 180, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 175, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 175, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 220, pv: 2400, amt: 2400 },
    { name: "Page F", uv: 190, pv: 2400, amt: 2400 },
    { name: "Page G", uv: 230, pv: 2400, amt: 2400 },
    { name: "Page H", uv: 200, pv: 2400, amt: 2400 },
  ];
  return (
    <div>
      <div className="upper">
        <div className="upper">
          <div className="icon-graph"></div>
         <>LOwer:$4.895</>
        </div>
        <div>
        <div className="icon-graph"></div>
         <> Higher:$6.857</>
        </div>
      </div>
      <LineChart width={240} height={100} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#FFFF00" fill="yellow" dot={false} strokeWidth={3}/>
      </LineChart>
      <div>
      <div className="icon"></div>
       1BTC = $5.483
      </div>
    </div>
  );
};