"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";
import Button from "../UI/Button";
import { FaLocationDot } from "react-icons/fa6";

import "./styles.sass";
import { Modal } from "antd";
import ModalBecomeAMember from "../modalBecomeAMember";

const Header = ({ bgBlack }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  const [modal2Open, setModal2Open] = useState(false);

  return (
    <header className={`header ${scroll ? "bgFirst" : ""}`}>
      <div className=' container'>
        <div className='headerItems'>
          <div className='headerItem'>
            <Link
              href='./'
              className='headerLogo'
            >
              <Image
                src='/emotionLogo.svg'
                alt='emotionLogo'
                className='logo'
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className='headerItem itemFullWidth'>
            <span
              className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
              onClick={(e) => toggleMenu(false)}
            ></span>
            <NavBar burgerIsOpen={burgerIsOpen} />
          </div>
          <div className='headerButton'>
            <Button onClick={() => setModal2Open(true)}>Стать учасником</Button>
            <Modal
              // title='Vertically centered modal dialog'
              centered
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
              className='modalBecomeAMember'
            >
              <ModalBecomeAMember />
            </Modal>
            <Link
              href='https://www.google.com/maps/place/Axelon+Karting+Club/@41.3281093,69.2649548,17.56z/data=!4m6!3m5!1s0x38ae8b4183b90cf3:0x856f6a9d7b3b76fb!8m2!3d41.3281368!4d69.2666474!16s%2Fg%2F11c1rt72wv?entry=ttu'
              className='location'
            >
              <FaLocationDot />
            </Link>
          </div>
          <div
            className='burgerBtnContainer'
            onClick={() => toggleMenu(!burgerIsOpen)}
          >
            <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
