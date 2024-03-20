import navbarLinks from '../data.tsx';

const Header = () => {
    return (
        <div>
            <header>
            <nav className="bg-gray-700 text-white px-4 py-2 px-5 flex justify-center">
  <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-20 mx-5 p-3">
  {navbarLinks.map(data=>(
    <li key="data"><a href="#" className="hover:text-gray-200">{data.name}</a></li>
    ))}
  </ul>
</nav>

            </header>
        </div>
    )
}

export default Header;

