import HamburgerMenu from "components/HamburgerMenu";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import "./style.scss";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 375) {
        setSidebarOpen(false);
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="header">
      <div className="header__logo">
        <img alt="Logo" src={Logo} />
      </div>

      <button onClick={toggleSidebar} className="toggle">
        <div className="hamburger">
          <div className={sidebarOpen ? "open line line-1" : "closed line line-1"} />
          <div className={sidebarOpen ? "open line line-2" : "closed line line-2"} />
          <div className={sidebarOpen ? "open line line-3" : "closed line line-3"} />
        </div>
      </button>

      <HamburgerMenu className={sidebarOpen ? "openSidebar" : "closedSidebar"} />

      <div id="overlay" className={sidebarOpen ? "open" : "closed"} />

      <ul className="header__list">
        <li className="header__list-item">
          <a href="/" className="header__link">Home</a>
        </li>
        <li className="header__list-item">
          <a href="/" className="header__link">New</a>
        </li>
        <li className="header__list-item">
          <a href="/" className="header__link">Popular</a>
        </li>
        <li className="header__list-item">
          <a href="/" className="header__link">Trending</a>
        </li>
        <li className="header__list-item">
          <a href="/" className="header__link">Categories</a>
        </li>
      </ul>
    </div>
  )
}

export default Header;
