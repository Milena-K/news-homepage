import "../../styles/variables.scss";
import "./style.scss";
import ImageWeb3Desktop from "../../assets/images/image-web-3-desktop.jpg";

function LandingPageLeft() {
  return (
    <div className="left">
      <div className="left__image">
        <img alt="Colorful abstract art with different shapes" src={ImageWeb3Desktop} />
      </div>
      <h1 className="left__title">The Bright Future of Web 3.0?</h1>
      <div className="left__introduction">
        <p className="text">
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling it&apos;s promise?
        </p>
        <button className="btn">read more</button>
      </div>
    </div>
  )
}

export default LandingPageLeft;
