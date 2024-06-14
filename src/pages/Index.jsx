import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-white w-full py-6 shadow-md">
        <h1 className="text-4xl text-gray-800 font-bold text-center">Sewage Cleaning Experts</h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center p-6">
        <section className="w-full bg-white py-12 mb-8 shadow-md text-center">
          <h2 className="text-5xl font-bold mb-4">Professional Sewage Cleaning Services</h2>
          <p className="text-xl text-gray-700 mb-6">
            We provide top-notch sewage cleaning services to keep your environment clean and safe.
          </p>
          <button className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold">
            Get Started
          </button>
        </section>
        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        <section className="w-full max-w-6xl mb-8">
          <h2 className="text-4xl font-bold mb-6 text-center">Explore</h2>
          <div className="flex justify-center mb-4">
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full mx-2">New Generations</button>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-full mx-2">Featured</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="image1.jpg" alt="A dope chat application" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">A dope chat application</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="image2.jpg" alt="A URL shorter" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">A URL shorter</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="image3.jpg" alt="A math educational app" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">A math educational app</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="image4.jpg" alt="A reservation form" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">A reservation form</h3>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-green-600" />
              <span className="text-lg text-gray-700">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-green-600" />
              <span className="text-lg text-gray-700">info@sewagecleaning.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-600" />
              <span className="text-lg text-gray-700">123 Clean St, Clean City, CL 12345</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white w-full py-4 shadow-md">
        <p className="text-center text-gray-800">&copy; 2023 Sewage Cleaning Experts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;