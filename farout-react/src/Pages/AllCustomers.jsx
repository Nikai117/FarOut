import React from "react";
import {
    CustomerCard,
    TitleCard 

    } from "./css/AllCostumerElements";
    
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
        <div className = "AllCustomers">
            <h1> All customers of FarOut </h1>
              {
                items.data.map((item) => ( 
                <ol key = { item.id } >
                    <CustomerCard>
                        <TitleCard>
                            FarOut Customer
                        </TitleCard>
                    <div>
                    Name: { item.first_name }
                    </div>
                    <div>
                    Full Name: { item.last_name }
                    </div>
                    <div>
                    User Email: { item.email } 
                    </div>
                    </CustomerCard>
                    </ol>
                ))
            }
        </div>
        </>
    );
}
}
   
export default AllCustomers;