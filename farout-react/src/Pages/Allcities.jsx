import React from "react";
import CityTrips from "./CityTrips";


class Allcities extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch(
            "http://127.0.0.1:8000/api/city")
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
        <div className = "Allcities p-5">
            <h1> Cities with Farout connections </h1>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Country code</th>
                    <th scope="col">City</th>
                    
                    </tr>   
                </thead>
              {
                items.data.map((item) => (
                <tbody>
                    <tr>
                    <td> { item.country_code }</td>
                    <td> { item.description }</td>
                    <td>    
                    <button onClick={() => CityTrips}>
                    <a href={'/city/'+  item.id + '/trips/'}>Details</a> 
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
   
export default Allcities;