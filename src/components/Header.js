import React from "react";
import PropTypes from "prop-types";
import "./header.css";

function Header(props) {
  const { branding } = props;
  return (
    <div>
      <nav className="nav">
        <div className="icon">phoen</div>
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            {branding}
          </ul>
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.object.isRequired,
};
export default Header;
