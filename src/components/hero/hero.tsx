import './hero.css';
import aboutImg from '../../assets/about-img.jpg';
import  hero2  from '../../assets/hero-2.jpg';


const Hero = () => {
    return (
        <div className="container">
            <div className="hero-section">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <img src={hero2} alt="" className="img-fluid hero-img" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="hero-text align-items-center justify-content-center p-4">
                            <p>Hello. I'm</p>
                            <h1>Ayendi Simeon</h1>
                            <h2>Backend Developer</h2>
                            <div className="contact-card text-center">
                           
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Email:</strong> john.doe@example.com</p>
                            
                        </div>
                            <div className="hero-buttons">
                                <button className="btn btn-outline"><a className='nav-link' href="https://drive.google.com/file/d/1hdvpFvjTIRT_HCGtIuzkxDAr3n4MEqwM/view?usp=drive_link">Download Resume</a> </button>
                                <div className="hero-icons">
                            <span><i className="fa-brands fa-square-x-twitter"></i></span>
                            <span><i className="fa-brands fa-linkedin"></i></span>
                            <span><i className="fa-brands fa-square-github"></i></span>
                            
                                
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 ">
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 mb-4 ">
            <div className="card ">
                <div className="card-body">
                    <h5 className="card-title">Skills</h5>
                    <ul className="list-group">
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">JavaScript</li>
                        <li className="list-group-item">Framework: Django</li>
                        <li className="list-group-item">NodeJs</li>
                        <li className="list-group-item">Framework: Express Js</li>
                        <li className="list-group-item">Database Management: SQL(PostgreSql)</li>
                        <li className="list-group-item">Restful API design and integration</li>
                        <li className="list-group-item">Version control: Git, Github, Gitlab</li>
                       


                    </ul>
                    
                </div>
            </div>
            </div>
        <div className="col-lg-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Experience</h5>
                    <p className="card-text">Junior Back-end Developer - Shoptinga</p>
                    <p className="card-text"><small className="text-muted">2023 - Present</small></p>
                    <ul className="list-group">
                        <li className="list-group-item">Integrated Social Media authentication using third party django applications</li>
                        <li className="list-group-item">Built Restful API</li>
                        <li className="list-group-item">Integrated continous integration and redeployment pipelines</li>
                        
                        </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Certifications</h5>
                    <ul className="list-group">
                        <li className="list-group-item">React.js</li>
                        <li className="list-group-item">Node.js</li>
                        <li className="list-group-item">Git & GitHub</li>
                        <li className="list-group-item">Responsive Design</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </div>

        
            
            <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card project-card">
                  <img src="https://via.placeholder.com/800x400" className="card-img-top" alt="Project Image" />
                  <div className="card-body">
                    <h5 className="card-title">Project Title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum quam non lectus molestie, sit amet cursus quam malesuada. Sed vehicula eu est vel pulvinar.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
                    
    )
}

export default Hero;