import React, { useEffect, useState } from "react";
import "./Statistics.css";
import LineChart from "./LineChart";
import { getAccounts } from "../utils/api";

const Statistics = props => {
  const { operator, account } = props;
  const [operatorDetails, setOperatorDetails] = useState();

  useEffect(() => {
    getAccounts({
      address: account
    })
      .then(res => {
        console.log("stats:");
        console.log(res);
        const data = res.data[0];

        const operatorDetails = (
          <div>
            <li key={data.asset.operator.name}>Operator: {data.asset.operator.name}</li>
            <li key={data.address}>Account: {data.address}</li>
            <li key={data.asset.operator.totalDataTransactions}>
              Total data transactions: {data.asset.operator.totalDataTransactions}
            </li>
          </div>
        );
        setOperatorDetails(operatorDetails);
      })
      .catch(err => {
        console.log(err);
      });
  }, [account]);

  return (
    <div className="StatisticsWrapper">
      <div id="GDCoperators" className="statisticsMobile StatisticsTable1">
        <code>Click on a marker to view the operators details.</code>
        <ul>{operatorDetails}</ul>
      </div>
      <div id="operatorData" className="statisticsMobile StatisticsTable2">
        <LineChart operator={operator} account={account} />
      </div>
    </div>
  );
};
export default Statistics;
