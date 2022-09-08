import React from 'react'
import Customer from "../data/customer_reservations.json"



 function Customers(){
    const DisplayData=Customer.data.map(
        (info, i)=>{
            return(
                <tr key={i}>
                    <td>{info.firstname}</td>
                    <td>{info.lastname}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Firstname</th>
                    <th>lastname</th>
                    </tr>
                </thead>
                <tbody>
                 
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
  
  export default Customers;