import './hero.css';
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
                                    <p><strong>Email:</strong> AyendiSimeon3@gmail.com</p>
                                    <p><strong>Phone:</strong> +234 9075754477</p>
                                        <blockquote className="blockquote">
                                            <p className="lead">"The only way to do great work is to love what you do."</p>
                                    </blockquote>
                                        <div className="hero-icons text-center just">
                                            <a href="https://twitter.com/mrayendi"><span><i className="fa-brands fa-square-x-twitter"></i></span></a>
                                            <a href="https://www.linkedin.com/in/simeon-ayendi/"><span><i className="fa-brands fa-linkedin"></i></span></a>
                                            <a href="https://github.com/AyendiSimeon1"><span><i className="fa-brands fa-square-github"></i></span></a>
                                            
                                        
                                    </div>
                        </div>
                            <div className="hero-buttons">
                                <button className="btn btn-outline"><a className='nav-link' href="https://drive.google.com/file/d/1hdvpFvjTIRT_HCGtIuzkxDAr3n4MEqwM/view?usp=drive_link">Download Resume</a> </button>
                                
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
                        <li className="list-group-item">Managed Users Database</li>
                        <li className="list-group-item">Integrated continous integration and redeployment pipelines</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</div>       
</div>
                          
    )
}

export default Hero;