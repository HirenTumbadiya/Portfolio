import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-8">
      <div className="flex justify-center mb-4">
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="mr-4">
          twitter
        </a>
        <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="mr-4">
          facebook
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="mr-4">
          linkdin
        </a>
        <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="mr-4">
          instagram
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          github
        </a>
      </div>
      <p className="text-center">© {new Date().getFullYear()} Hiren Tumbadiya. All rights reserved.</p>
    </footer>
  );
};

export default FooterSection;
