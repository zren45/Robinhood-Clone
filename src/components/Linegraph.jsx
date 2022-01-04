import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";
import Spinner from "react-bootstrap/Spinner";

import "./LineGraph.css";

//
import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function LineGraph() {
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartType] = useState("1m");
  const [loading, setLoading] = useState(true);

  // const getStocksData = (stock) => {

  // };
  let BASE_URL = "https://sandbox.iexapis.com/stable/stock/";
  let key = "Tpk_485d53051788445bbb5c2ce88556c821";
  let KEY_URL = `/chart/${chartType}?token=${key}`;

  useEffect(() => {
    // axios
    //   .get(`${BASE_URL}AAPL${KEY_URL}`)
    //   .then((res) => {
    //     // console.log(res);
    //     setChartData(res.data);
    //   })
    //   .catch((err) => {
    //     console.warn(`canceled, error: ${err}`);
    //   });
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}AAPL${KEY_URL}`);
        const json = await response.json();
        // console.log(json);
        setChartData(json);
        setLoading(false);

        // setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [KEY_URL, BASE_URL]);

  return (
    <div className="linegraph">
      {loading ? (
        <div className="spinnerContainer">
          <Spinner animation="border" style={{ color: "rgb(0 200 5)" }} />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={196}>
          <LineChart width={500} height={300} data={chartData}>
            <Tooltip
              cursor={{ stroke: "rgba(138,151,158,1)", strokeWidth: 0.8 }}
              content={CustomTooltip}
              isAnimationActive={false}
              position={{ y: -40 }}
            />
            <YAxis type="number" domain={["dataMin", "dataMax"]} hide="true" />
            <Line
              type="monotone"
              dataKey="close"
              dot={false}
              stroke="rgb(0 200 5)"
              strokeWidth={3}
              animationEasing="ease"
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      <Timeline childToParent={(chartType) => setChartType(chartType)} />
    </div>
  );
}

export default LineGraph;

const CustomTooltip = ({ active, payload, label }) => {
  // console.log(payload);
  if (active && payload !== undefined) {
    return (
      <div
        className="tooptip__wrapper"
        style={{
          position: "relative",
          right: "50px",
        }}
      >
        <div
          className="tooptip__date"
          style={{ fontSize: "16px", color: "rgba(138,151,158,1)" }}
        >
          {payload[0].payload.label}
        </div>
        <div
          className="tooptip__price"
          style={{ fontSize: "16px", color: "rgba(138,151,158,1)" }}
        >
          ${`${payload[0].value}`}
        </div>
      </div>
    );
  }

  return null;
};
