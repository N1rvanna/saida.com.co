import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Contact = () => (
  <div className="py-24 bg-white" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-4">Let's Talk Sustainability</h2>
          <p className="text-lg text-gray-600 mb-8">Get in touch with our waste management experts to discuss your specific needs and requirements.</p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
            </div>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition font-semibold w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-medium">contact@saidaesp.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="font-medium">123 Business Street, City, Country</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-primary-100 transition group">
                  <Facebook className="h-5 w-5 text-gray-600 group-hover:text-primary-600" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-primary-100 transition group">
                  <Twitter className="h-5 w-5 text-gray-600 group-hover:text-primary-600" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-primary-100 transition group">
                  <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-primary-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
