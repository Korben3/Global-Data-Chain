import React from "react";
import { Marker, Popup } from "react-leaflet";

const Markers = props => {
  console.log("Markers:");
  console.log(props);
  const { operatorsInfo } = props;

  const clicked = data => {
    // update LineChart on click
    console.log("Marker clicked: " + data[0]);
    console.log(data[1]);
  };

  const markerComponents = operatorsInfo.map(data => (
    <Marker
      key={data.userName}
      position={[data.lat, data.lng]}
      onClick={() => clicked([data.userName, data.account])}
    >
      <Popup>Operator: {data.userName}</Popup>
    </Marker>
  ));

  return <div>{markerComponents}</div>;
};

export default Markers;
