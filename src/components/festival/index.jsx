import React from "react";
import "./styles.sass";
const Festival = () => {
  return (
    <section className='festival'>
      <div className='container'>
        <div className='festivalImage'>
          <img
            src='/manOnAction.jpeg'
            alt='festivalimage'
            className='img'
          />
          <div className='festivalText'>
            <p className='text'>
              Сюрприз! В нашем фестивале примет участие известный блогер, имя которого пока держится в секрете. Вы
              сможете задать ему вопросы и обсудить перспективы развития электротранспорта.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festival;
