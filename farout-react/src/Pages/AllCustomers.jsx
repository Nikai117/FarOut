import React from "react";
import Customer from "./Customer";

class AllCustomers extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch(
            "http://127.0.0.1:8000/api/customer")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> A moment please... </h1> </div> ;
   
        return (
            <>
        <div className = "AllCustomers p-5">
            <h1> All customers of FarOut </h1>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">email</th>
                    </tr>   
                </thead>
              {
                items.data.map((item) => (
                <tbody>
                    <tr>
                    <td>{ item.first_name }</td>
                    <td> { item.last_name }</td>
                    <td> { item.email } </td>
                    <td>    
                    <button onClick={() => Customer}>
                    <a href={'/customer/'+  item.id }>Details</a> 
                    </button>
                    </td>

                    </tr>
                </tbody>
                ))

               }
            </table>
        </div>
        </>
    );
}
}
   
export default AllCustomers;