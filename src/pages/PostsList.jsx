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
                className="text-center my-4">
                <strong>Lista post</strong>
            </h1>

            {/* cards */}
            < div className="row row-cols-2 mb-4 mx-4" >
                {
                    posts.map((post) => {
                        const { id, title, content, image } = post;

                        return (
                            <div key={id} className="col">
                                <div className="card">
                                    <img src={image} className="card-img-top" alt={title} />

                                    <div className="card-body">
                                        <h5 className="card-title"><strong>{title}</strong></h5>
                                        <p className="card-text">{content}</p>
                                    </div>

                                    <div className="d-grid gap-2 col-3 mx-auto mb-4">
                                        <button className="btn btn-secondary" type="button">Scopri di più...</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
};