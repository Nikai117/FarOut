import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { CustomerProfile, ProfilePicture, UserInfo, UserName, ReservationInfo } from "./css/CustomerElements";
import Image from "./Media/blankprofile.png";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/customer/" 
  });

  const Customer = () => {
	let {id} = useParams();
        const [posts, setPosts] = useState([]);
		const [reservations, setReservations] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				client.params = { "id": id } ;
				let response = await client.get(id);
				setPosts(response.data.data);
				setReservations(response.data.data.reservations)
			} catch (error) {
				console.log("testerror "+ error);
			}
		};
		fetchPost();
	}, []);

	return (
		<div className="Customer">
			<div className="posts-container">
				<h2>Farout profile 📫</h2>
				<br/>
						<CustomerProfile>
							<br/>
						<UserName>
							<h2 className="post-title">{posts.first_name} {posts.last_name}</h2>
						</UserName>
						<div>
							<ProfilePicture src={Image} type="png"/>
							<UserInfo>
							<h6>Email</h6>
							<p className="post-body">{posts.email}</p>
							<h6>Address</h6>
							<p className="post-body">{posts.address}</p>
							<h6>Postal Code</h6>
							<p className="post-body">{posts.postal_code}</p>
							<h6>City</h6>
							<p className="post-body">{posts.city}</p>
							<h6>Code of your country</h6>
							<p className="post-body">{posts.country_code}</p>
							<h6>Phone</h6>
							<p className="post-body">{posts.phone}</p>
							</UserInfo>
							<br/>
							<h5>Booked trips</h5>
							{
								reservations.map((reservation) => (
									<>
									<ReservationInfo>
										<h6>Reservatie Datum</h6>
										<div>{ reservation.trip_id }</div>
										<h6>Aantal Volwassenen</h6>
										<div>{ reservation.number_of_adults }</div>
										<h6>Aantal kinderen</h6>
										<div>{ reservation.number_of_childeren}</div>
										</ReservationInfo>
										<br/>
									</>
								)
								)
							}
					
						</div>
						</CustomerProfile>
				
				</div>
		</div>
	);

};

export default Customer;