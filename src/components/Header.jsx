import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="h-16 border-b border-neutral-200 w-full">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-4 cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 rounded-xl" />
          <h1 className="font-semibold text-2xl">XENO</h1>
        </div>
        <nav className="flex gap-8 items-center">
          <ul className="flex gap-4 text-neutral-700">
            <li>
              <a href="#" className="cursor-pointer">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                Pricing
              </a>
            </li>
          </ul>
          <div className="flex gap-8">
            <button className="text-blue-500 cursor-pointer">Sign In</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Start Free Trial</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
