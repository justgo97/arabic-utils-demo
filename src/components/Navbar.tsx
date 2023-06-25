const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container px-2">
        <span className="navbar-text fs-4 fw-bold ">arabic-utils demo</span>
        <span className="justify-content-end">
          <span>
            <a
              className="text-decoration-none fs-1"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/justgo97/arabic-utils"
            >
              <i className="devicon-github-original-wordmark colored"></i>
            </a>
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
