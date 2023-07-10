import React from 'react';

export const HireSection: React.FC = () => {
  return (
    <section className="bg-[#FFC300] px-32 py-12 flex flex-col justify-center items-center ">
        <div className='w-1/2'>
      <div className="flex justify-center mb-6">
        <img src="/smiley-image.png" alt="Smiley" className="w-24 h-24" />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">Ready for a Coding Adventure?</h1>
      <p className="text-lg text-gray-500 mb-8 text-center">
        Brace yourself for a thrilling journey with our software developer extraordinaire!
        The time has come to embark on a coding voyage packed with awe and intrigue.
      </p>
      <div className="flex justify-center">
        <button className="bg-white hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-3xl">
          Hire Me!
        </button>
      </div>
      </div>
    </section>
  );
};
