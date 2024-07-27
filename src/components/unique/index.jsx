import React from "react";
import "./styles.sass";
import Link from "next/link";

const Unique = () => {
  return (
    <div
      className='unique'
      id='unique'
    >
      <div className='container'>
        <div className='uniqueContainer'>
          <div className='uniqueItem'>
            <div className='uniqueTitle'>
              <h2 className='title'>
                {" "}
                <span className='primary'>E-motion — </span> это уникальная платформа
              </h2>
            </div>
            <div className='uniqueSubtitle'>
              <p className='subtitle'>
                E-Motion — это первый фестиваль, посвящённый экологически чистому транспорту и устойчивому развитию. Мы
                хотим вдохновить вас на использование экологичных решений в повседневной жизни и показать, как это может
                быть просто и интересно!
              </p>
            </div>
          </div>
          <div className='uniqueItem itemBottom'>
            <div className='imageUniqueBlock littleImage'>
              <img
                src='/unicCard.jpeg'
                alt='cars'
                className='img'
              />
              <div className='imageCover'>
                <div className='coverContainer'>
                  <div className='coverTitle'>
                    <h3 className='title'>
                      300<span className='primary'>+</span>
                    </h3>
                  </div>
                  <div className='coverText'>
                    <p className='text'>автомобилей на выставке</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='imageUniqueBlock maxImage'>
              <img
                src='/carImage.jpg'
                alt='uniqueImage'
                className='img'
              />
              <div className='imageCover'>
                <div className='coverContainer'>
                  <div className='coverTitleFull'>
                    <Link
                      href='#contacts'
                      className='title'
                    >
                      Зарегистрироваться
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
