import React ,{useState,useEffect} from 'react'
import { Map, Marker, Popup, TileLayer,Polyline } from 'react-leaflet';
import {Icon} from "leaflet";


const Issmap=()=>{
  const centre=[40.7128,3.7492]

  const [data,setData]=useState([]);

  const [counter,setCounter]=useState(0)


  useEffect(()=>{
    setTimeout(()=>{console.log(counter)
      fetchFunction()
  },5000)
},[data])

  function fetchFunction(){
    fetch("http://api.open-notify.org/iss-now.json")
    .then(data=>data.json())
    .then(data2=>{
      const coords=[data2.iss_position.latitude,data2.iss_position.longitude]
       console.log(coords)
    setData([...data,coords])
  })}





return(
<div className='mapdiv'>
<Map  className='darkMap' center={centre} zoom={2} attributionControl={false} zoomControl={false} >
    <TileLayer
    url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
      <Polyline color="red" positions={data}/>

</Map>
</div>



)

}

export default Issmap;
