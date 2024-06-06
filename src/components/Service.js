import React from 'react'

const Service = () => {
    return (
        <section id="services">
            <div className="container service_section">
            <h1 data-aos="fade-left"><br></br></h1>
                <h1 data-aos="fade-left">Services</h1>
                <div className="all_services">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-4">

                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-desktop" aria-hidden="true"></i></span>
                            <h5>Web Development</h5>
                            <p>Our custom web development services include both front-end and back-end development. Whether it is enhancing an existing application or architecting an enterprise application, our developers are up for the challenge.</p>
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-4" >
                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-code" aria-hidden="true"></i></span>
                            <h5>Software Development</h5>
                            <p>Our Custom Software development solutions that automate time-consuming processes with custom solutions. We not only increase the productivity of your system, but also help to gain quick financial returns.</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-4">
                            <div className="service_item " data-aos="fade-right">
                            <span className="icons"><i className="fa fa-codepen" aria-hidden="true"></i></span>
                            <h5>Projects For Students</h5>
                            <p>Many times students are confused about selecting their final year projects. It happens when students run out of ideas of which software project should we implement ?. We are here to help you at this point, we update this page with innovative software based project ideas to be used by engineering students as their final year projects.</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-6">
                            <div className=" service_item app_dev" data-aos="fade-down">
                            <span className="icons"><i className="fa fa-globe" aria-hidden="true"></i></span>
                            <h5>Progressive Web Apps</h5>
                            <p>Progressive Web App is the next best thing in the app experience that we develop. It responds more quickly than a native app. Your business can offer cached app content browsed by users during poor internet connectivity.</p>
                            
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-6">
                            <div className=" service_item" data-aos="fade-down">
                            <span className="icons"><i className="fa fa-cubes" aria-hidden="true"></i></span>
                            <h5>Build Your Startup Ideas</h5>
                            <p>While the majority of developers wants to sell you maximum hours of development, we want to bring your product to life as soon as possible. We spend on the development only the amount of time needed for your project to start generating results.</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
