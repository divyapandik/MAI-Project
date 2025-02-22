import postimage from "../Images/postimage.jpg";
import { FiFilter } from "react-icons/fi"; 
import { FiSearch,FiChevronDown } from "react-icons/fi";
import KitchenWorkTop from "./kitchenWorktop"



export default function Projects() {
  return (
    <>
      <section
        className="relative w-full flex flex-col items-center justify-center max-w-[1550px] mx-auto"
        style={{
          backgroundImage: `url(${postimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "308px", 
          position: "relative",
        }}
      >
     <div
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.2)", 
          }}
        ></div> 
        
      
        <div className="absolute bottom-4 w-full text-center px-4"  style={{
          height: "130px",
          background: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top:"178px"
        }}  >
           <p
          className="text-white text-center max-w-[1200px] px-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: "30px",
            lineHeight: "36.57px",
            letterSpacing: "0%",
          }}
        >
          Post your projects with specifications and details explaining the
          depth of the project, materials needed, time limit to be taken, and
          budget.
        </p>
        </div>
      </section> 
      <div className="max-w-[1440px] mx-auto px-6 mt-10">
        <h2
          className="text-gray-900 font-[Montserrat] font-bold"
          style={{
            fontSize: "26px",
            lineHeight: "31.69px",
            letterSpacing: "0%",
          }}
        >
          Project List
        </h2>

        <div className="flex items-center justify-between mt-4">
  <div className="relative w-[788px]">
    <input
      type="text"
      placeholder="Search projects..."
      className="w-full h-[60px] border border-gray-400 px-4 pr-12 rounded-md"
    />
    <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-6 h-6" />
  </div>

  <div className="flex items-center gap-4">
    <button className="w-[36px] h-[36px] flex items-center justify-center bg-gray-200 rounded-md">
      <FiFilter className="text-gray-600 w-6 h-6" />
    </button>

    <div className="relative w-[193px] h-[60px] border border-gray-400 flex items-center px-4">
      <span className="text-gray-700 text-base">Sort by</span>
      <div className="h-6 w-[1px] bg-[#D9D9D9] mx-3 ml-10"></div>
      <FiChevronDown className="text-gray-600 w-6 h-6 ml-6" />
    </div>
  </div>
</div>
      </div>
 <KitchenWorkTop/>
 <KitchenWorkTop/>
 <KitchenWorkTop/>
 <KitchenWorkTop/>


    </>
  );
}
