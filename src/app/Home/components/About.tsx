import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className='bg-[#FFC300] py-20'>
      <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 className="text-base font-bold mb-5 text-gray-800">About Me</h2>
          <p className="text-5xl text-black font-semibold">
          I’m a software developer on a mission to create remarkable software solutions that solve complex problems with ease.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src="/about.png" alt="About Me" className=" h-3/4" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
