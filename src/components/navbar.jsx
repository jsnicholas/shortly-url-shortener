function Navbar() {
  return (
    <nav className="mx-6 md:mx-32 md:mb-24 mt-6 md:mt-12 flex justify-between">
      <span className="md:hidden text-darkviolet font-bold text-3xl">
        Shortly
      </span>
      <div className="hidden md:flex space-x-8 text-gray font-bold self-start">
        <span className="text-darkviolet font-bold text-3xl">Shortly</span>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/Resources">Resources</a>
      </div>
      <div className="hidden md:flex">
        <ul className="text-gray font-bold">
          <li className="inline">
            <a href="/login">Login</a>
          </li>
          <li className="inline">
            <a
              className="bg-cyan rounded-full px-4 py-2 ml-4 text-white"
              href="/signup"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
