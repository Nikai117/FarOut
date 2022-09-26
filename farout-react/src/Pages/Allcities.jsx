import React from "react";


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
                    <th scope="col">Description</th>
                    
                    </tr>   
                </thead>
              {
                items.data.map((item) => (
                <tbody>
                    <tr>
                    <td>{ item.country_code }</td>
                    <td> { item.description }</td>
                    
                    </tr>
                 {/*    <button onClick={() => fetchdataById(item.id)} href="http://localhost:3000/city/${id}">
                        Details
                    </button> */}
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