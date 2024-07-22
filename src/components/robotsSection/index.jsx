import React from "react";
import "./styles.sass";
const SectionRobots = () => {
  return (
    <section className='sectionRobots'>
      <div className='container'>
        <div className='robotsImage'>
          <img
            src='/fight.jpg'
            alt='robots'
            className='img'
          />
          <div className='robotsText'>
            <p className='text'>
              Станьте свидетелем эпической битвы роботов. Смотрите, как команды инженеров собирают своих роботов и
              сражаются в октагоне, стремясь выбить соперника за пределы ринга. Не пропустите это увлекательное зрелище!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRobots;
