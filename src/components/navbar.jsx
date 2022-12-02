function Navbar() {
  return (
    <nav className="mx-40 flex items-center justify-between flex-wrap p-6">
      <span className="font-bold text-3xl">Shortly</span>
      <ul className="space-y-2">
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li>Login</li>
        <li>
          <a className="bg-cyan rounded-full p-2" href="/signup">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
