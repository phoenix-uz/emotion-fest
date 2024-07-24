import React from "react";
import "./styles.sass";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const TestDrive = () => {
  return (
    <div
      className='testdrive'
      id='testDrive'
    >
      <div className='container'>
        <div className='textDriveCOntainer'>
          <div className='textDriveTitle'>
            <h3 className='title'>
              Участвуйте в тест-драйвах и найдите идеальный электротранспорт для себя! В ближайшее время мы анонсируем
              всю информацию по модельному ряду. Следите за новостями и подписывайтесь на наши социальные сети, чтобы
              узнать информацию первыми.
            </h3>
            <div className='footerLinksBox'>
              <div className='footerLinkIcon'>
                <FaTelegramPlane />
              </div>
              <div className='footerLinkIcon'>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
