const ProjectCard = ({ title, description, budget, image }) => {
    return (
      <div className="w-[310px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
        <div className="w-full h-[180px]">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg" />
        </div>
  
      
<div className="px-6 py-4">
  <h3 className="text-xl font-bold">{title}</h3>
  <p className="text-gray-600 text-sm mt-2 leading-tight">
    {description}
  </p>
  <div className="flex justify-between items-center mt-4">
    <p className="text-lg font-weight-400 text-blue-900">
      Budget: <span className="text-blue-900">£ {budget}</span>
    </p>
    <button className="w-[124px] h-[60px] bg-[#003F6B] text-white font-semibold rounded-lg">
      View
    </button>
  </div>
</div>

      </div>
    );
  };
  
  export default ProjectCard;
  