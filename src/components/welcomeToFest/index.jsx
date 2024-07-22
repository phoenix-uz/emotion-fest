import React from "react";
import Button from "../UI/button";
import "./styles.sass";

const WelcomeToFest = () => {
  return (
    <div className='welcomeToFest'>
      <div className='welcomeContainer'>
        <div className='welcomeTitle'>
          <h2 className='title'>Приходи на фест</h2>
        </div>
        <div className='welcomeCard'>
          <div className='cardItem'>
            <div className='imgeContainer'>
              <img
                src='/car3.png'
                alt='welcomeFirstImage'
                className='img'
              />
            </div>
          </div>
          <div className='itemNumber'>
            <h3 className='number'>01</h3>
          </div>
          <div className='cardItem'>
            <div className='itemContent'>
              <div className='itemTitle'>
                <h3 className='title'>Если вы</h3>
              </div>
              <div className='itemSubtitle'>
                <p className='subtitle'>
                  Интересуетесь электромобилями и хотели бы провести тест-драйв моделей 2024 года? Мы предоставим
                  современные модели электроавтомобилей, электромотоциклов и электросамокатов для тест драйва.
                </p>
              </div>
              <a href='#contacts'>
                <Button>Стать гостем</Button>
              </a>
            </div>
          </div>
        </div>
        <div className='welcomeCard'>
          <div className='cardItem white'>
            <div className='itemContent'>
              <div className='itemTitle'>
                <h3 className='title'>Если вы</h3>
              </div>
              <div className='itemSubtitle'>
                <p className='subtitle'>
                  Хотите провести веселые, полезные и интересные выходные с семьей или друзьями? Мы подготовили для
                  гостей всех возрастов огромное количество развлекательных мероприятий: концертная программа со
                  звездами, выступления лучших диджеев Узбекистана, битву роботов, open talk, выставку эко-брендов,
                  фудкорты и маркет-плейсы.
                </p>
              </div>
              <a href='#contacts'>
                <Button>Стать гостем</Button>
              </a>
            </div>
          </div>
          <div className='itemNumber'>
            <h3 className='black'>02</h3>
          </div>
          <div className='cardItem'>
            <div className='imgeContainer'>
              <img
                src='/family2.png'
                alt='introImage'
                className='img'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToFest;
