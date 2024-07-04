import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useHubs, useMainPorts, useSpecificPorts } from "../integrations/supabase/index.js";

const Index = () => {
  const { data: hubs, error: hubsError, isLoading: hubsLoading } = useHubs();
  const { data: mainPorts, error: mainPortsError, isLoading: mainPortsLoading } = useMainPorts();
  const { data: specificPorts, error: specificPortsError, isLoading: specificPortsLoading } = useSpecificPorts();

  if (hubsLoading || mainPortsLoading || specificPortsLoading) return <div>Loading...</div>;
  if (hubsError || mainPortsError || specificPortsError) return <div>Error loading data</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-6">
        <h1 className="text-4xl text-white font-bold text-center">Sewage Cleaning Experts</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-100">
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Professional Sewage Cleaning Services</h2>
          <p className="text-lg text-gray-700">
            We provide top-notch sewage cleaning services to keep your environment clean and safe.
          </p>
        </section>
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Residential Services</h3>
            <p className="text-gray-700">
              Our residential sewage cleaning services ensure your home remains hygienic and free from blockages.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Commercial Services</h3>
            <p className="text-gray-700">
              We offer comprehensive sewage cleaning solutions for commercial properties of all sizes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Emergency Services</h3>
            <p className="text-gray-700">
              Our team is available 24/7 to handle any sewage emergencies promptly and efficiently.
            </p>
          </div>
        </section>
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Hubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hubs.map(hub => (
              <div key={hub.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Hub {hub.id}</h3>
                <p className="text-gray-700">{hub.image}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Main Ports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainPorts.map(port => (
              <div key={port.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Port {port.id}</h3>
                <p className="text-gray-700">{port.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Specific Ports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specificPorts.map(port => (
              <div key={port.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Port {port.id}</h3>
                <p className="text-gray-700">{port.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-purple-700" />
              <span className="text-lg text-purple-700">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-purple-700" />
              <span className="text-lg text-purple-700">info@sewagecleaning.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-purple-700" />
              <span className="text-lg text-purple-700">123 Clean St, Clean City, CL 12345</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-4">
        <p className="text-center text-white">&copy; 2023 Sewage Cleaning Experts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;