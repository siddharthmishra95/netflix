import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({ type }) {
    return (
        <div className="featured" >
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                    </select>
                </div>
            )}
            <img src="https://images.hdqwalls.com/wallpapers/matrix-trilogy-ky.jpg"
                alt="" />

            <div className="info">
                <img src="https://www.pngfind.com/pngs/m/232-2323338_the-matrix-reloaded-architecture-hd-png-download.png"
                    alt="" />


                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam et quis
                    culpa ipsam officiis dolorum perferendis itaque illum non porro doloremque
                    debitis, odit sequi quo facere in asperiores provident!culpa ipsam officiis dolorum
                    perferendis itaque illum non porro doloremque debitis, odit sequi quo facere in
                    asperiores provident!
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
