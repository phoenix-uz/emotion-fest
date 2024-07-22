"use Client";
import React, { useState } from "react";
import Button from "../UI/button";
import Link from "next/link";
import Image from "next/image";
import "./styles.sass";
import PartnersSlider from "./partners";
import { Modal } from "antd";
import ModalBecomePartner from "../modalBecomePartner";

const IntroBlock = () => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div
      className='into'
      id='emotion'
    >
      <div className='container'>
        <div className='introContainer'>
          <div className='introMainInfo'>
            <div className='introInfo'>
              <div className='introTitle'>
                <h1 className='title'>
                  Фестиваль
                  <br />
                  Электромобилей
                </h1>
              </div>
              <div className='introSubtitle'>
                <p className='subtitle'>Станьте участником E-motion и внесите свой вклад в чистое будущее!</p>
              </div>
              <div className='introButtonsGroup'>
                <Link href='#contacts'>
                  <Button>Стать гостем</Button>
                </Link>

                <div className='introLink'>
                  <Link
                    className='link'
                    href='https://www.google.com/maps/place/Axelon+Karting+Club/@41.3281093,69.2649548,17.56z/data=!4m6!3m5!1s0x38ae8b4183b90cf3:0x856f6a9d7b3b76fb!8m2!3d41.3281368!4d69.2666474!16s%2Fg%2F11c1rt72wv?entry=ttu'
                  >
                    Ждем вас 21-22 сентября
                    <br /> в парке Анхор
                  </Link>
                </div>
              </div>
            </div>
            <div className='infoImage'>
              <Image
                src='/introImage.svg'
                alt='introImage'
                className='img'
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className='introBottomInfo'>
            <div className='partners'>
              <div className='partenersContainer'>
                <div className='partnersTitle'>
                  <h6 className='title'>Наши партнеры: </h6>
                </div>
                <div className='partnersSlider'>
                  <PartnersSlider />
                </div>
              </div>
              <Button onClick={() => setModal2Open(true)}>Cтать партнером</Button>
              <Modal
                // title='Vertically centered modal dialog'
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                className='modalBecomeAMember'
              >
                <ModalBecomePartner />
              </Modal>
            </div>
            <div className='winnerBlock'>
              <div className='winnerTitle'>
                <h2 className='title'>100+ Призов</h2>
              </div>
              <div className='winnerSubtitle'>
                <p className='subTitle'>Зарегистрируйся, стань гостем и получи шанс выиграть Iphone 15 Pro Max</p>
              </div>
              <span className='line'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBlock;
