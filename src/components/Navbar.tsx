import { NavLink } from "react-router-dom";
import { links } from "../utls/Links";

const Navbar = () => (
  <nav className="flex gap-4">
    {links.map((l) => (
      <NavLink
        className={`rounded-full bg-blue-300 p-2 hover:bg-blue-500 py-1`}
        key={l.name}
        to={l.path}
      >
        {l.name}
      </NavLink>
    ))}
  </nav>
);

export default Navbar;
