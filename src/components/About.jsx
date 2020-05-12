/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Header from './Header';

const About = () => (
  <div>
    <Header title="About" />
    <div className="about-page">
      <h1 className="about-title">About</h1>
      <p className="about-text">
        This page was built by Wilfried Canirinka as a capstone project for React and Redux in
        the Microverse Program
      </p>
      <p className="about-text">
        For more information, please visit the project on GitHub:
        <a href="https://github.com/WCanirinka/catalogue-statistics-app">
          Catalogue of Statistics
        </a>
      </p>
      <p className="about-text">Visit my social links and ping me</p>
      <div className="about-icon-container">
        <a href="https://github.com/WCanirinka" className="about-icon github-icon" target="_blank" />
        <a href="https://twitter.com/WCanirinka" className="about-icon twitter-icon" target="_blank" />
        <a href="https://www.linkedin.com/in/wilfried-canirinka/" className="about-icon linkedin-icon" target="_blank" />
      </div>
      <p className="about-text">This does not have propriety </p>
    </div>
  </div>
);

export default About;
