import { React, useState } from "react";
import { motion } from "framer-motion";
import Home_image_1 from "../assets/Home_image_1.jpg";
import Home_image_2 from "../assets/image.png";
import emailjs from "emailjs-com";

const serviceID = import.meta.env.VITE_SERVICE_EMAIL_ID;
const templateID = import.meta.env.VITE_SERVICE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_SERVICE_PUBLIC_KEY;

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [request, setRequest] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a tutorial or demo available?",
      answer:
        "Yes, we provide tutorials and live demos upon request. Contact us to schedule a session.",
    },
    // { question: "Do you share customer data with third parties?", answer: "No, we strictly adhere to data privacy policies and do not share customer data with third parties." },
    {
      question: "What AI and Web services/solutions do you offer?",
      answer:
        "We offer AI-powered solutions like chatbots, automation, and analytics, along with website development, eCommerce solutions, and enterprise web applications.",
    },
    {
      question: "Can you develop a custom AI chatbot for my business?",
      answer:
        "Yes, we can create a fully customized AI chatbot tailored to your business needs, including automation, customer support, and lead generation.",
    },
    // { question: "Do you offer website maintenance services?", answer: "Yes, we provide website maintenance, updates, security checks, and performance optimization to ensure your website runs smoothly." },
    {
      question:
        "Do you offer CMS-based website development (WordPress, Shopify)?",
      answer:
        "Yes, we build websites on CMS platforms like WordPress, Shopify, and other popular frameworks based on your business requirements.",
    },
    {
      question: "Can I request a customized consulting package?",
      answer:
        "Absolutely! We offer flexible consulting packages tailored to your specific business needs and challenges.",
    },
    {
      question: "Do you offer one-time consultation or ongoing support?",
      answer:
        "We offer both options. You can choose a one-time consultation or subscribe to ongoing support for long-term business success.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are set manually
    if (!name || !email || !mobile || !request) {
      alert("Please fill in all fields!");
      return;
    }

    // Prepare email template parameters
    const templateParams = {
      name: name,
      email: email,
      mobile: mobile,
      request: request,
      time: new Date().toLocaleString(),
    };

    console.log("Sending email with:", templateParams);

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        publicKey,
        templateParams
      );
      alert("Email sent successfully!");
      console.log("Email response:", response);

      // Reset each field manually
      setName("");
      setEmail("");
      setMobile("");
      setRequest("");
    } catch (error) {
      alert("Error sending email!");
      console.error("Email error:", error);
    }
  };

  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-white text-black py-20 flex">
        <div className="max-w-2xl mx-auto px-6 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-4xl font-bold mb-6">
              Business and requirement driven technology solutions
            </h1>
            <p className="text-l mb-8">
              We deliver requirement-driven technology solutions that align with
              business goals and drive growth. By combining innovation with
              cutting-edge technology, we solve complex challenges with
              simplicity. Our customized, future-ready solutions empower
              businesses to thrive in a dynamic digital landscape.
            </p>
          </motion.div>
        </div>
        <div className="mr-12 rounded-lg shadow-lg shadow-gray-700/60">
          <motion.div whileHover={{ scale: 1.03 }}>
            <img
              className="w-80 shadow-md rounded-lg"
              src={Home_image_1}
              alt=""
            />
          </motion.div>
        </div>
      </section>

      <div className="w-full h-auto p-24 bg-black text-white flex items-center justify-center flex-col gap-4 text-2xl">
        <p className="w-3/5 font-serif italic text-center">
          “Innervations IT Solutions team has saved us of complex booking system
          helping to effectively manage the needs with transparance”
        </p>
        <p className="font-serif">Rahul M</p>
      </div>

      {/* Features Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 bg-gray-200 p-6">
          <h2 className="text-3xl font-bold text-center mb-12 mt-5">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-700"
            >
              <h3 className="text-xl font-semibold mb-4">
                Website Development
              </h3>
              <p className="text-gray-500 text-sm">
                Build a visually stunning, high-performance website tailored to
                your brand’s needs. Whether it’s a sleek corporate site, a
                powerful eCommerce platform, or a dynamic web application, we
                bring your vision to life with the latest technologies
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg duration-700"
            >
              <h3 className="text-xl font-semibold mb-4">Continuous Support</h3>
              <p className="text-gray-500 text-sm">
                Experience the fusion of imagination and expertise with
                Innervation IT Solutions.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg duration-700"
            >
              <h3 className="text-xl font-semibold mb-4">
                Mobile App Development
              </h3>
              <p className="text-gray-500 text-sm">
                Engage your audience with intuitive and feature-rich mobile
                applications. From iOS to Android, we develop apps that drive
                user engagement, enhance customer experiences, and deliver
                measurable results.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg duration-700"
            >
              <h3 className="text-xl font-semibold mb-4">Project Management</h3>
              <p className="text-gray-500 text-sm">
                We offer goal and business need-oriented project management,
                ensuring efficient delivery of tailored solutions that drive
                measurable results.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg duration-700"
            >
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <p className="text-gray-500 text-sm">
                We provide expert consulting for IT services, delivering
                tailored solutions that drive innovation and business growth.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg duration-700"
            >
              <h3 className="text-xl font-semibold mb-4">
                Social Media Marketing
              </h3>
              <p className="text-gray-500 text-sm">
                Elevate your brand’s digital footprint with targeted social
                media strategies. We help businesses grow their audience,
                increase engagement, and boost conversions across platforms like
                Facebook, Instagram, LinkedIn, and more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold">
            An array of resources
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of professional services caters to a diverse
            clientele, ranging from Web development, App development to tooling
            supports.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="md:w-1/2 ml-12">
            <h3 className="text-2xlfont-serif font-semibold mb-4">
              The core principle
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>&#10003; Understand Ask</li>
              <li>&#10003; Collaboration</li>
              <li>&#10003; Feedback</li>
              <li>&#10003; Agility</li>
              <li>&#10003; Delivery</li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <img className="w-48 rounded-2xl" src={Home_image_2} alt="" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-300 rounded-lg py-20 flex justify-center">
        <div className="flex flex-row">
          <motion.div whileHover={{ scale: 1.02 }}>
            <div className="bg-white p-8 shadow-md w-96 rounded-2xl">
              <h2 className="text-xl font-semibold text-center">
                Want to work with us ?
              </h2>
              <h2 className="text-xl font-semibold text-center mb-4">
                Contact Us
              </h2>
              <form className="text-sm">
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mobile Contact</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Request</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows="3"
                    placeholder="Enter your request"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-black text-white ml-2 rounded-2xl w-96 p-6"
          >
            <h2 className="text-xl font-semibold">
              Frequently Asked Questions
            </h2>
            <div className="mt-4">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-2 border-b border-gray-600 pb-2">
                  <button
                    className="w-full text-left text-lg font-medium flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="text-sm">
                      {openIndex === index ? "▲" : "▼"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-300 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
