import React from "react";
import "../App.css";
import "../css/Testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div>
        <h2 className="testimonial-heading">Hear From Our Satisfied Clients</h2>

        <p className="testimonial-paragraph">
          Join hundreds of creators whose platforms were elevated by our expert
          scriptwriting services.
        </p>
      </div>

      <div className="testimonial-details">
        <div className="container grid grid-3">
          <div className="testimonial-item">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <h3 className="testimonialitem-0">
              Great work by this freelancer! It's super easy to communicate with
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
              Great work by this freelancer! It's super easy to communicate with
              him and his quality of work is 5 star. Will work with him on more
              projects
            </h3>
            <p className="testimonialitem-1">Rae Boyce </p>
            <p className="testimonialitem-1">YouTube Creator</p>
          </div>
          <div className="testimonial-item">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <h3 className="testimonialitem-0">
              Great work by this freelancer! It's super easy to communicate with
              him and his quality of work is 5 star. Will work with him on more
              projects
            </h3>
            <p className="testimonialitem-1">Zayyad Bashir</p>
            <p className="testimonialitem-1">YouTube Scriptwriter</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
