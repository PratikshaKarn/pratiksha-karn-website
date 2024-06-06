import React from 'react'
import java_icon from '../assets/java.png'
import js_icon from '../assets/js.png'
import php_icon from '../assets/php.png'
import html_icon from '../assets/html.png'
import css_icon from '../assets/css.png'
import jquery_icon from '../assets/jquery.png'
import bootstrap_icon from '../assets/bootstrap.png'
import nodejs_icon from '../assets/nodejs.png'
import react_icon from '../assets/react.png'
import mongodb_icon from '../assets/mongodb.png'
import express_icon from '../assets/nodejs.png'
import mysql_icon from '../assets/mysql.png'

const Skills = () => {
    return (
        <section id="skills" className="container">
          <h1 data-aos="zoom-in"><br></br></h1>
  <h1 data-aos="zoom-in">Skills</h1>
  <div className="row">
  <div data-aos="flip-right" className="skill-bars col-lg-6">
    <h3>Programming Languages</h3>
    <div className="bar" style={{}}>
      <div className="info">
      <img src={java_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span style={{}}>Java</span>
      </div>
      <div className=" cpp">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
      <img src={js_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>JavaScript</span>
      </div>
      <div className=" js">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
      <img src={php_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>PHP</span>
      </div>
      <div className=" php">
        <span></span>
      </div>
    </div>
  </div>
  <div data-aos="flip-left" className="skill-bars col-lg-6">
  <h3>Web Development</h3>
    <div className="bar">
      <div class="info">
      <img src={html_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>HTML</span>
      </div>
      <div className=" html">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
      <img src={css_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>CSS</span>
      </div>
      <div className=" css">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
      <img src={jquery_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>jQuery</span>
      </div>
      <div className=" jquery">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
      <img src={bootstrap_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>BOOTSTRAP</span>
      </div>
      <div className=" bootstrap">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
      <img src={nodejs_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>NODEJS</span>
      </div>
      <div className=" nodejs">
        <span></span>
      </div>
    </div>
  </div>
  <div data-aos="zoom-in" className="skill-bars col-lg-6">
  <h3>Framework</h3>
  <div className="bar">
      <div className="info">
      <img src={react_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>React Js</span>
      </div>
      <div className=" reactjs">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
      <img src={express_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>Express JS</span>
      </div>
      <div className=" expressjs">
        <span></span>
      </div>
    </div> 
  </div>
  <div data-aos="zoom-in" className="skill-bars col-lg-6">
    <h3>Database</h3>
   
    {/* <div className="bar">
      <div className="info">
        <span>Node and SQL</span>
      </div>
      <div className=" oracle">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>System Design Components</span>
      </div>
      <div className=" oracle">
        <span></span>
      </div>
    </div> */}
    <div className="bar">
      <div className="info">
      <img src={mysql_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>MySQL</span>
      </div>
      <div className=" mysql">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div class="info">
      <img src={mongodb_icon} style={{width:'32px',height:'32px',marginRight:'15px'}}></img>
        <span>MongoDB</span>
      </div>
      <div className=" mongodb">
        <span></span>
      </div>
    </div>
  </div>
  </div>

        </section>
    )
}

export default Skills
