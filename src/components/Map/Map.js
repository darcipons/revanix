import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
    
class Map extends Component {
    
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 26.269711,
      longitude: -80.260872,
      zoom: 15,
    }
  };
    
  render() {
  
     const { viewport } = this.state;
     const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    //  let geojson = [
    //   {
    //     type: 'Feature',
    //     geometry: {
    //       type: 'Point',
    //       coordinates: [this.state.latitude, this.state.longitude]
    //     }
    //   }
    // ]

    // var mapGeo = L.mapbox.map('map_geo')
    //   .setView([37.8, -96], 4)
    //   .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));

    // var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(mapGeo);
    // mapGeo.scrollWheelZoom.disable();
     
    return (
      <ReactMapGL
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        
        
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}
    
export default Map;
