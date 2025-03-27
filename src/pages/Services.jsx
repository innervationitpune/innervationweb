import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">
              Comprehensive data solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Transform your raw data into actionable insights with our comprehensive analytics solutions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced data processing</li>
                <li>• Statistical analysis</li>
                <li>• Predictive modeling</li>
                <li>• Custom reporting dashboards</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Business Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Make informed decisions with our powerful BI tools and solutions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time analytics</li>
                <li>• Interactive dashboards</li>
                <li>• Performance metrics</li>
                <li>• Trend analysis</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Data Consulting</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance to help you develop and implement effective data strategies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Strategy development</li>
                <li>• Process optimization</li>
                <li>• Technology selection</li>
                <li>• Implementation support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Training & Support</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training and ongoing support for your team.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom training programs</li>
                <li>• Workshop sessions</li>
                <li>• Technical support</li>
                <li>• Documentation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and objectives</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Analysis</h3>
              <p className="text-gray-600">Analyzing your data and processes</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Executing the solution</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and support</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services