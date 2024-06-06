import React from 'react'
import TypeWriter from 'typewriter-effect'
import Heroimage from '../images/pkm.jpg'
import CV from '../assets/Pratiksha_CV.pdf'
import { Link } from 'react-scroll'
const Hero = () => {
    
        const resume = "https://drive.google.com/file/d/1EieiTBKbRe1YmWZHXecJ-U5uhC0SlWBe/view?usp=drive_link";  
        const profile_image ="https://drive.usercontent.google.com/download?id=1AQdiLaQCC0OggLg7-flkOfOkqriJ0F7n&export=view&authuser=0";
        console.log(profile_image)
    const imgStyle = {
        // margin:'50px',
        clipPath: 'circle(50% at 50% 50%)',
    };
    return (
        <div id="hero" className="container">
            <div className="hero_left">
                <div className="social_links">
                    <ul>
                        <li className="link_item"><a href="https://www.facebook.com/share/JtLmiF99587qLh5S/?mibextid=qi2Omg" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li className="link_item"><a href="https://www.instagram.com/pratiksha_karn82?igsh=OWx4ZzNjMDJoZnVw" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li className="link_item"><a href="https://github.com/PratikshaKarn" target="_blank"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href="https://www.linkedin.com/in/pratiksha-karn-0b35b22ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                    </ul>


                </div>

                <p className="name">Pratiksha Karn</p>
                <p className="title"><span class="title_span">I'm a  </span>
                    <TypeWriter
                        options={{
                            strings: ['Developer','IT Student'],
                            autoStart: true,
                            delay:60,
                            loop: true,
                        }}
                    />
                </p>
                <div className="hero_btns">
                    <p className="cv_download">
                        <a target="_blank" rel="noreferrer"
                        href={CV} >Download CV <span><i className="fa fa-download" aria-hidden="true"></i></span></a></p>
                    <p className="hire_btn">
                        <Link to="contact">Hire Me</Link>
                    </p>
                </div>
            </div>
            <div className="hero_right">
                <img src= {Heroimage} alt="profile_image"  style={imgStyle}/>
            </div>
        </div>
    )
}

export default Hero

