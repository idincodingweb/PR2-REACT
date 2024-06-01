import React, { useEffect } from 'react';
import '../css/Custom.css';

const About = () => {
  useEffect(() => {
    const skillSlides = document.querySelectorAll('.skill-slide .fill');
    skillSlides.forEach(fill => {
      const progress = fill.parentElement.querySelector('span').innerText;
      fill.style.width = progress;
      if (progress <= '33%') {
        fill.style.backgroundColor = 'red';
      } else if (progress <= '66%') {
        fill.style.backgroundColor = 'green';
      } else {
        fill.style.backgroundColor = 'purple';
      }
    });
  }, []);

  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 align-self-center">
            <div className="caption header-text">
              <h6>Home World Programing</h6>
              <div className="line-dec"></div>
              <h4>Discover More <em>About Us</em></h4>
              <p>Salam, saya Idin Code, seorang pengembang perangkat lunak yang bersemangat untuk menciptakan solusi inovatif. Saya percaya bahwa teknologi memiliki kekuatan untuk mengubah dunia, dan saya berkomitmen untuk berkontribusi dalam perubahan tersebut.</p>
              <div className="main-button"><a href="#index.html">Discover More</a></div>
              <span>or</span>
              <div className="second-button"><a href="#index.html">Check our FAQs</a></div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <img src="https://raw.githubusercontent.com/idincodingweb/landingpagekece.com/master/img/idinganteng.png" alt="" />
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="skill-slide marketing">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '90%', height: '10px' }}></div>
          </div>
          <h6>SEO Marketing</h6>
          <span>90%</span>
        </div>
        <div className="skill-slide digital">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '80%', height: '10px' }}></div>
          </div>
          <h6>Digital Marketing</h6>
          <span>80%</span>
        </div>
        <div className="skill-slide media">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '95%', height: '10px' }}></div>
          </div>
          <h6>Social Media Management</h6>
          <span>95%</span>
        </div>
      </div>
    </div>
  );
};

export default About;
