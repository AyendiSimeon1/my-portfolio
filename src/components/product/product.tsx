

import './product.css';

const Product = () => {

    return (
        <div className='text-center'>

                <h1 className='text center'>Product Show Case</h1>
                <div id="carouselExample" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                    <div className="card carousel-card">
                        <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 1" />
                        <div className="card-body">
                        <h5 className="card-title">Coming Soon</h5>
                        <p className="card-text">....</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    </div>

                    
                    <div className="carousel-item">
                    <div className="card carousel-card">
                        <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 2" />
                        <div className="card-body">
                        <h5 className="card-title">Product 2</h5>
                        <p className="card-text">Description of Product 2.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <div className="card carousel-card">
                        <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 3" />
                        <div className="card-body">
                        <h5 className="card-title">Product 3</h5>
                        <p className="card-text">Description of Product 3.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                
                </a>
                </div>
        </div>
    )

}

export default Product;