import AvailableInternCard from "./AvailableInternCard";
import man1 from "../Images/man1.png"
import man2 from "../Images/man2.png"
import man3 from "../Images/man3.png"
import man4 from "../Images/man4.png"


const interns = [
  { name: "Jery Macson", role: "Intern", image: man1 },
  { name: "Jane Doe", role: "Intern", image:man2 },
  { name: "John Smith", role: "Intern", image: man3 },
  { name: "John Smith", role: "Intern", image: man4},

];

const AvailableInternSection = () => {
  return ( 


    
    <div className="w-full py-10">
      <h2 className="text-2xl font-bold text-black ml-14 mb-6">
        AVAILABLE INTERN
      </h2>
      <div className="flex flex-wrap justify-between py-2 mx-14 gap-2">
  {interns.map((intern, index) => (
    <AvailableInternCard key={index} {...intern} />
  ))}
</div>

    </div>
  );
};

export default AvailableInternSection;
