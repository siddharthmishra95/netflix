import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Featured({ type }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDYyYjJiM2RhY2E2NGFjZjU3MDRkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjgwNTk4MSwiZXhwIjoxNjMzMjM3OTgxfQ.ywNKUE-OjUSHGGsjdYDOFh95hCcu_ANAVnouTEYgjs0"
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err)
            }
        }
        getRandomContent();
    }, [type])
    return (
        <div className="featured" >
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                    </select>
                </div>
            )}
            <img src={content.img}
                alt="" />

            <div className="info">
                <img src={content.imgTitle}
                    alt="" />


                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
