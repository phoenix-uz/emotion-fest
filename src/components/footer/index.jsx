import Link from "next/link";
import React from "react";
import "./styles.sass";
import Image from "next/image";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";
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
                  src='/emotionLogo.svg'
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
                <FaFacebookF />
              </div>
              <div className='footerLinkIcon'>
                <FaTwitter />
              </div>
              <div className='footerLinkIcon'>
                <FaLinkedinIn />
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
                <div className='contactstext'>
                  <p className='text'>Hey@boostim.com</p>
                </div>
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
