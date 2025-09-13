import { motion } from "framer-motion";

const projects = [
    {
        title: "Addis Ababa Police Semien Hotel Area",
        description: "Supplied and installed generator house and gun room ventilation system.",
        image: "/images-3/AA-police.jpg"
    },
    {
        title: "AHRI Research Center Laboratory Building Complex",
        description: "Supplied and installed duct work for central air conditioning, fresh air delivery and toilet air extraction system.",
        image: "/images-3/AHRI.jpg"
    },
    {
        title: "Asier Real Estate",
        description: "Designed, supplied and installed basement car park ventilation system using jet fans, fresh air supply and smoke exhaust duct for 3 basements.",
        image: "/images-3/Asier.jpg"
    },
    {
        title: "Berhan Bank Addis Ababa, Mekelle and Hawassa Branches",
        description: "Designed, supplied and installed vault room ventilation system.",
        image: "/images-3/Berhan AA.jpg"
    },
    {
        title: "Best Western Plus Pearl Addis",
        description: "Designed complete HVAC system for the whole hotel complex.",
        image: "/images-3/BW.jpg"
    },
    {
        title: "Capstone Building Complex",
        description: "Designed complete HVAC system for the whole hotel complex.",
        image: "/images-3/Capstone.jpg"
    },
    {
        title: "Cassiopeia Hotel",
        description: "Designed, supplied and installed ventilation system.",
        image: "/images-3/Cassiopeia.jpg"
    },
    {
        title: "Dire Dawa First Instance Federal Court",
        description: "Designed, supplied and installed split type air conditioners and 3 blade fans for all court rooms and offices.",
        image: "/images-3/Dire-dawa.jpg"
    },
    {
        title: "Dugda Safety Match Factory",
        description: "Designed, supplied and installed smoke exhaust sytem and material conveying system using duct work.",
        image: "/images-3/Dugda.jpg"
    },
    {
        title: "Federal Housing Corporation",
        description: "Supplied and installed fire hydrant system with fire pumps and garbage chute system.",
        image: "/images-3/FHC.jpg"
    },
    {
        title: "Hemen Maternity Clinic",
        description: "Designed, supplied and installed fire hydrant system with fire pumps and toilet ventilation system.",
        image: "/images-3/Hemen.jpg"
    },
    {
        title: "INSA Artificial Intellegence Data Center",
        description: "Installed and commissioned 90-rack servers air conditioning and fire-suppression system.",
        image: "/images-3/INSA.jpg"
    },
    {
        title: "Embassy Of Italy",
        description: "Supplied and installed split-type air conditioning system for multiple rooms.",
        image: "/images-3/Italy.jpg"
    },
    {
        title: "Medina Apartment",
        description: "Designed, supplied and installed kitchen and toilet ventilation duct system for each household.",
        image: "/images-3/Medina.png"
    },
    {
        title: "National Veternary Institute",
        description: "Installed and commissioned cold room panels, refrigeration systems and controls for two medicine storage rooms.",
        image: "/images-3/NVI.jpg"
    },
    {
        title: "St. Paul Hospital",
        description: "Installed, commissioned and maintained central air conditioning system (chillers and AHUs) for ICUs, NICUs, conference halls, ORs as well as toilet ventilation system and corridor ventilation system.",
        image: "/images-3/Paulos.jpg"
    },
    {
        title: "Shola Real Estate",
        description: "Designed, supplied and installed central kitchen and toilet ventilation system for 7 blocks.",
        image: "/images-3/Shola.jpg"
    },
    {
        title: "Tracon Real Estate",
        description: "Desinged, supplied and installed complete garbage chute system for 4-block apartments, each with 22 floors.",
        image: "/images-3/Tracon.jpg"
    },
    {
        title: "Wyndham 5-Star Hotel",
        description: "Installed central air conditioning (VRF) system, fire-rated kitchen, toilet ventilation, fresh air ventilation and toilet ventilation duct works.",
        image: "/images-3/Wyndham.jpg"
    },
    {
        title: "Yehuleshet Medical Center",
        description: "Supplied and installed air conditioning system for ORs as well as ventilation system for lobbies, toilets & wards and garbage chute system for the whole building.",
        image: "/images-3/Yehulshet.png"
    },
    {
        title: "Zewditu Memorial Hospital",
        description: "Supplied and installed digital fire alarm system.",
        image: "/images-3/Zewditu.jpg"
    }
];

function Projects() {
    return (
      <motion.section
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Notable Projects & Success Stories
        </h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-78 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    );
  }
  
  export default Projects;