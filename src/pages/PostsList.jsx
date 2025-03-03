import axios from "axios";
import { useState, useEffect } from "react";

export function PostsList() {
    const url = import.meta.env.VITE_BASE_API_URL;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => setPosts(res.data))
    }, []);

    return (
        <>
            <h1
                className="text-center p-3">
                <strong>Lista post</strong>
            </h1>

            {/* cards */}
            {
                posts.map((post) => {
                    const { id, title, content, image } = post;

                    return (
                        < div key={id} className="row row-cols-1 g-4 m-3" >
                            <div className="col">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt={title} />

                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{content}</p>
                                    </div>

                                    <div className="d-grid gap-2 col-3 mx-auto my-3">
                                        <button className="btn btn-secondary" type="button">Scopri di più...</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
};