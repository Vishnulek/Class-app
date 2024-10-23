import React, { useState } from 'react'
import Navabar from './Navabar'

const Viewall = () => {
    const [classData,changeClassData]=useState(
        [
            {
                "slNo":1,"classTrName":"Uma tr","totalStrenght":25,"numberOfBoys":11,"numberOfGirls":14
            },
            {
                "slNo":2,"classTrName":"Gireeja tr","totalStrenght":38,"numberOfBoys":18,"numberOfGirls":20
            },
            {
                "slNo":3,"classTrName":"Viji tr","totalStrenght":30,"numberOfBoys":29,"numberOfGirls":1
            },
            {
                "slNo":4,"classTrName":"Reshmy tr","totalStrenght":23,"numberOfBoys":14,"numberOfGirls":9
            },
            {
                "slNo":5,"classTrName":"Shalini tr","totalStrenght":40,"numberOfBoys":20,"numberOfGirls":20
            },
            {
                "slNo":6,"classTrName":"Bindu tr","totalStrenght":34,"numberOfBoys":15,"numberOfGirls":19
            },
            {
                "slNo":7,"classTrName":"Lekha tr","totalStrenght":27,"numberOfBoys":17,"numberOfGirls":10
            },
            {
                "slNo":8,"classTrName":"Sindu tr","totalStrenght":29,"numberOfBoys":19,"numberOfGirls":10
            },
            {
                "slNo":9,"classTrName":"Santhoshkumari tr","totalStrenght":30,"numberOfBoys":16,"numberOfGirls":14
            },
            {
                "slNo":10,"classTrName":"Pushpa tr","totalStrenght":25,"numberOfBoys":11,"numberOfGirls":14
            },
        ]
    )
  return (
    <div>
        <Navabar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
    <th scope="col">Sl.No</th>
      <th scope="col">Name of the class tr</th>
      <th scope="col">Total strength</th>
      <th scope="col">Number of boys</th>
      <th scope="col">Number of girls</th>
    </tr>
  </thead>
  <tbody>
    {classData.map(
        (value,index)=> {
return <tr>
<th scope="row">{value.slNo}</th>
<td>{value.classTrName}</td>
<td>{value.totalStrenght}</td>
<td>{value.numberOfBoys}</td>
<td>{value.numberOfGirls}</td>
</tr>
        }
    )}
    
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
