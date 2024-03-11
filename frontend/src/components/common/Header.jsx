import React from "react";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import Logo from "../../assets/images/bookunluck-logo.png";
function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerShow, setHeaderShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setHeaderShow(false);
      } else {
        setHeaderShow(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={headerShow ? "header-show" : "header-hide"}>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a href='/'>
            <img src={Logo} alt='bookunluck' className='logo' />
          </a>
        </div>
        <div className='container'>
          <div className='navbar-menu'>
            <a className='navbar-item' href='/'>
              Home
            </a>
            <a className='navbar-item' href='/explore'>
              Explore
            </a>
            <HashLink className='navbar-item' to='/#aboutus'>
              About Us
            </HashLink>
            <a className='navbar-item' href='#topbooks'>
              Top 10 Books
            </a>
          </div>
          <div className='profile'>
            <a className='navbar-item user' href='/signup'>
              Sign up
            </a>
            <a className='navbar-item user' href='/login'>
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
