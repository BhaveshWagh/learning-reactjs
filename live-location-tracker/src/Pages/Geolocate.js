import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { BiLogOut } from "react-icons/bi";
import "./geolocate.css";

mapboxgl.accessToken = process.env.REACT_APP_TOKEN;
const Geolocate = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-24, 42], // starting center in [lng, lat]
      zoom: 1, // starting zoom
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    // Clean up the map instance when the component is unmounted
    return () => map.remove();
  }, []);

  return (
    <React.Fragment>
      <h1> Welcome to the Live Location tracker Web App </h1>
      <h3>Click on the top-right corner icon to get your live location.</h3>
      <a className="icon" href="/">
        <BiLogOut size={30} />
      </a>
      <div id="map" style={{ height: "100vh" }}></div>
    </React.Fragment>
  );
};

export default Geolocate;
