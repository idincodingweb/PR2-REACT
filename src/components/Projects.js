import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/Custom.css';
import OwlCarousel from 'react-owl-carousel';

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Discover Our <em>Work</em> &amp; <span>Projects</span></h2>
              <div className="line-dec"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              <div className="item">
                <img src="https://e-course-com.vercel.app/assets/img/trick-treat1-img.png" alt=""/>
                <div className="down-content">
                  <h4>React Js</h4>
                  <a href="#index.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
              <div className="item">
                <img src="https://e-course-com.vercel.app/assets/img/trick-treat2-img.png" alt=""/>
                <div className="down-content">
                  <h4>Angular</h4>
                  <a href="#index.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
              <div className="item">
                <img src="https://e-course-com.vercel.app/assets/img/trick-treat3-img.png" alt=""/>
                <div className="down-content">
                  <h4>Python</h4>
                  <a href="#index.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
              <div className="item">
                <img src="https://e-course-com.vercel.app/assets/img/trick-treat4-img.png" alt=""/>
                <div className="down-content">
                  <h4>HTML CSS</h4>
                  <a href="#index.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
