import React from "react";
import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import {
  FaHome,
  FaUserAlt,
  FaPhoneAlt,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaProjectDiagram,
  FaBlog,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-transparent z-20">
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
          fill="#e8eaed"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>

      <div className="link-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>

        <HashLink smooth to="/" className="nav-link home-link" title="Home">
          <span className="tooltip">Home</span>
          Home <FaHome className="icon" />
        </HashLink>
        <HashLink smooth to="/aboutus" className="nav-link" title="About Us">
          <span className="tooltip">About Us</span>
          About us <FaUserAlt className="icon" />
        </HashLink>
        <HashLink
          smooth
          to="#contactus"
          className="nav-link"
          title="Contact Us"
        >
          <span className="tooltip">Contact Us</span>
          Contact us <FaPhoneAlt className="icon" />
        </HashLink>
        <HashLink smooth to="#mentors" className="nav-link" title="Mentors">
          <span className="tooltip">Mentors</span>
          Mentors <FaChalkboardTeacher className="icon" />
        </HashLink>
        <HashLink smooth to="#events" className="nav-link" title="Events">
          <span className="tooltip">Events</span>
          Events <FaCalendarAlt className="icon" />
        </HashLink>
        <HashLink smooth to="#projects" className="nav-link" title="Projects">
          <span className="tooltip">Projects</span>
          Projects <FaProjectDiagram className="icon" />
        </HashLink>
        <HashLink smooth to="#blogs" className="nav-link" title="Blogs">
          <span className="tooltip">Blogs</span>
          Blogs <FaBlog className="icon" />
        </HashLink>
        <HashLink smooth to="#register" className="nav-link" title="Register">
          <span className="tooltip">Register</span>
          Register <FaUserPlus className="icon" />
        </HashLink>
      </div>
      <button className="login z-10" title="Login">
        <FaSignInAlt />
        Login
      </button>
    </nav>
  );
};

export default Navbar;
