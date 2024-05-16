import heroImage from "../../assets/images/coding.png";
const AboutPage = () => {
  return (
    <>
      <section id="about" className="h-[auto] flex py-[5rem] bg-[#f3f0ff]">
        <div className="md:flex md:justify-between md:items-center">
          <div className="md:w-3/4 px-2 mb-4 pb-4 md:pl-4">
            <h1 className="text-3xl font-bold mb-4">About me</h1>
            <p className="text-xl pl-8 text-gray-900 font-thin pb-2">
              Dedicated and motivated ICT graduate with a strong foundation in
              programming and a keen interest in cutting-edge technologies.
              Eager to contribute my skills to dynamic projects, collaborate
              with like-minded professionals, and continuously expand my
              knowledge in the ever-evolving software engineering.
            </p>
            <div className="md:pl-10">
              <li className="text-xl text-indigo-800 font-normal">
                Passionate Software Engineer
              </li>
              <p className="text-xl pl-8 text-gray-900 font-thin mt">
                Dedicated to crafting innovative solutions and pushing the
                boundaries of technology.
              </p>
              <li className="text-xl text-indigo-800 font-normal">
                Expertise in
              </li>
              <p className="text-xl pl-8 text-gray-900 font-thin mt">
                Javascript,React,React Native,NodeJs
              </p>
              <li className="text-xl text-indigo-800 font-normal">
                Continuous Learner
              </li>
              <p className="text-xl pl-8 text-gray-900 font-thin mt">
                Committed to staying updated with the latest trends and
                technologies in the ever-evolving field of software development.
              </p>
              <li className="text-xl text-indigo-800 font-normal">
                Problem-Solver
              </li>
              <p className="text-xl pl-8 text-gray-900 font-thin mt">
                Thrives on tackling complex challenges and finding efficient,
                scalable solutions.
              </p>
              <li className="text-xl text-indigo-800 font-normal">
                Collaborative Spirit
              </li>
              <p className="text-xl pl-8 text-gray-900 font-thin mt">
                Enjoys working in diverse teams, exchanging ideas, and
                collectively bringing projects to life.
              </p>
              <li className="text-xl text-indigo-800 font-normal">
                Impact-Driven
              </li>
              <p className="text-xl pl-8 text-gray-900 font-thin mt">
                Strives to create software that makes a positive difference,
                whether it's enhancing user experiences or optimizing business
                processes.
              </p>
            </div>
            <div className="text-4xl mt-5 font-bold text-indigo-500">
              Let's connect and embark on exciting <br /> projects together!
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

export default AboutPage;
