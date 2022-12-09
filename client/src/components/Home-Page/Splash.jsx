import './Splash.css';
import classNames from "classnames";

const Splash = () => {
  return (
      <div className="carousel">
        <button className="carousel-button left">&#10508;</button>
        <img src="../../../public/images/annie-spratt-EjDNFhbsAJc-unsplash.jpg" alt="brightly lit office with black walls and light birch desk"/>
        <button className="carousel-button right">&#10509;</button>
      </div>
  )
}

export default Splash;