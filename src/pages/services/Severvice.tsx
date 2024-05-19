import webimage from "../../assets/images/webcode.webp";
import mobileapp from "../../assets/images/mobileapp.jpeg";
import fullstack from "../../assets/images/fullstack.jpeg";
import codereview from "../../assets/images/code-rewiew-1.jpg";
import apia from "../../assets/images/apia.png";
import support from "../../assets/images/administrator-support.avif";
const ServicePage = () => {
  return (
    <>
      <section
        id="services"
        className="min-h-[80vh] md:pt-[4rem] pb-2 bg-[#f3f0ff]"
      >
        <h1 className="text-center text-5xl  md:pb-4 py-2 font-bold text-[#5f6469]">
          Services
        </h1>
        <div className="md:px-4 px-1 grid md:grid-cols-2 gap-4">
          <div className=" p-3 rounded-md">
            <h1 className="text-3xl font-bold text-indigo-600 pb-2">
              1. Web Development
            </h1>
            <div className="flex">
              <div className="md:w-1/2 bg-indigo-0 flex justify-center items-center mr-1 rounded-md">
                <img
                  src={webimage}
                  alt=""
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="pt-2 font-thin text-lg">
                Building responsive and dynamic websites using cutting-edge
                technologies for optimal user experience.
              </div>
            </div>
          </div>
          <div className=" p-3 rounded-md">
            <h1 className="text-3xl font-bold text-indigo-600 pb-2">
              2. Mobile App Development
            </h1>
            <div className="flex">
              <div className="md:w-1/2 bg-indigo-0 flex justify-center items-center mr-1 rounded-md">
                <img
                  src={mobileapp}
                  alt=""
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="pt-2 font-thin text-lg">
                Designing and developing intuitive mobile applications for iOS
                and Android platforms, bringing your ideas to life on the go.
              </div>
            </div>
          </div>
          <div className=" p-3 rounded-md">
            <h1 className="text-3xl font-bold text-indigo-600 pb-2">
              3. Full-Stack Development
            </h1>
            <div className="flex">
              <div className="md:w-1/2 bg-indigo-300 flex justify-center items-center mr-1 rounded-md">
                <img src={fullstack} alt="" className="w-full object-cover rounded-md" />
              </div>
              <div className="pt-2 font-thin text-lg">
                Creating comprehensive web applications with expertise in both
                front-end and back-end technologies, ensuring seamless
                integration and functionality.
              </div>
            </div>
          </div>
          <div className=" p-3 rounded-md">
            <h1 className="text-3xl font-bold text-indigo-600 pb-2">
              4. Code Review and Refactoring
            </h1>
            <div className="flex">
              <div className="md:w-1/2 bg-indigo-300 flex justify-center items-center mr-1 rounded-md">
                <img
                  src={codereview}
                  alt=""
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="pt-2 font-thin text-lg">
                Conducting thorough code reviews and optimizing existing
                codebase for improved performance, readability, and
                maintainability.
              </div>
            </div>
          </div>
          <div className=" p-3 rounded-md">
            <h1 className="text-3xl font-bold text-indigo-600 pb-2">
              5. API Development and Integration
            </h1>
            <div className="flex">
              <div className="md:w-1/2 bg-indigo-300 flex justify-center items-center mr-1 rounded-md">
                <img
                  src={apia}
                  alt=""
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="pt-2 font-thin text-lg">
                Building robust APIs and integrating third-party services to
                enable seamless communication between different software
                systems.
              </div>
            </div>
          </div>
          <div className=" p-3 rounded-md">
            <h1 className="text-3xl font-bold text-indigo-600 pb-2">
              5. Maintenance and Support
            </h1>
            <div className="flex">
              <div className="md:w-1/2 bg-indigo-300 flex justify-center items-center mr-1 rounded-md">
                <img
                  src={support}
                  alt=""
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="pt-2 font-thin text-lg">
                Offering ongoing maintenance and support services to ensure the
                smooth operation and evolution of your software solutions over
                time.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
