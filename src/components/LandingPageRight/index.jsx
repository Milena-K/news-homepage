import "./style.scss";

function LandingPageRight() {
  return (
    <div className="right">
      <h2 className="right__title">New</h2>
      <ul className="news">
        <li className="news__item">
          <h3 className="news__title">Hydrogen VS Electric Cars</h3>
          <p className="news__text">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </li>
        <li className="news__item">
          <h3 className="news__title">The Downsides of AI Artistry</h3>
          <p className="news__text">
            What are the possible adverse effects of on-demand AI image generation?
          </p>
        </li>
        <li className="news__item">
          <h3 className="news__title">Is VC Funding Drying Up?</h3>
          <p className="news__text">
            Private funding by VC firms is down 50% YOY. We take a look at what that means.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default LandingPageRight;
