import React from 'react'
import p1 from '../images/ss.PNG';
import p2 from '../images/tea.PNG';
import p3 from '../images/agency.PNG';
import p5 from '../images/service.PNG';
import p7 from '../images/food.PNG';
import p8 from '../images/foto.PNG';

const Portfolio = () => {
    const projects = [

       
        {
            name: "Bakery website",
            img: p1,
            languageOrFramwork: "HTML, CSS, JavaScript",
            link: "https://pratikshakarn.github.io/Bakery-website/"
        },
        {
            name: "Tea House Website",
            img: p2,
            languageOrFramwork: "React Js, Bootstrap,CSS",
            link: "https://pratikshakarn.github.io/Tea-House/"
        },
      
        {
            name: "Web-Agency",
            img: p3,
            languageOrFramwork: "HTML, CSS, JavaScript",
            link: "https://pratikshakarn.github.io/Web_Agency/"
        },
        {
            name: "Organic-Food-Website",
            img: p7,
            languageOrFramwork: "HTML, CSS, JavaScript",
            link: "https://pratikshakarn.github.io/Organic-Food-Website/"
        },
        {
            name: "Consultancy-website",
            img: p8,
            languageOrFramwork: "JavaScript, HTML, CSS",
            link: "https://pratikshakarn.github.io/Consultancy-website/"
        },
        {
            name: "CONSTRUCTION-SERVICES",
            img: p5,
            languageOrFramwork: "React Js, CSS",
            link: "https://pratikshakarn.github.io/CONSTRUCTION-SERVICES/"
        },
    ];
    return (
        <section id="portfolio">
            <div className="container portfolio_section">
            <h1 data-aos="fade-left"><br></br></h1>
                <h1 data-aos="fade-left">Portfolio</h1>
                <div className="all_works row">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="col-lg-6 col-xl-6 ">
                                    <div data-aos="fade-right" className="singlework">
                                        <img src={project.img} alt="project_img"/>
                                        <div className="overlay">
                                            <div className="work_link">
                                                <p className="project_name">Project: {project.name}</p>
                                                <p className="languages">Language/Framework: {project.languageOrFramwork}</p>
                                                <a target="_blank" rel="noreferrer" href={project.link}>{index === 0 ? 'Hosted Url' : 'Hosted Url'}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



            </div>

        </section>
    )
}

export default Portfolio
