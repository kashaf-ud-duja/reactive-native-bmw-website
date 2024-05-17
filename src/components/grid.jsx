import React from 'react'
import bmwimage from "../../src/bmw.jpg"
 const grid = () => {
  return (
    <div class="grid grid-cols-3 gap-4">
    <div><img src={bmwimage} alt ="bmw border" height={300} width={400}  /></div>
    <div><img src={bmwimage} alt ="bmw border" height={300} width={400}  /></div>
    <div><img src={bmwimage} alt ="bmw border" height={300} width={400}  /></div>
    <div><img src={bmwimage} alt ="bmw border" height={300} width={400}  /></div>
    
    <div class="grid grid-cols-subgrid gap-4 col-span-3">
      <div class="col-start-2"><img src={bmwimage} alt ="bmw border" height={300} width={400}  /></div>
      <div><img src={bmwimage} alt ="bmw border" height={300} width={400}  /></div>
    </div>
  </div>
  )
}
export default grid;