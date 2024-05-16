import { AppName } from "../../utils/appName";

import heroImage from "../../assets/images/hero-img.png";
const HomePage = () => {
  return (
    <>
      <section
        id="home"
        className="h-[auto] pt-[10rem] flex bg-gradient-to-r from-indigo-700 to-[#845ef7]"
      >
        <div className="md:flex md:justify-between md:items-center">
          <div className="md:w-3/4 px-2 mb-4 pb-4">
            <h1 className="text-3xl font-bold text-white">
              Bettter Digital Experience With {AppName}
            </h1>
            <h2 className="text-xl text-gray-300 mt-4">
              Welcome to my software engineering portfolio! Explore my projects,
              coding expertise, and passion for technology. Whether you're a
              seasoned professional or just starting out, you'll find valuable
              insights and a glimpse into my journey in software development.
              Let's innovate and build something amazing together!
            </h2>

            <div className="py-8">
              <a
                className="border rounded-md font-bold px-8 py-2 hover:bg-[#845ef7] text-white border-gray-300 hover:border-white"
                href="mailto:jadoiconic@gmail.com"
              >
                Hire me
              </a>
            </div>
          </div>

          <div className="">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
