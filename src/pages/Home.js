

import groupimage from "../Images/Group.svg";
import rectangle from "../Images/Rectangle.png";
import Garden1 from "../Images/Garden1.png";
import Garden2 from "../Images/Garden2.png";
import stone from "../Images/stone.png";
import Electricwork from "../Images/Electricwork.png";
import { BiFilter } from "react-icons/bi";
import Twoman from "../Images/Twoman.png";
import bed from "../Images/bed.png";
import AvailableInternSection from "./AvailableInternSection";
import ProjectsSection from "./projectsection";
import blog from "../Images/blog.png";

export default function Home() {
  const projects = [
    { image: Garden2, name: "Interior Works" },
    { image: stone, name: "Stone Fixing" },
    { image: Electricwork, name: "Electrical Works" },
    { image: Garden1, name: "Gardening Setup" },
  ];

  const projects2 = Array(4).fill({
    id: 1,
    title: "Bedroom Renovation",
    subtitle: "Kitchen Worktop",
    location: "Bristol - England",
    material: "Slab - Marble",
    duration: "Duration: completed",
    image: bed,
  });

  const blogs = Array(5).fill({
    title: "Safe measures can refer to a wide range of precautions",
    image: blog,
  });

  return (
    <>
      <section
        className="relative w-full flex flex-col md:flex-row items-center justify-between max-w-[1550px] mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${rectangle})` }}
      >
        <div className="w-full md:w-[698px] px-6 md:px-12 py-16 text-white ml-12">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight tracking-wide">
            Manage your project
            <span className="ml-2 bg-gradient-to-r from-[#25E905] via-[#5EC5FF] to-[rgba(255,245,9,0.97)] bg-clip-text text-transparent">
              FASTER
            </span>
          </h1>
          <button className="mt-6 w-full md:w-[406px] h-16 bg-blue-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-600 transition">
            Explore Your Project
          </button>
        </div>
        <div className="w-full md:w-[698px] flex items-center justify-center">
          <img src={groupimage} alt="Construction Workers" className="max-w-xs md:max-w-md lg:max-w-lg object-cover" />
        </div>
      </section>

      <section className="w-screen bg-white overflow-hidden mt-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between pb-4">
          <h2 className="text-2xl font-bold text-gray-800 ml-40">LIVE PROJECT</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <input type="text" placeholder="Search Your Live Project" className="px-4 py-2 w-full md:w-[429px] border rounded-md" />
            <div className="relative w-full md:w-[481px]">
              <input type="text" placeholder="Search for your location.." className="px-4 py-2 w-full border rounded-md pr-12" />
              <BiFilter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 py-2">
          {projects.map((project, index) => (
            <img key={index} src={project.image} alt={project.name} className="max-w-xs md:max-w-sm" />
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1440px] mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Project Post</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects2.map((project, index) => (
            <div key={index} className="w-full max-w-xs bg-white shadow-lg rounded-lg border p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
              <div className="py-4">
                <p className="text-md font-semibold text-gray-600">{project.subtitle}</p>
                <p className="text-sm text-gray-500">{project.location}</p>
                <p className="text-sm text-gray-500">{project.material}</p>
                <p className="text-sm text-gray-500">{project.duration}</p>
              </div>
              <button className="w-full h-[57px] bg-[#003F6B] text-white text-lg font-semibold rounded-md">View Project</button>
            </div>
          ))}
        </div>
      </section>
      <AvailableInternSection />
      <ProjectsSection />  


           <section className="w-full max-w-[1440px] mx-auto mt-10 px-4">        <h2 className="text-2xl font-bold mb-4">Blog</h2>
        <div className="flex overflow-x-auto space-x-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-[302px] h-[262px] bg-white shadow-lg rounded-lg p-4 border border-gray-200"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[260px] h-[143px] rounded-md object-cover"
              />
              <p className="text-sm mt-2 font-medium text-center">{blog.title}</p>
            </div>
          ))}
        </div>
      </section>


<section className="w-full max-w-[1440px] mx-auto mt-10 bg-white  rounded-lg overflow-hidden">
  <h2 className="text-3xl font-bold text-gray-800  py-6">Enquiry Now</h2>

  <div className="flex flex-col lg:flex-row items-center justify-between">
    <div className="w-full lg:w-[523px] h-[712px]">
      <img
        src={Twoman}
        alt="Construction Workers"
        className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
      />
    </div>

    <div className="w-full bg-[#E6E6E6] lg:w-[801px] h-[712px] px-10 py-8 border border-gray-300 bg-white">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Name*</label>
          <input 
            type="text" 
            placeholder="Enter" 
            className="w-full h-[60px] border border-gray-400 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Mobile Number*</label>
          <input 
            type="text" 
            placeholder="Enter your number" 
            className="w-full h-[60px] border border-gray-400 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Email ID*</label>
          <input 
            type="email" 
            placeholder="Enter Mail" 
            className="w-full h-[60px] border border-gray-400 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Site Location*</label>
          <input 
            type="text" 
            placeholder="Enter your location" 
            className="w-full h-[60px] border mb-10 border-gray-400 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button 
          className="w-full h-[60px] bg-[#003F6B] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#002B4D] transition"
        >
          Get a Quotes
        </button>

        <p className="text-gray-500 text-sm text-center">We'll get back to you</p>
      </form>
    </div>
  </div>
</section>

     
    </>
  );
}
