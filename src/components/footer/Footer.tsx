import { AppName } from "../../utils/appName";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b to-70% from-indigo-700 to-[#7950f2] px-10 pt-10">
      <div className="container">
        <div className="md:flex md:justify-between border-b gap-2 border-gray-400 pb-5">
          <div className="md:w-1/4">
            <h3 className="font-bold text-xl text-white">{AppName}</h3>
            <p className="text-gray-300">
              Kigali Rwanda <br />
              Gasabo
              <br />
              <strong>Phone:</strong> +250 787 328 089
              <br />
              <strong>Email:</strong> jadoiconinc@gmail.com
              <br />
            </p>
          </div>

          <div className="md:w-1/4">
            <h4 className="font-bold text-lg text-white">Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#" className="text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#" className="text-gray-300">
                  About us
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#" className="text-gray-300">
                  Services
                </a>
              </li>
              
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#" className="text-gray-300">
                Terms and Privacy
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h4 className="font-bold text-lg text-white">Our Services</h4>
            <ul>
              
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#" className="text-gray-300">
                  Software Development
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#" className="text-gray-300">
                  Product Management
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#" className="text-gray-300">
                  Marketing
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="#" className="text-gray-300">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h4 className="font-bold text-lg text-white">
              Join Our Newsletter
            </h4>
            <p className="text-gray-300">
            Stay informed, subscribe to stay connected with the latest news
            </p>
            <div className="py-2">
              <input type="email" className="py-1 px-4 rounded-l-md outline-none" />
              <button className="py-1 px-2 rounded-r-md bg-indigo-800 text-white font-bold">
                Subscribe
              </button>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="md:flex justify-between py-4">
          <div className="text-white">
            <div className="">
              &copy; Copyright{" "}
              <strong>
                <span>{AppName}</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="text-sm">
              Designed by <a href="">Jean de Dieu Nizeyimana</a>
            </div>
          </div>
          <div className="flex gap-2 text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="text-gray-300">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-gray-300">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-gray-300">
            <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-gray-300">
              <i className="bi bi-google"></i>
            </a>
            <a href="#" className="text-gray-300">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
