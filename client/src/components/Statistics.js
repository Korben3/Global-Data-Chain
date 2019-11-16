import React, { useEffect, useState } from "react";
import "./Statistics.css";
import LineChart from "./LineChart";
import { getTransactions } from "../utils/api";

const Statistics = props => {
  const [operator, setOperator] = useState("korben3");
  const [account, setAccount] = useState("5320901975065898377L");
  const [GDCoperators, setGDCoperators] = useState();

  const viewOperatorData = data => {
    setOperator(data[0]);
    setAccount(data[1]);
  };

  useEffect(() => {
    getTransactions({
      type: 101,
      sort: "timestamp:desc",
      limit: 6
    })
      .then(res => {
        console.log(res.data);

        const GDCoperators = res.data.map(data => (
          <li key={data.asset.operator.name}>
            Operator:
            <a href="#" onClick={() => viewOperatorData([data.asset.operator.name, data.senderId])}>
              {data.asset.operator.name}
            </a>
          </li>
        ));

        setGDCoperators(GDCoperators);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="StatisticsWrapper">
      <div id="GDCoperators" className="statisticsMobile StatisticsTable1">
        <code>Click on an operator to view the noise measurements:</code>
        <ul>{GDCoperators}</ul>
      </div>
      <div id="operatorData" className="statisticsMobile StatisticsTable2">
        <LineChart operator={operator} account={account} />
      </div>
    </div>
  );
};
export default Statistics;
