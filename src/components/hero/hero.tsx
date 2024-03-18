import './hero.css';
import  hero2  from '../../assets/hero-2.jpg';


const Hero = () => {
    return (
        <div className="text-white-100">
           <div class name"text-white-100 text-2xl">
   Hi 👋 I am Ayendi Simeon        
</div>
<div class name"text-white-100 text-2xl">
  Backend Developer        
</div>
<section class="text-center py-16 md:py-32">
  <h1 class="text-5xl font-bold md:text-7xl animate-bounce">Hi, I'm [Your Name]</h1>
  <p class="text-xl leading-relaxed mt-4 text-gray-700 animate-fade-in-up">
    [Short description about yourself and what you do. 
    Highlight your skills or area of expertise here.]
  </p>
  <a href="#work" class="inline-flex items-center px-4 py-2 mt-8 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 animate-pulse">
    See My Work
    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7"></path></svg>
  </a>
</section>

<button class name="rounded-full px-2 border-3">Download Resume</button>
<div class="bg-gray-100 p-4 rounded-lg shadow-md">
  <h3 class="text-lg font-medium mb-2">My Skills</h3>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <li class="flex items-center">
      <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 10-4 0V5a2 2 0 00-2-2H3m14 0a2 2 0 10-4 0V5a2 2 0 00-2-2h-1m-5 12v-6a2 2 0 010-4V5a2 2 0 012-2h1m-5 12v-6a2 2 0 010-4V5a2 2 0 012-2h1"></path>
      </svg>
      <span>HTML</span>
    </li>
    <li class="flex items-center">
      <svg class="w-6 h-6 mr-2 text-green-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M7 21h-2a1 1 0 01-1-1v-14a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1zM3 10h2v11a1 1 0 001 1h8a1 1 0 001-1V10h2a1 1 0 011 1v11a2 2 0 002 2h8a2 2 0 002-2v-11a1 1 0 011-1h-2v-11a1 1 0 00-1-1H3a1 1 0 00-1 1v11z"></path>
      </svg>
      <span>CSS</span>
    </li>
    <li class="flex items-center">
      <svg class="w-6 h-6 mr-2 text-yellow-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2zm0-10v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2z"></path>
        <path d="M9 13a2 2 0 102-2v8a2 2 0 102 2z"></path>
      </svg>
      <span>JavaScript</span>
    </li>
    <li class="flex items-center">
      <svg class="w-6 h-6 mr-2 text-purple-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M8 5v5a2 2 0 002 2h8a2 2 0 00

</div>
                          
    )
}

export default Hero;