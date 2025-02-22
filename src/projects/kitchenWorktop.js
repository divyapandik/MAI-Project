import kitchen from "../Images/kitchen.png";

export default function KitchenWorkTop() {
  return (
    <div className="max-w-[1400px] mx-auto  bg-[#E6E6E6] p-6 rounded-lg border border-1 mt-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6 mt-[-25px] md:ml-[-25px] relative">
        <div className="relative w-full md:w-auto flex-shrink-0">
        <img
  src={kitchen}
  alt="Kitchen Worktop"
  className="w-full md:w-[468px] h-[445px] object-cover rounded-lg block mt-6"
/>

</div>

        <div className="w-full md:w-[685px] rounded-lg p-4 mt-4 md:mt-0">
          <div className="flex flex-col">
            <h2 className="text-[22px] font-bold text-[#3E3D3D]">Kitchen Worktop</h2>
            <div className="flex flex-wrap space-x-2 mt-1">
              <span className="text-gray-700 text-sm font-medium px-3 py-1 rounded">
                Kitchen
              </span>
              <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded">
                Splashback
              </span>
            </div>
          </div>

          <div className="mt-2 text-[14px] text-gray-700 flex flex-col md:flex-row">
            <div className="mr-4">
              <p><span className="font-semibold">Project ID:</span> MAIID123</p>
              <p>Bristol - England</p>
              <p><span className="font-semibold">Duration:</span> Completed</p>
            </div>
            <div className="border-t md:border-l border-gray-400 h-[1px] md:h-full w-full md:w-[1px] self-stretch mx-4 my-2 md:my-0"></div>
            <div className="ml-4">
              <p><span className="font-semibold">Price:</span> Fixed</p>
              <p><span className="font-semibold">Expiry Date:</span> Marble</p>
            </div>
          </div>

          <hr className="border-t-[0.5px] border-gray-400 my-2" />

          <div className="flex flex-col md:flex-row justify-between text-[14px] text-gray-700">
            <p>
              <span className="font-semibold text-[#003F6B]">Project Status:</span> Active
            </p>
            <p>
              Last Update: <span className="font-semibold">2024-08-12</span>
            </p>
            <p>
              Proposal: <span className="font-semibold">23</span>
            </p>
          </div>

          <h3 className="font-montserrat font-bold text-[22px] text-gray-800 mt-4">
            Description
          </h3>
          <p className="font-montserrat font-normal text-[17px] text-gray-600 mt-2">
            Durable, heat-resistant, and available in various colors and patterns.
            Engineered stone, highly durable, non-porous, and low maintenance.
            The visible...
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <button className="w-full md:w-[218px] h-[60px] bg-[#003F6B] text-white text-lg font-semibold rounded-[10px] flex items-center justify-center">
              View
            </button>
            <button className="w-full md:w-[218px] h-[60px] bg-[#003F6B] text-white text-lg font-semibold rounded-[10px] flex items-center justify-center">
              Send a Proposal
            </button>
            <button className="w-full md:w-[218px] h-[60px] bg-[#003F6B] text-white text-lg font-semibold rounded-[10px] flex items-center justify-center">
              Apply Internship
            </button>
          </div>

          <div className="absolute top-2 right-0 w-[137px] h-[32px] bg-[#FFCD29] text-gray-800 font-semibold flex items-center justify-center rounded-md shadow-md">
            Interns: 0
          </div>
        </div>
      </div>
    </div>
  );
}
