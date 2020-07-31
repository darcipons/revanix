import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import LocationIcon from './icons8-region-48.png'
import './Map.css'
import 'mapbox-gl/src/css/mapbox-gl.css';
    
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
      >
        <Marker latitude={this.props.latitude} longitude={this.props.longitude}>
          <img src={LocationIcon} alt='Location Pin' className='location_icon'/>
        </Marker>
      </ReactMapGL>
    );
  }
}
    
export default Map;
