const AvailableInternCard = ({ name, role, image }) => {
    return (
      <div className="w-[310px] h-[331px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 flex flex-col items-center">

        <div className="w-[150px] h-[250px] border-4 border-white rounded-full mt-4 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
  

        <div className="w-[190px] h-[191px] bg-white border border-gray-300 rounded-t-lg text-center">
          <p className="text-blue-900 font-weight-400">Name: {name}</p>
          <p className="text-blue-900">role:{role}</p>
        </div>
          <button className="w-[266px] h-[77px] bg-[#003F6B] text-white font-semibold rounded-b-lg mt-2">
          View Profile
        </button>
      </div>
    );
  };
  
  export default AvailableInternCard;
  