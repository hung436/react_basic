import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 10.80376, lng: 106.71938 }}
      >
        <Marker
          icon={{
            url: "https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          position={{ lat: 21.027763, lng: 105.83416 }}
        />
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
