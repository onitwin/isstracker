import React ,{useState,useEffect} from 'react'
import { Map, TileLayer,Polyline } from 'react-leaflet';



const Issmap=()=>{
  const centre=[40.7128,3.7492]

  const [data,setData]=useState([]);



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
      const otherCoords=[data2.longitude,data2.latitude]
       console.table(coords)
    setData([...data,coords])
    console.table(data)
  })}





return(
<div className='mapdiv'>
<h3 className="infoHeader">Data polls current position every 5 seconds- two positions required so 10 seconds before line appears</h3>
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
