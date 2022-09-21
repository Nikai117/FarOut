import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

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
		<div className="Customer">
			<div className="posts-container">
				<h2>Farout profile 📫</h2>
				<h3><div>{id}</div></h3>
				{console.log(posts)}
						<div className="post-card" key={posts.id}>
							<h2 className="post-title">{posts.first_name}</h2>
							<p className="post-body">{posts.email}</p>
					
						</div>
				
				</div>
		</div>
	);

};

export default Customer;