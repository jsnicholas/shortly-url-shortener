function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <span className="appTitle">Shortly</span>
      <ul className="space-y-4">
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li>Login</li>
        <li>
          <a className="bg-cyan rounded-lg" href="/signup">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
