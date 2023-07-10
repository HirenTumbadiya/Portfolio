import Link from "next/link";
import AboutSection from "./components/About";
import CardList from "./components/Card";
import ProjectSection from "./components/Project";
import SkillsSection from "./components/Skills";
import FooterSection from "./components/Footer";
import { HireSection } from "./components/Contact";

const HomePage: React.FC = () => {
  return (
    <>
    <div className="bg-[#001D3D] text-white h-screen">
      <header className="px-4">
        <nav>
          <ul className="flex px-20 pt-10 justify-between text-xl font-semibold">
            <li>
              <Link className=" hover:text-[#FFC300]" href={'/'}>Home</Link>
            </li>
            <li>
              <Link className=" hover:text-[#FFC300]" href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link className=" hover:text-[#FFC300]" href="/contact">Contact</Link>
            </li>
            <li>
              <Link className=" hover:text-[#FFC300]" href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="h-full flex flex-col justify-center items-center">
        <h1 className=" text-white text-9xl font-semibold">HIREN TUMBADIYA</h1>
        <Link
          href="https://github.com/HirenTumbadiya"
          target="_blank" rel="noopener noreferrer"
          className=" text-white text-8xl font-bold hover:text-[#FFC300]"
        >
          GitHub
        </Link>

        {/* Description Section */}
        <p className="text-base mt-8 px-6 text-center text-yellow-400 w-1/2">
        Passionate software developer skilled in React, Next.js, and React Native. Crafting captivating web and mobile experiences that engage users. With expertise in building robust and scalable applications, I bring creativity and attention to detail to deliver exceptional solutions that leave a lasting impact.
        </p>
      </section>
    </div>

    <div>
        <AboutSection />
    </div>
    <div>
        <CardList />
    </div>
    <div>
        <ProjectSection />
    </div>
    <div>
        <SkillsSection />
    </div>
    <div>
        <HireSection />
    </div>
    <div>
        <FooterSection />
    </div>
    </>
  );
};

export default HomePage;
