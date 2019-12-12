import React from "react";
import { Marker, Tooltip } from "react-leaflet";

const Markers = ({ operatorsInfo, markerClicked }) => {
  console.log("Markers:");
  console.log(operatorsInfo);
  //const { operatorsInfo } = operatorsInfo;

  const markerComponents = operatorsInfo.map(data => (
    <Marker
      key={data.userName}
      position={[data.lat, data.lng]}
      onClick={() => markerClicked([data.userName, data.account])}
    >
      <Tooltip>
        Operator: {data.userName}
        <br />
        Total data transactions: {data.totalDataTransactions}
      </Tooltip>
    </Marker>
  ));

  return <div>{markerComponents}</div>;
};

export default Markers;
