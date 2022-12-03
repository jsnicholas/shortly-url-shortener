function Navbar() {
  return (
    <nav className="mx-40 mb-24 mt-8 flex justify-between gap-4">
      <div>
        <span className="font-bold text-3xl mr-4">Shortly </span>
        <ul className="inline-block">
          <li className="inline mr-4">Features</li>
          <li className="inline mr-4">Pricing</li>
          <li className="inline mr-4">Resources</li>
        </ul>
      </div>
      <div>
        <a className="" href="/login">
          Login
        </a>
        <a
          className="bg-cyan rounded-full px-4 py-2 ml-4 text-white"
          href="/signup"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
