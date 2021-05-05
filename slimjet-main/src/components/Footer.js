import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container-footer">
        <div className="row">
          {/* Column1 */}
          <div className="col1">
            <h4>Location:</h4>
            
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            
          </div>
          {/* Column2 */}
          <div className="col2">
            <h4>Contact Us:</h4>
            
              <li>45237524</li>
              <li>eksempel@juh.com</li>
              <li>Truls HT</li>
            
          </div>
          {/* Column3 */}
          <div className="col3">
            <h4>Navigation:</h4>
            
              <li><a href="http://localhost:3000/">Home</a></li>
              <li><a href="http://localhost:3000/post">Blog Posts</a></li>
              <li><a href="http://localhost:3000/post/about-slimjet-project">About</a></li>
              <li><a href="http://localhost:3000/contact">Contact Us</a></li>
              <li><a href="http://localhost:3000/gallery">Gallery</a></li>
            
          </div>
        </div>
        <hr />
        <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Slimjet | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
