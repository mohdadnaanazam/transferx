export const Navbar = () => {
  return (
    <nav className="bg-zinc-950 bg-opacity-80 p-3 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-white ml-9">LOGO</div>

        <div className="text-white flex w-3/4 justify-center space-x-10">
          <ul className="list-none flex space-x-10">
            <li className="hover:text-gray-300 transition duration-300 ease-in-out cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-gray-300 transition duration-300 ease-in-out cursor-pointer">
              Services
            </li>
          </ul>
        </div>

        <button className="text-white px-3 py-2 cursor-pointer mr-9">
          Register
        </button>
      </div>
    </nav>
  )
}
