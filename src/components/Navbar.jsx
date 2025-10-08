import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

const navItems = [
  { name: "About Us", href: "/#aboutus" },
  { name: "Guides & Flows", href: "/guides-flows" },
  { name: "Get Your Flow", href: "/getyourflow" },
  { name: "Special Flows", href: "/specialflows" },
];

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => setMenu(!menu);

  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] py-4 shadow-sm fixed w-full top-0 left-0 z-20">
      <nav className="navbar-container">
        {/* Left Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <HashLink
              smooth
              to="/#aboutus"
              className="nav-link"
              onClick={() => setMenu(false)}
            >
              About Us
            </HashLink>
          </li>
          <li>
            <a
              href="/guides-flows"
              className="nav-link"
              onClick={() => setMenu(false)}
            >
              Guides & Flows
            </a>
          </li>
        </ul>

        {/* Logo */}
        <HashLink
          smooth
          to="/#hero"
          onClick={() => setMenu(false)}
          className="font-bold text-2xl tracking-wide text-[var(--foreground)] hover:text-[var(--primary)] transition"
        >
          OffDays Yoga
        </HashLink>

        {/* Right Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="/getyourflow" className="nav-link">
              Get Your Flow
            </a>
          </li>
          <li>
            <a href="/specialflows" className="nav-link">
              Special Flows
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={handleChange}>
          {menu ? <IoMdCloseCircle size={28} /> : <RiMenu4Fill size={28} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } mobile-menu`}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            {item.href.startsWith("/#") ? (
              <HashLink
                smooth
                to={item.href}
                className="nav-link"
                onClick={() => setMenu(false)}
              >
                {item.name}
              </HashLink>
            ) : (
              <a
                href={item.href}
                className="nav-link"
                onClick={() => setMenu(false)}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </div>
    </header>
  );
};
