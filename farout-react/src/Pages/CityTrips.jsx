import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/trips/" 
  });

  const CityTrips = () => {
	let {id} = useParams();
        const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				client.params = { "id": id } ;
				let response = await client.get(id);
				setPosts(response.data.data);
                console.log(response.data);
			} catch (error) {
				console.log("testerror "+ error);
			}
		};
		fetchPost();
	}, []);


	return (

			<div className="posts-container vh-100 p-5">
				<h2>CityTrips data </h2>
				{console.log(posts)}
				<table className="table table-hover table-bordered " >		
					<thead>
						<tr>
						<th scope="col">Date</th>
						<th scope="col">number of days</th>
						<th scope="col">Price</th>
						</tr>   
					</thead>
					<tbody>
						<tr>
							<td> { posts.departure_date }</td>
							<td> { posts.number_of_days }</td>
							<td>€{ posts.price }</td>
						</tr>
					</tbody>
				</table>
			</div>
	);

};

export default CityTrips;