import React, { useEffect, useState } from "react";
import "./WorldMap.css";
import Markers from "./Markers";
import { getTransactions } from "../utils/api";
import { Map, TileLayer } from "react-leaflet";

const WorldMap = () => {
  const [operatorsInfo, setOperatorsInfo] = useState([]);

  console.log("WorldMap: ");

  useEffect(() => {
    // retrieve operators and place them on the WorldMap
    getTransactions({
      type: 101,
      sort: "timestamp:desc",
      limit: 6
    })
      .then(res => {
        console.log(res.data);

        let tempArray = [];
        let operatorsInfo = [];
        res.data.forEach(item => {
          if (typeof item.asset.operator.name !== "undefined") {
            tempArray = {};
            tempArray["userName"] = item.asset.operator.name;
            tempArray["lat"] = parseFloat(item.asset.operator.location.split(", ")[0]);
            tempArray["lng"] = parseFloat(item.asset.operator.location.split(", ")[1]);
            tempArray["account"] = item.senderId;
            operatorsInfo.push(tempArray);
          }
        });
        setOperatorsInfo(operatorsInfo);

        console.log(operatorsInfo);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // set center location and zoom
  let center = {
    lat: 52.148588,
    lng: 5.37918,
    zoom: 3
  };

  const position = [center.lat, center.lng];
  return (
    <Map center={position} zoom={center.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Markers operatorsInfo={operatorsInfo} />
    </Map>
  );
};

export default WorldMap;
