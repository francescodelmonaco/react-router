import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function SinglePost() {
    const url = import.meta.env.VITE_BASE_API_URL;
    const [post, setPost] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${url}/${id}`)
            .then((res) => setPost(res.data))
    }, []);

    const { index, title, content, image } = post;

    return (
        <div key={index} className="card m-5">
            <div className="card-body">
                <h5 className="card-title"><strong>{title}</strong></h5>
                <p className="card-text">{content}</p>
            </div>
            <img src={image} className="card-img-bottom" alt={title} />
        </div>
    )
};