import dasbpard from "../../assets/images/dashboard.jpeg";
import ucc from "../../assets/images/ucc.png";
import netflix from "../../assets/images/netflix.png";
import commerce from "../../assets/images/commerce.jpg";
const PortfolioPage = () => {
  return (
    <>
      <section
        id="portfolio"
        className="bg-[#bac8ff]"
      >
        <div className="w-full md:px-4 pb-10">
          <h1 className="text-3xl font-bold text-indigo-600 text-center py-5">Portifolio</h1>
          <div className="grid md:grid-cols-4 md:gap-4">
            <div className="h-50">
              <img className="w-full h-full"
                src={dasbpard}
                alt=""
              />
            </div>
            <div className="h-50">
              <img className="w-full h-full"
                src={ucc}
                alt=""
              />
              
            </div>
            <div className="h-50">
              <img className="w-full h-full"
                src={netflix}
                alt=""
              />
              
            </div>
            <div className="h-50">
              <img className="w-full h-full object-contain"
                src={commerce} 
                style={{height:"30vh"}}
                alt=""
              />
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
