import React ,{useState,useEffect} from 'react'
import { Map,Marker,TileLayer,Polyline,Popup } from 'react-leaflet';
import {Icon} from "leaflet"



const Issmap=()=>{
  const centre=[40.7128,3.7492]

  const [data,setData]=useState([]);
  const [currentPosition,setCurrentPosition]=useState([10.0000,1.0000])
  const [allData,setAllData]=useState([]);



  useEffect(()=>{
    setTimeout(()=>{
      fetchFunction()
  },1000)
},[data])


  function fetchFunction(){
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then(data=>data.json())
    .then(data2=>{
      const coords=[data2.latitude,data2.longitude]
    setData([...data,coords])
    setAllData(data2)
    console.table(data)
    if(data){
      setCurrentPosition(coords)
    }

  })}

  const iss= new Icon({
    iconUrl:"./colouriss.png",
    iconsSize:[1,1],
    iconAnchor:[15,15]
  })





return(
<div className='mapdiv'>
<h3 className="infoHeader">Data polls current position </h3>
<Map  className='darkMap' center={centre} zoom={2} attributionControl={false} zoomControl={false} alt="map">
    <TileLayer
    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
      <Polyline color="red" positions={data}/>
      <Marker position={currentPosition} icon={iss}><Popup><p className='popup'><strong>Altitude:</strong>{allData.altitude}</p><p className='popup'><strong>Velocity:</strong>{allData.velocity}</p><p className='popup'><strong>Latitude:</strong>{allData.latitude}</p> <p className='popup'><strong>Longtitude:</strong>{allData.longitude}</p></Popup></Marker>





</Map>

</div>



)

}

export default Issmap;
