import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
    
class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: 300,
        height: 200,
        zoom: 17,
      }
    };
}
    
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
        latitude={this.props.latitude}
        longitude={this.props.longitude}
        zoom={viewport.zoom}
        
        mapStyle='mapbox://styles/darcipons/ckc0tdcxo03qg1ipd2dw7r5af'
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}
    
export default Map;
