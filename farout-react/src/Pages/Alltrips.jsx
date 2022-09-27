import React from "react";


class AllTrips extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch(
            "http://127.0.0.1:8000/api/trips")
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
        <div className = "AllTrips p-5">
            <h1> All trips of FarOut </h1>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Number of days</th>
                    <th scope="col">Depature date</th>
                    <th scope="col">price</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        items.data.map((item) => (
                            <tr>
                            <td>{ item.number_of_days }</td>
                            <td> { item.departure_date }</td>
                            <td> { item.price } </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
        </>
    );
}
}
   
export default AllTrips;