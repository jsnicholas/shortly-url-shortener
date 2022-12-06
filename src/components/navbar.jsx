function Navbar() {
  return (
    <nav className="mx-32 mb-24 mt-8 flex justify-between gap-4">
      <div>
        <span className="font-bold text-3xl mr-4">Shortly </span>
        <ul className="inline-block text-gray font-bold">
          <li className="inline mr-4">
            <a href="/features">Features</a>
          </li>
          <li className="inline mr-4">
            <a href="/pricing">Pricing</a>
          </li>
          <li className="inline mr-4">
            <a href="/Resources">Resources</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="inline-block text-gray font-bold">
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
