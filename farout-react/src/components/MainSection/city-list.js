import React from "react";
import axios from "axios";

export default class CityList extends React.Component {
  state = {
    cities: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/city`).then((res) => {
      const cities = res.data;
    });
  }

  render() {
    console.log("Hoi", this.state);
    return (
      <select>
        {this.state.cities &&
          this.state.cities.map((item) => <option>{item.description}</option>)}
      </select>
    );
  }
}
