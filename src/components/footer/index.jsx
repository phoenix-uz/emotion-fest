import Link from "next/link";
import React from "react";
import "./styles.sass";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footerContainer'>
          <div className='footerLogoInfo'>
            <div
              className='footerLogo'
              style={{ display: "flex" }}
            >
              <Link
                href='./'
                className='headerLogo'
              >
                <Image
                  src='/Logo.svg'
                  alt='emotionLogo'
                  className='logo'
                  width={50}
                  height={50}
                  style={{ width: "100%" }}
                />
              </Link>
            </div>
            {/* <div className='footerText'>
              <p className='text'>
                We offers a comprehensive suite of digital marketing services that cover all aspects of our online
                presence. From SEO and social media marketing to content creation and PPC advertising, they have the
                expertise and resources to handle our diverse marketing needs.
              </p>
            </div> */}
            <div className='footerLinksBox'>
              <div className='footerLinkIcon'>
                <FaTelegramPlane />
              </div>
              <div className='footerLinkIcon'>
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className='footerNavInfo'>
            <div className='navTitle'>
              <h5 className='title'>Навигация</h5>
            </div>
            <div className='navBody'>
              <Link
                className='link'
                href='./'
              >
                E-motion фест
              </Link>
              <Link
                className='link'
                href='#testDrive'
              >
                Тест-драйв
              </Link>
              <Link
                className='link'
                href='#program'
              >
                Программа
              </Link>
              <Link
                className='link'
                href='#activities'
              >
                Активности
              </Link>
              <Link
                className='link'
                href='#openTalk'
              >
                Open-talk
              </Link>
            </div>
          </div>
          <div className='footerContactsInfo'>
            <div className='contactsInfo'>
              <h5 className='title'>Контакты</h5>
            </div>
            <div className='contactsBox'>
              <div className='contactsBoxItem'>
                <div className='contactsIcon'>
                  <FaPhoneAlt />
                </div>
                <div className='contactstext'>
                  <p className='text'>(406) 555-0120</p>
                </div>
              </div>
              <div className='contactsBoxItem'>
                <div className='contactsIcon'>
                  <IoMail />
                </div>
                <Link
                  href='https://www.google.com/maps/place/Axelon+Karting+Club/@41.3281093,69.2649548,17.56z/data=!4m6!3m5!1s0x38ae8b4183b90cf3:0x856f6a9d7b3b76fb!8m2!3d41.3281368!4d69.2666474!16s%2Fg%2F11c1rt72wv?entry=ttu'
                  className='contactstext'
                >
                  <p className='text'>Hey@boostim.com</p>
                </Link>
              </div>
              <div className='contactsBoxItem'>
                <div className='contactsIcon'>
                  <FaLocationDot />
                </div>
                <div className='contactstext'>
                  <p className='text'>Узбекистан, Ташкент, Парк Анхор</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
