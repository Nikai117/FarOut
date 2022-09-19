import React from "react";

const fetchdataById  = (id) => {
    console.log(id);
    fetch(`http://127.0.0.1:8000/api/customer/${id}`)
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        this.setState({
            items: json,
        });
    })
}

export default fetchdataById