import React, { Component } from 'react';
import {
  Link,
  NavLink
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="top-bar">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="social-media">
            <ul>
              <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
              <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
              <li><Link to="#"><i className="fab fa-google-plus-g" /></Link></li>
              <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
              <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-details">
            <ul>
              <li><i className="fas fa-phone fa-rotate-90" /> +01 899 286 777</li>
              <li><i className="fas fa-map-marker-alt" /> 8/99 , North khailkoir, NY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navigation */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-light top-nav">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src="images/logo.png" alt="logo" />
      </Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink  className="nav-link" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/services">Services</NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" to="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <i className="fas fa-sort-down" /></Link>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <NavLink className="dropdown-item" to="/faq">FAQ</NavLink>
              <NavLink className="dropdown-item" to="/404">404</NavLink>
              <NavLink className="dropdown-item" to="/pricing">Pricing Table</NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" to="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio <i className="fas fa-sort-down" /></Link>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
              <NavLink className="dropdown-item" to="/portfolio3">3 Column Portfolio</NavLink>
              <NavLink className="dropdown-item" to="/portfolio4">4 Column Portfolio</NavLink>
              <NavLink className="dropdown-item" to="/portfoliosingle">Single Portfolio Item</NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" to="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="fas fa-sort-down" /></Link>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <NavLink className="dropdown-item" to="/blog">Blog</NavLink>
              <NavLink className="dropdown-item" to="/blog-post">Blog Post</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
            </div>
        );
    }
}

export default Header;