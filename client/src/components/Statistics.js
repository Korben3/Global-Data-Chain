import React, { useEffect, useState } from "react";
import "./Statistics.css";
import LineChart from "./LineChart";
import { getAccounts } from "../utils/api";

const Statistics = props => {
  const [operator, setOperator] = useState("korben3");
  const [account, setAccount] = useState("5320901975065898377L");
  const [GDCoperators, setGDCoperators] = useState();

  const viewOperatorData = data => {
    setOperator(data[0]);
    setAccount(data[1]);
  };

  useEffect(() => {
    getAccounts({
      limit: 7
    })
      .then(res => {
        console.log("Statistics, accounts:");

        const data = res.data.filter(item => item.asset.operator);
        const GDCoperators = data.map(item => (
          <li key={item.asset.operator.name}>
            Operator:
            <span
              onClick={() => viewOperatorData([item.asset.operator.name, item.address])}
              className="operatorButton"
            >
              {item.asset.operator.name}
            </span>
          </li>
        ));
        console.log(GDCoperators);

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
