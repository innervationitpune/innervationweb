import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="max-w-7xl mx-auto px-4 text-white text-center bg-black bg-opacity-50 p-10 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Innervation IT Solutions</h1>
            <p className="text-xl mb-8">
              We are leading transformation to hi-tech streams in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule a Meeting Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Schedule a Meeting</h2>
          <p className="text-gray-600 mb-6">Connect with our experts to discuss your business needs.</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition" onClick={() => navigate("/pagenotfound")}>
            Book Now
          </button>
        </div>
      </section>

      {/* Mission and Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We don’t just help you adapt to the future; we help you shape it. Our mission is to build future-ready enterprises that are resilient, agile, and innovative.
              </p>
              <p className="text-gray-600">
                We combine strategic foresight with technological excellence to create solutions that address today’s needs and anticipate tomorrow’s opportunities.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center"><span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>Expert team with proven success</li>
                <li className="flex items-center"><span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>Customized IT and AI solutions</li>
                <li className="flex items-center"><span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>Innovative approaches in digital transformation</li>
                <li className="flex items-center"><span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>Long-term partnerships with clients</li>
              </ul>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sustainability</h3>
              <p className="text-gray-600 mb-4">
                Committed To Keep People Healthy & Safe. Our consultants bring deep expertise in areas such as cloud computing, cybersecurity, data analytics, and business intelligence, enabling us to offer holistic strategies that address both technical and business needs. We go beyond advice; we roll up our sleeves and help you implement, monitor, and continuously improve your solutions, ensuring lasting success.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition" onClick={() => navigate("/pagenotfound")}>
                Get in Touch
              </button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">We Follow Best Practices</h3>
              <p className="text-gray-600 mb-4">
                We thrive on helping organizations tackle complex problems with innovative, customized solutions. Whether you’re dealing with legacy systems that need modernization or managing an expanding global footprint that requires seamless digital integration, we provide the expertise to turn these challenges into opportunities for growth.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>Sustainability</li>
                <li>Project On Time</li>
                <li>Modern Technology</li>
                <li>Latest Designs</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Innervation IT Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
