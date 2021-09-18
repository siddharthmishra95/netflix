import "./watch.scss"
import { ArrowBackOutlined } from "@material-ui/icons"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="http://codingkiduniya.in/Shang Chi Fight Scene - SHANG CHI (2021) Movie CLIP 4K.mp4" />
        </div>
    )
}
