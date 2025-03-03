import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function SinglePost() {
    const url = import.meta.env.VITE_BASE_API_URL;
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${url}/${id}`)
            .then((res) => setPost(res.data))
    }, []);

    const { index, title, content, image } = post;

    return (
        <>
            <div className="d-flex justify-content-between">
                <button
                    type="button"
                    className="btn btn-outline-secondary mt-4 mx-5 mb-3"
                    onClick={() => navigate(`/posts-list/${parseInt(id) - 1}`)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary mt-4 mx-5 mb-3"
                    onClick={() => navigate(`/posts-list/${parseInt(id) + 1}`)}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>

            <div key={index} className="card mx-5 mb-4">
                <div className="card-body">
                    <h5 className="card-title"><strong>{title}</strong></h5>
                    <p className="card-text">{content}</p>
                </div>
                <img src={image} className="card-img-bottom" alt={title} />
            </div>
        </>
    )
};