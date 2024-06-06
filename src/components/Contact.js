import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
 const Contact = () => {

    return (
        <section id="contact">
            <div data-aos="fade-down" className="container contact_me">
                <h1><br></br></h1>
                <h1>Contact Me</h1>
                <p className="para">Do you have any query?</p>
                <p className="para">Feel free to contact with me.</p>
                
                <div data-aos="fade-down" className="contact_information row">
                    <div className=" con location col-12 col-sm-12 col-md-6 col-lg-4 ">
                    <span className="contact_icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                    <div className="my_contact_info">
                      <h6>Location</h6>
                      <p>Birgunj, Madhesh Pradesh</p>
                      </div>
                    </div >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="con call_me col-12 col-sm-12 col-md-6 col-lg-4">
                    <span className="contact_icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                    <div className="my_contact_info">
                    <h6>Call Me</h6>
                      <p>+91-7322872814</p>
                      </div>
                    </div>
                    <div className="con gmail col-12 col-sm-12 col-md-6 col-lg-4">
                    <span className="contact_icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <div className="my_contact_info">
                    <h6>Email</h6>
                    <p>karnpratiksha82@gmail.com</p>
                    </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <div className="con gmail col-12 col-sm-12 col-md-6 col-lg-4">
                    <span className="contact_icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <div className="my_contact_info">
                    
                    <a className="btn text-white mx-6"  href="#" target="_blank" role="button">Message Me</a>
                    </div>
                    </div>
                    
                </div>
               

            </div>
            <ToastContainer/>
        </section>
    )
}

export default Contact
