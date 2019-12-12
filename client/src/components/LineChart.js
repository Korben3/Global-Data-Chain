import React, { useEffect, useState } from "react";
import "../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, makeWidthFlexible, HorizontalGridLines, XAxis, YAxis } from "react-vis";
import { getTransactions } from "../utils/api";

const LineChart = props => {
  const [operatorsData, setOperatorsData] = useState([]);
  console.log(props);

  useEffect(() => {
    // retrieve data from selected or default operator
    getTransactions({
      type: 104,
      sort: "timestamp:desc",
      limit: 10,
      senderId: props.account
    })
      .then(res => {
        console.log(res.data);

        let data = res.data.reverse();
        let tempArray = [];
        let operatorsData = [];
        data.forEach((item, index) => {
          if (typeof item.asset.dataValue !== "undefined") {
            tempArray = {};
            tempArray["x"] = index + 1;
            tempArray["y"] = parseFloat(item.asset.dataValue);
            operatorsData.push(tempArray);
          }
        });
        setOperatorsData(operatorsData);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.account]);

  const FlexibleXYPlot = makeWidthFlexible(XYPlot);

  return (
    <div>
      <code>Last 10 measurements of operator: {props.operator}</code>
      <FlexibleXYPlot height={180}>
        <HorizontalGridLines />
        <XAxis title="time" />
        <YAxis title="dBA" />
        <LineSeries data={operatorsData} color="#044035" />
      </FlexibleXYPlot>
    </div>
  );
};

export default LineChart;
