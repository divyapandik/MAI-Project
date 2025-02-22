

import PostProjectImage from "../Images/postproject.png";
import { FaSearch, FaRegCalendarAlt } from "react-icons/fa";
import { useState, useRef } from "react";

export default function PostProject() {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleBoxClick = () => fileInputRef.current.click();
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div className="max-w-[1440px] w-full flex flex-col md:flex-row mx-auto justify-between p-4">
      <div className="relative max-w-[570px] w-full h-[768px] rounded-[10px] overflow-hidden mx-auto md:mx-0">
        <img
          src={PostProjectImage}
          alt="Project Image"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>

      <div className="mt-6 max-w-[572px] w-full border-[1.66px] border-[#F5F5F5] rounded-[10px] bg-white shadow-lg p-6 mx-auto md:mx-0">
        <div className="bg-[#DBE7F1] max-w-[515.78px] w-full h-[168.88px] rounded-[16.58px] flex flex-col items-center justify-center p-4 text-center mx-auto">
          <h2 className="font-[Montserrat] font-bold text-[26px] leading-[31.69px] text-gray-700">
            Note
          </h2>
          <ul className="text-gray-700 text-[16px] leading-[24px] text-left list-disc pl-6">
            <li>Precision is key! Clear descriptions lead to optimal proposals.</li>
            <li>Upload relevant documents (pictures, specifications, etc.) for clarity.</li>
          </ul>
        </div>

        <div className="w-full bg-[#DBE7F1] shadow-md shadow-black/25 flex items-center justify-center rounded-md mt-6 p-4">
          <span className="text-[#003F6B] text-[20px] font-bold">Post a Project</span>
        </div>

        <p className="text-[16px] font-medium text-gray-700 mt-6">
          Select a relevant category for your project.
        </p>

        <form className="mt-6">
          <label className="block text-gray-700 font-bold text-[11.32px] leading-[13.79px] mb-1">
            Category<span className="text-red-500">*</span>
          </label>
          <select className="w-full border border-gray-300 rounded-md p-3 mt-1">
            <option>Select Options</option>
          </select>

          <label className="block text-gray-700 text-sm font-medium mt-4">
            Sub-Category<span className="text-red-500">*</span>
          </label>
          <select className="w-full border border-gray-300 rounded-md p-3 mt-1">
            <option>Select Options</option>
          </select>

          <div className="mt-6">
            <label className="block text-gray-700 font-[Montserrat] text-[26.53px] leading-[32.34px] mb-2">
              Project Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Type your Project title"
              className="w-full bg-[#E6E6E6] h-[65.43px] border-gray-300 rounded-[16.58px] px-4 text-gray-600"
            />
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-[Montserrat] text-[26.53px] leading-[32.34px] mb-2">
              Project Description<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Type here..."
              className="w-full bg-[#E6E6E6] h-[154.43px] border-gray-300 rounded-[16.58px] px-4 text-gray-600"
            ></textarea>
          </div>

          <p className="text-[26.53px] leading-[32.34px] text-gray-700 mt-6">Upload Sample</p>
          <div className="w-full h-[116.08px] bg-[#DBE7F1] border-dashed border-[0.66px] flex flex-col items-center justify-center rounded-[16.58px] mt-4 cursor-pointer" onClick={handleBoxClick}>
            <p className="text-gray-500">Drag here or <span className="text-blue-500 cursor-pointer">Browse</span></p>
            <p className="text-[#0D99FF] text-[19.9px] font-montserrat">Format: JPEG, PNG, PDF</p>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            {fileName && <p className="text-blue-700 text-[14px] mt-2">{fileName}</p>}
          </div>

          <p className="text-[26.53px] leading-[32.34px] text-gray-700 mt-6">Budget Type*</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["Fixed", "Range", "No Idea"].map((type) => (
              <button key={type} className="flex-1 min-w-[150px] h-[66.33px] bg-[#003F6B] text-white text-[16px] font-semibold rounded-[16.58px]">
                {type}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-[Montserrat] text-[26.53px] leading-[32.34px] mb-2">
              Project Location<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="Search your location..." className="w-full bg-[#E6E6E6] h-[65.43px] border-gray-300 rounded-[16.58px] px-4 pr-12 text-gray-600" />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="mt-6">
 <label className="block text-gray-700 font-[400] text-[26.53px] leading-[32.34px] font-[Montserrat] mb-2">
    Post Code<span className="text-red-500">*</span>
  </label> 
  <div className="flex gap-2">
      {[...Array(7)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          className="w-[66.33px] h-[66.33px] border border-gray-400 rounded-[16.58px] text-center text-lg font-medium focus:outline-none focus:border-blue-500"
        />
      ))}
    </div>
</div>

<div className="mt-6">

<label className="block text-gray-700 font-[400] text-[26.53px] leading-[32.34px] font-[Montserrat] mb-2"
      >
        Project Duration Days<span className="text-red-500">*</span>
      </label>

      <div className="mt-4">
        <label className="block text-gray-700 text-[18px] mb-1">Start date</label>
        <div className="relative">
          <input
            type="date"
            className="w-full h-[60px] border border-gray-400 rounded-md px-4 pr-12 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaRegCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-[18px] mb-1">Expiry date</label>
        <div className="relative">
          <input
            type="date"
            className="w-full h-[60px] border border-gray-400 rounded-md px-4 pr-12 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaRegCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-gray-700 text-[18px]">Total days:</span>
        <input
          type="text"
          placeholder="Days"
          className="ml-4 w-[100px] h-[40px] border border-gray-400 bg-gray-200 rounded-md text-center text-gray-600"
          readOnly
        />
     </div>

     </div>
      <div className="mt-4 flex items-center">
         <input type="checkbox" className="w-5 h-5 border border-gray-400 rounded-md" />
         <span className="ml-2 text-gray-700 text-[16px]">
           I Agree to the <span className="text-blue-500 cursor-pointer">Terms & Conditions</span>
         </span>
       </div>
          <div className="mt-6 flex gap-4">
            <button className="w-full h-[60px] bg-green-500 text-white text-[18px] font-semibold rounded-md shadow-md">
              Post a Project
            </button>
            <button className="w-full h-[60px] bg-red-600 text-white text-[18px] font-semibold rounded-md shadow-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
