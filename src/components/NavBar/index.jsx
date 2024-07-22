import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = ({ burgerIsOpen }) => {
  const location = useRouter();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className='navContainer'>
        <div className='navBox'>
          <div className='links'>
            <Link
              className='navLink'
              href='#unique'
            >
              E-motion фест
            </Link>
            <Link
              className='navLink'
              href='#testDrive'
            >
              Тест-драйв
            </Link>
            <Link
              className='navLink'
              href='#program'
            >
              Программа
            </Link>
            <Link
              className='navLink'
              href='#activities'
            >
              Активности
            </Link>
            <Link
              className='navLink'
              href='#openTalk'
            >
              Open-talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
