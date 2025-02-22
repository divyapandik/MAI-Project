import ProjectCard from "../pages/projectcard"; 
import house from "../Images/house.png";
import homeExterior from "../Images/homeExterior.png";
import livingroom from "../Images/livingroom.png";
import gardening from "../Images/gardening.png";


const projects = [
  {
    title: "Home Renovation",
    description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
    budget: 100,
    image: house
  },
  {
    title: "Living Room",
    description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
    budget: 100,
    image: livingroom
  },
  {
    title: "Living Room Gardening",
    description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
    budget: 100,
    image:gardening
  },
  {
    title: "Home Exterior",
    description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
    budget: 100,
    image:homeExterior
  }
];

const ProjectsSection = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-2xl font-bold text-black mb-6 ml-12">PROJECTS</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
