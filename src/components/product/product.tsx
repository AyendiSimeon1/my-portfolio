import image from '../../assets/about-img.jpg';

const Product = () => {

    return (
      
        
        <div className='text-white bg-gray-800'>
           <div clasName="text-white text-2xl p-2 grid grid-cols-2 ">
            <p className="font-bold text-2xl p-2 mx-5">Featured Projects</p>
            

            <div className="my-1 max-w-screen-xl  text-white bg-gray-700 rounded-lg shadow-md overflow-hidden flex px-2 py-2  ">
  <img className="w-full h-48 lg:w-1/3 lg:h-48 " src={image} alt="Image description" />
  <div className="lg:ml-1 ">
    <h5 className="text-2xl lg:text-xl font-bold  text-white">Hire Up</h5>
    <p className="font-normal text-white-700">
      An online Resume Builder to craft job-ready resume in minutes
    </p>
    <div className="flex justify-end mt-1">
      <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm lg:text-base hover:bg-gray-900">Button</button>
    </div>
  </div>
</div>
                      </div>
              <footer className="bg-gray-800 text-white text-center py-4">
  <p>© 2024 - Your Name or Company Name</p>
</footer>
  
        </div>
       
    )

}

export default Product;