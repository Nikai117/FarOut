import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { CustomerProfile, ProfilePicture, UserInfo, UserName } from "./css/CustomerElements";
import image from "./Media/blankprofile.png";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/customer/" 
  });

  const Customer = () => {
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
		
		<div className="Customer vh-100 p-5">
			<div className="posts-container">
				<h2>Farout profile 📫</h2>
						<CustomerProfile>
						<UserName>
							<h2 className="post-title">{posts.first_name} {posts.last_name}</h2>
						</UserName>
						<div>
							<ProfilePicture src={image} type="png"/>
							<UserInfo>
							<p className="post-body">{posts.email}</p>
							<p className="post-body">{posts.address}</p>
							<p className="post-body">{posts.postal_code}</p>
							<p className="post-body">{posts.city}</p>
							<p className="post-body">{posts.country_code}</p>
							<p className="post-body">{posts.phone}</p>
							</UserInfo>
					
						</div>
						</CustomerProfile>
				
				</div>
		</div>
	);

};

export default Customer;