import image from '../../assets/about-img.jpg';

const Product = () => {

    return (
      
        
        <div className='text-white bg-gray-800'>
           <div clasName="text-white text-2xl p-2 grid grid-cols-2 ">
            <p className="font-bold text-2xl p-2 mx-5">Featured Projects</p>
            

<div class="flex my-4 max-w-sm text-white bg-gray-700 rounded-lg shadow-md overflow-hidden justify-between items-center mx-5 lg:mx-0">
  <img class="w-full h-48 object-cover" src={image} alt="Image description" />
  <div class=" px-6 py-4 w-full lg:w-auto">
    <h5 class="mb-2 text-xl font-bold tracking-tight text-white-900">Hire Up</h5>
    <p class="font-normal text-white-700">
      An online Resume Builder to craft job-ready resume in minutes
    </p>
    <button class="bg-gray-800 text-white px-2 py-1 rounded-md text-sm lg:text-base hover:bg-gray-900">Button</button>
  </div>
  
</div>             </div>
              <footer className="bg-gray-800 text-white text-center py-4">
  <p>© 2024 - Your Name or Company Name</p>
</footer>
  
        </div>
       
    )

}

export default Product;