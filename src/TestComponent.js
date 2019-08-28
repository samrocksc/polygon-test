import React, { Component } from 'react';
import { Circle, GoogleMap, LoadScript, KmlLayer } from '@react-google-maps/api';
import sampleLayer from './sampleLayer.kml';

function TestComponent() {
  // testing 
  // 48.1244777, 16.1261085
  return (
    <LoadScript id="script-loader" googleMapsApiKey="AIzaSyC76kRYxDDTFsUgoHSTocPXE0Y_PVbIQyA">
      <GoogleMap
        id="kml-layer-example"
        mapContainerStyle={{
          height: '400px',
          width: '800px',
        }}
        zoom={11}
        center={{ lat: 48.124, lng: 16.126 }}>
        {/* <KmlLayer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml" /> */}
        <KmlLayer url="https://file.io/bEzRRS" />
      </GoogleMap>
    </LoadScript>
  );
}

export default TestComponent;
