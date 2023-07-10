import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-[#FFC300] px-32 py-12">
      <h2 className="text-3xl font-bold mb-4">Tools of the Trade</h2>
      <div className="flex flex-col md:flex-row">
        <p className="text-lg text-gray-700 mb-8 md:w-1/2">
          Behold the technological arsenal wielded by our virtuoso, ready to tackle any project and leave a trail of conquered challenges.
        </p>
        <div className="flex flex-wrap items-center justify-center md:w-1/2">
            <ul className='flex flex-col gap-5'>
                <li><span className=' text-lg font-bold'>Languages:</span> C++,JavaScript,TypeScript,Nodejs</li>
                <li><span className=' text-lg font-bold'>Frameworks:</span> React,Nextjs,React-Native</li>
                <li><span className=' text-lg font-bold'>DataBase:</span> MongoDB</li>
                <li><span className=' text-lg font-bold'>Tools:</span> Git,VSCode</li>
                <li><span className=' text-lg font-bold'>Collaboration:</span> Slack,JIRA,Zoom</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
