import React from 'react'
import bmwimage from "../../src/bmw.jpg"

const images = () => {
  return (
    <div>
    <h1 className = "text-black-900 font-bold px-4 gap-5 p-5 text-center text-xl">
  <span className = "text-blue-900 hover:text-red-600 gap-5" > BMW </span> Gallery
  </h1>
  <div className = "flex p-4 gap-4 justify-center" >
  <img src={bmwimage} alt ="bmw border" height={300} width={400}  />
  <img src={bmwimage} alt ="bmw" height={300} width={400} />
  <img src={bmwimage} alt ="bmw" height={300} width={400} />
   </div>
   <div  className = "flex p-4 gap-4 justify-center" >
  <img src={bmwimage} alt ="bmw" height={300} width={400} />
  <img src={bmwimage} alt ="bmw" height={300} width={400} />
  <img src={bmwimage} alt ="bmw" height={300} width={400} />
   </div>
  </div>
  )
}
export default images;

