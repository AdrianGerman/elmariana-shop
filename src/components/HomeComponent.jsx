import "./HomeComponent.css"
import { useNavigate } from "react-router-dom"

const HomeComponent = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/store")
  }
  return (
    <>
      <main>
        <div className="vista-container">
          <img src="/asi_se_ve.webp" alt="asi se ve parte 1" />
          <img src="/un_gran.webp" alt="un gran parte 2" />
          <img src="/comienzo.webp" alt="comienzo parte 3" />
        </div>
        <div className="descubrelo-container">
          <video src="/descubrelo-video.mp4" autoPlay muted loop />
          <div className="video-play-button">
            <button className="descubrelo-button" onClick={handleButtonClick}>
              DESCÚBRELO
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomeComponent
