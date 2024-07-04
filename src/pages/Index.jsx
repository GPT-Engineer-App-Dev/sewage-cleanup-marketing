import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-6">
        <h1 className="text-4xl text-white font-bold text-center">Port Management System</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-100">
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Manage Your Ports Efficiently</h2>
          <p className="text-lg text-gray-700">
            Our system provides comprehensive tools to manage your ports and hubs efficiently.
          </p>
        </section>
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Hubs</h3>
            <p className="text-gray-700">
              Manage your hubs with ease using our intuitive interface.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Main Ports</h3>
            <p className="text-gray-700">
              Keep track of all your main ports and their details.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Specific Ports</h3>
            <p className="text-gray-700">
              Manage specific ports and their associations with main ports.
            </p>
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
              <span className="text-lg text-purple-700">info@portmanagement.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-purple-700" />
              <span className="text-lg text-purple-700">123 Port St, Port City, PC 12345</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-4">
        <p className="text-center text-white">&copy; 2023 Port Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;