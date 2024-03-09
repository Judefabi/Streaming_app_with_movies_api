import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [showBlack, setShowBlack] = useState(false);

  const transitionHandler = () => {
    if (window.scrollY > 100) {
      setShowBlack(true);
    } else {
      setShowBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHandler);
    return () => window.removeEventListener("scroll", transitionHandler);
  }, []);

  return (
    <div className={`nav ${showBlack === true && "nav_black"}`}>
      {/* Navigation */}
      <div className="nav_content">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <div className="nav_menu">
          <a className="nav_menu_name" href="#home">
            Home
          </a>
          <a className="nav_menu_name" href="#home">
            TV Shows
          </a>
          <a className="nav_menu_name" href="#home">
            Movies
          </a>
          <a className="nav_menu_name" href="#home">
            New & Popular
          </a>
          <a className="nav_menu_name" href="#v">
            My List
          </a>
          <a className="nav_menu_name" href="#home">
            Browse by Languages
          </a>
        </div>
        <img
          className="nav_avatar"
          src="https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
