import { Link } from "react-router-dom";

function Navbar() {
  function colorLink(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    (event.target as HTMLAnchorElement).style.backgroundColor = "#a73b54";

    const links = document.querySelectorAll(
      ".nav-link"
    ) as NodeListOf<HTMLAnchorElement>;
    links.forEach((link) => {
      if (link !== event.target) {
        link.style.backgroundColor = "#e25788";
      }
    });
  }

  return (
    <>
      <div className="navbar">
        <Link to="/" className="nav-link" onClick={colorLink}>
          Home
        </Link>
        <Link to="/play" className="nav-link" onClick={colorLink}>
          Play
        </Link>
        <Link to="/stats" className="nav-link" onClick={colorLink}>
          Stats
        </Link>
        <Link to="/admin" className="nav-link" onClick={colorLink}>
          Admin
        </Link>
      </div>
    </>
  );
}

export default Navbar;
