import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.sass";

const Timeline = (props) => {
  console.log(props?.data?.items);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <section
      className='timeline'
      id='program'
    >
      <div className='container'>
        <div className='sectionTitleBlack'>
          <h3 className='title'>{props?.data?.mainTitle}</h3>
        </div>

        <div className='timelineItems'>
          {props?.data?.items?.map((item, index) => (
            <div
              className='timelineItem'
              data-aos='zoom-in-up'
              key={index}
            >
              <div className='timelineDot'></div>
              <div className='timelineTime'>
                <p className='time'>{item?.time}</p>
              </div>
              <div className='timelineTitle'>
                <h4 className='title'>{item?.title}</h4>
              </div>
              <div className='timelineText'>
                <p className='text'>{item?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
