import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import "./css/loader.css";




const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
  });

  const CityTrips = () => {
	let {id} = useParams();
    const [posts, setPosts] = useState([]);
	const [isLoading, setLoading] = useState(true);
   

	useEffect(() => {
		const fetchPost = async () => {
			try {		
				console.log("NU");
				let response = await client.get('city/'+  id + "/trips");
				setPosts(response.data);
				setLoading(false);
			
			} catch (error) {
				console.log("testerror "+ error);
			}
		};
		fetchPost();
	}, []);

	if (isLoading) {
		return (
		  <div  className="loadingContainer">
		  <ThreeDots 
			height="80" 
			width="80" 
			radius="9"
			color="#4fa94d" 
			ariaLabel="three-dots-loading"
			wrapperStyle={{}}
			wrapperClassName=""
			visible={true}
			/>
		</div>
		)
	} else {
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
					{
						posts.data.map((post) => (
						<tr>
							<td> { post.departure_date }</td>
							<td> { post.number_of_days }</td>
							<td>€{ post.price }</td>
						</tr>
						))}
					
					</tbody>
				</table>
			</div>
	)}
						

};

export default CityTrips;