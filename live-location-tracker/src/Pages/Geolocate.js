import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmhhdmVzaGJtIiwiYSI6ImNsaWNycDFncjAybTAza3MwMzdtMWhnZmUifQ.LpI-0nfWydZtEHW6a9WB-g";

export default function Geolocate() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.9);
  const [lat, setLat] = useState(65.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: 5,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

// import * as React from "react";
// import ReactMapGL, { GeolocateControl } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { BiLogOut } from "react-icons/bi";

// const TOKEN = process.env.REACT_APP_TOKEN;
// const GeolocateControlStyle = {
//   right: 10,
//   top: 10,
// };

// const Geolocate = () => {
//   const [viewport, setViewport] = React.useState({
//     longitude: -122.45,
//     latitude: 37.78,
//     zoom: 14,
//   });
//   return (
//     <div>
//       <div className="map-container">
//         <ReactMapGL
//           {...viewport}
//           mapboxApiAccessToke={TOKEN}
//           width="100vw"
//           height="100vh"
//           onViewportChange={setViewport}
//         >
//           <GeolocateControl
//             style={GeolocateControlStyle}
//             positionOptions={{ enableHighAccuracy: true }}
//             trackUserLocation={true}
//             auto
//           />
//           <div>
//             {/* <div>
//               <a className="icon" href="/">
//                 <BiLogOut />
//               </a>
//             </div> */}
//           </div>
//         </ReactMapGL>
//       </div>
//     </div>
//   );
// };

// export default Geolocate;
