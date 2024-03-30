import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    const value = e.target.checked;
    if (value) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };


  return (
    <div className="flex justify-between items-center px-10 md:h-12 ">
      <div className="relative">
      <div className="p-3 custom ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "active text-secondary text-xl underline p-2 "
              : "text-xl p-2"
          }
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "active text-secondary text-xl underline p-2 "
              : "text-xl p-2"
          }
        >
          {" "}
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "active text-secondary text-xl underline p-2 "
              : "text-xl p-2"
          }
        >
          {" "}
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "active text-secondary text-xl underline p-2 "
              : "text-xl p-2"
          }
        >
          {" "}
          Contact
        </NavLink>
      </div>
      </div>

      <div className="flex items-center gap-3" >
        <Link to='/login' > <button className="btn-outline p-2 rounded-lg ">Register</button> </Link>
        <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller"/>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
