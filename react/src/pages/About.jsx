import React from 'react';
import about from '../images/bg-header-about.jpg';

const About = () => {
  return (
    <>
      <div>
        <div className="p-4 text-black font-bold bg-blue-400 flex justify-center">
          ABOUT US
        </div>
        <div>
          <img src={about} alt="" width="100%" />
        </div>
      </div>
      <section className="text-gray-600 body-font p-5">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
