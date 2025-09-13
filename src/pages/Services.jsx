import React, { useState } from "react";
import hvacImage from "/images-2/hvac.jpg";
import refrigerationImage from "/images-2/refrigeration.avif";
import medicalGasImage from "/images-2/medical-gas.avif";
import fireFightingImage from "/images-2/fire-fighting.webp";
import waterPumpsImage from "/images-2/water-pump.jpg";
import waterTankImage from "/images-2/water-tank.jpg";
import garbageChuteImage from "/images-2/garbage-door.jpg";

const servicesData = {
  "HEATING, VENTILATION AND AIR-CONDITIONING (HVAC)": {
    image: hvacImage,
    description:
      "Experience the difference of modern HVAC solutions with MIDO. We're dedicated to creating efficient and comfortable environments for businesses and individuals, tackling everything from air quality challenges to precise temperature control. Our expert team leverages advanced technology and industry-leading practices to provide comprehensive HVAC services, from tailored design to professional installation. Choose MIDO for a smarter, more comfortable future.",
    subServices: [
      "Design of entire HVAC system using MEP and engineering tools.",
      "Supply VRF units, AHUs, chillers, fans, unitary AC, rooftops, grilles, dampers…etc.",
      "Manufacture ducts and install them along with all supplied units.",
      "Commission and handover projects with adequate testing and training.",
    ],
  },
  "REFRIGERATION SYSTEM": {
    image: refrigerationImage,
    description:
      "Every business has unique cold storage needs. MIDO delivers customized cold room systems, designed and installed by our team of experts. From precise temperature control to energy-efficient operation, we provide solutions tailored to your specific requirements. Partner with MIDO for cold room expertise you can trust.",
    subServices: [
      "Custom cold room design tailored to your needs.",
      "Installation of energy-efficient refrigeration units.",
      "Temperature monitoring and control solutions.",
      "Regular maintenance and troubleshooting services.",
    ],
  },
  "MEDICAL GAS SUPPLY SYSTEM": {
    image: medicalGasImage,
    description:
      "Precision and compliance are non-negotiable in medical gas systems. MIDO delivers meticulously designed and installed systems that adhere to the strictest industry standards, guaranteeing accurate gas delivery for optimal patient care. Rely on MIDO for medical gas systems that meet and exceed regulatory requirements.",
    subServices: [
      "Medical gas pipeline system design and installation.",
      "Compliance with healthcare safety regulations.",
      "Oxygen and vacuum system integration.",
      "Routine testing and certification services.",
    ],
  },
  "FIRE-FIGHTING SYSTEM (SPRINKLER AND CABINET TYPE)": {
    image: fireFightingImage,
    description:
      "Firefighting is now regarded as one of the most important and basic necessity for any construction. Depending on the client’s capacities and needs, MIDO has the experience and capacity to supply, install and test both cabinet fire hose system and sprinkler system in projects like hotels, apartments, hospitals and so on. MIDO also supplies and installs fire pumps from quality and world-renowned suppliers.",
    subServices: [
      "Design and installation of automatic sprinkler systems.",
      "Fire suppression using cabinet-type fire-fighting units.",
      "Inspection and maintenance of fire safety systems.",
      "Compliance with local fire safety regulations.",
    ],
  },
  "WATER PUMPS AND PIPINGS": {
    image: waterPumpsImage,
    description:
      "Every water system has unique requirements. MIDO provides customized pump and piping solutions, designed and installed by our team of experts. From precise water pressure to efficient distribution, we tailor solutions to your specific needs. Partner with MIDO for water system expertise you can trust.",
    subServices: [
      "Water pump system design and consultation.",
      "Installation of industrial and commercial water pumps.",
      "Maintenance and troubleshooting of pump systems.",
      "Water pressure optimization and piping solutions.",
    ],
  },
  "GRP / STAINLESS STEEL WATER TANK": {
    image: waterTankImage,
    description:
      "Tailored water storage solutions to meet your exact needs. MIDO provides customized GRP and stainless steel tanks, designed and installed by our experienced team. From precise capacity requirements to efficient installation, we deliver solutions that fit your specifications. Partner with MIDO for water tank expertise you can rely on.",
    subServices: [
      "Fabrication and installation of GRP and stainless steel tanks.",
      "Leak-proof and corrosion-resistant tank coatings.",
      "Customization based on capacity and space availability.",
      "Regular inspections and preventive maintenance.",
    ],
  },
  "GARBAGE CHUTE SYSTEM": {
    image: garbageChuteImage,
    description:
      "Invest in a reliable and long-lasting waste management solution with MIDO's durable garbage chute systems. Built for robust performance and minimal maintenance, our systems ensure consistent and dependable operation. Choose MIDO for garbage chute systems that stand the test of time.",
    subServices: [
      "Installation of high-quality garbage chute systems.",
      "Fire-rated and odor-control chute designs.",
      "Routine maintenance and cleaning services.",
      "Customization based on building requirements.",
    ],
  },
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(
    "HEATING, VENTILATION AND AIR-CONDITIONING (HVAC)"
  );

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row mt-10 p-4">
      {/* Sidebar Menu */}
      <div className="md:w-1/3 flex flex-col space-y-4">
        {Object.keys(servicesData).map((service, index) => (
          <button
            key={index}
            className={`p-3 text-left rounded-lg transition-all duration-300 bg-[#0072BC] font-semibold ${
              selectedService === service
                ? "bg-[#0072BC] text-white font-semibold !important"
                : "bg-gray-100 text-[#0072BC] hover:bg-[#0072BC] hover:text-white !important"
            }`}
            onClick={() => setSelectedService(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Service Details */}
      <div className="md:w-2/3 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          {selectedService}
        </h2>
        <img
          src={servicesData[selectedService].image}
          alt={selectedService}
          className="w-full h-100 object-cover rounded-lg shadow-md mb-4"
        />
        <p className="text-gray-700">
          {servicesData[selectedService].description}
        </p>
        {/* Sub-services List */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Services Include:
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          {servicesData[selectedService].subServices.map(
            (subService, index) => (
              <li key={index} className="mb-1">
                {subService}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Services;
