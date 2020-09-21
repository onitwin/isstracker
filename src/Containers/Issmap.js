import React ,{useState,useEffect} from 'react'
import { Map,Marker,TileLayer,Polyline } from 'react-leaflet';
import {Icon} from "leaflet"



const Issmap=()=>{
  const centre=[40.7128,3.7492]

  const [data,setData]=useState([]);
  const [currentPosition,setCurrentPosition]=useState([10.0000,1.0000])



  useEffect(()=>{
    setTimeout(()=>{
      fetchFunction()
  },5000)
},[data])


  function fetchFunction(){
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then(data=>data.json())
    .then(data2=>{
      const coords=[data2.latitude,data2.longitude]
    setData([...data,coords])
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
<h3 className="infoHeader">Data polls current position every 5 seconds- two positions required so 10 seconds before line appears</h3>
<Map  className='darkMap' center={centre} zoom={2} attributionControl={false} zoomControl={false} >
    <TileLayer
    url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
      <Polyline color="red" positions={data}/>
      <Marker position={currentPosition} icon={iss}/>





</Map>

</div>



)

}

export default Issmap;
