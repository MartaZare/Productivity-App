import { Link } from "react-router-dom";

function Navbar() {
  function colorLink(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    (event.target as HTMLAnchorElement).style.backgroundColor =
      "rgba(226, 87, 136)";

    const links = document.querySelectorAll(
      ".nav-link"
    ) as NodeListOf<HTMLAnchorElement>;
    links.forEach((link) => {
      if (link !== event.target) {
        link.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      }
    });
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link" onClick={colorLink}>
        Home
      </Link>
      <Link to="/play" className="nav-link" onClick={colorLink}>
        Play
      </Link>
      <Link to="/history" className="nav-link" onClick={colorLink}>
        History
      </Link>
      <Link to="/admin" className="nav-link" onClick={colorLink}>
        Admin
      </Link>
    </nav>
  );
}

export default Navbar;
