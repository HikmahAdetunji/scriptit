import React from "react";
import "../App.css";
import "../css/Testimonials.css";
import documentary from "../images/documentary.jpg";
import glitter from "../images/glitter.jpg";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonial-heading">Hear From Our Satisifed Clients</h2>
      <p className="testimonial-paragraph">
        Join hundreds of creators whose platform have been elevated with our
        high-quality scripts.
      </p>
      <div className="testimonial-details">
        <div className="container grid grid-3">
          <div className="testimonial-item">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <h3 className="testimonialitem-0">
              Great work by this freelancer. It's super easy to communicate with
              him and his quality of work is 5 star. Will work with him on more
              projects
            </h3>
            <p className="testimonialitem-1">Gerry Regie </p>
            <p className="testimonialitem-1">YouTube Creator</p>
          </div>

          <div className="testimonial-item">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <h3 className="testimonialitem-0">
              Great work by this freelancer. It's super easy to communicate with
              him and his quality of work is 5 star. Will work with him on more
              projects
            </h3>
            <p className="testimonialitem-1">Gerry Regie </p>
            <p className="testimonialitem-1">YouTube Creator</p>
          </div>
          <div className="testimonial-item">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <h3 className="testimonialitem-0">
              Great work by this freelancer. It's super easy to communicate with
              him and his quality of work is 5 star. Will work with him on more
              projects
            </h3>
            <p className="testimonialitem-1">Gerry Regie </p>
            <p className="testimonialitem-1">YouTube Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
