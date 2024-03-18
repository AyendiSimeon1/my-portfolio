import './header.css';


const Header = () => {
    return (
        <div>
            <header>
            <nav class="bg-gray-800 text-white px-4 py-2 flex justify-between">
  <a href="#" class="text-xl font-bold">My Website</a>
  
  <ul class="flex space-x-4">
    <li><a href="#" class="hover:text-gray-200">Home</a></li>
    <li><a href="#" class="hover:text-gray-200">About</a></li>
    <li><a href="#" class="hover:text-gray-200">Contact</a></li>
  </ul>
</nav>

            </header>
      
        </div>
    )
}

export default Header;

