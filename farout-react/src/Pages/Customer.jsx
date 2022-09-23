/*import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";

class Customer extends  React.Component {

    fetchdataById  = (id) => {
        console.log(id);
        fetch(`http://127.0.0.1:8000/api/customer/${id}`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    }

    render() {
        fetchdataById  = (id) => {
            console.log(id);
            fetch(`http://127.0.0.1:8000/api/customer/${id}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
        }
        
        return  (
            <>
                <h1> Customer of Farout</h1>
                <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Country</th>
                                <th scope="col">City</th>
                                <th scope="col">Postal Code</th>
                                <th scope="col">phone</th>
                            </tr>
                        </thead>
                        {
                            items.data.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{ item.first_name }</td>
                                        <td>{ item.last_name }</td>
                                        <td>{ item.email }</td>
                                        <td>{ item.country }</td>
                                        <td>{ item.city }</td>
                                        <td>{ item.postal_code }</td>
                                        <td>{ item.phone }</td>
                                    </tr>
                                </tbody>
                            ))
                        }
                </table>
            </>
        )
    }
}

export default Customer;*/