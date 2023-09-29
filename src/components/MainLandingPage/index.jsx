import BottomPart from "components/BottomPart";
import LandingPageLeft from "components/LandingPageLeft";
import LandingPageRight from "components/LandingPageRight";
import "./style.scss";

function MainLandingPage() {
  return (
    <div className="main">
      <div className="main__left">
        <LandingPageLeft />
      </div>
      <div className="main__right">
        <LandingPageRight />
      </div>
      <BottomPart />
    </div>
  )
}

export default MainLandingPage;
