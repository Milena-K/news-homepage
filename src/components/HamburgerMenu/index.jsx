import "./style.scss";
import PropTypes from "prop-types";

function HamburgerMenu(props) {
  const { className } = props;
  return (
    <div className={className}>
      <div className="sidebar">
        {/* MENU */}
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <a href="/" className="sidebar__link">Home</a>
          </li>
          <li className="sidebar__list-item">
            <a href="/" className="sidebar__link">New</a>
          </li>
          <li className="sidebar__list-item">
            <a href="/" className="sidebar__link">Popular</a>
          </li>
          <li className="sidebar__list-item">
            <a href="/" className="sidebar__link">Trending</a>
          </li>
          <li className="sidebar__list-item">
            <a href="/" className="sidebar__link">Categories</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

HamburgerMenu.propTypes = {
  className: PropTypes.string,
}
HamburgerMenu.defaultProps = {
  className: "closedSidebar",
}


export default HamburgerMenu;
