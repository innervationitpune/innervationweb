import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const serviceID = import.meta.env.VITE_SERVICE_EMAIL_ID;
const templateID = import.meta.env.VITE_SERVICE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_SERVICE_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS expects a specific structure
    const templateParams = {
      ...formData,
      time: new Date().toLocaleString() // Adding timestamp
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setStatus({
        type: 'success',
        message: 'Email sent successfully!'
      });

      console.log("Email response:", response);

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });

      console.error("Email error:", error);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4">Contact Us</motion.h1>
          <p className="text-xl">We are here to assist you. Reach out today!</p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">Fill out the form and our team will contact you soon.</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Office Location</h3>
                <p className="text-gray-600">Ravet, Pune</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Contact Info</h3>
                <p className="text-gray-600">mobile: +91 82753 12045</p>
                <p className="text-gray-600">Email: vedant.golegaonkar@innervationit.com</p>
              </div>
              <div className="flex space-x-4 text-xl mt-4">
                <FaFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
                <FaLinkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
                <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {status.message && (
              <div className={`mb-4 p-4 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full p-3 border rounded" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full p-3 border rounded" />
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className="w-full p-3 border rounded" />
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message" required className="w-full p-3 border rounded"></textarea>
              <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white px-6 py-3 rounded font-semibold transition duration-300 hover:bg-blue-700">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Find Us on Map</h2>
        <iframe className="w-full max-w-4xl h-96 mx-auto border rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.947395295432!2d73.76310997503296!3d18.520430771065386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13f32aa2271%3A0x4f0c65e5f3f3d717!2sRavet%2C%20Pune!5e0!3m2!1sen!2sin!4v1645353348210!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
      </section>
    </div>
  );
};

export default Contact;