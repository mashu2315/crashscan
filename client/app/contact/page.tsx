import Layout from '../components/Layout';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - VehicleDetect',
  description: 'Get in touch with the VehicleDetect team',
};

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-slate-600">We'd love to hear from you. Send us a message!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">support@vehicledetect.com</p>
                      <p className="text-slate-600">sales@vehicledetect.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-green-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                      <p className="text-slate-600">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-red-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                      <p className="text-slate-600">123 Tech Street</p>
                      <p className="text-slate-600">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <MessageSquare className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Live Chat</h3>
                    <p className="text-blue-800 mb-4">
                      We're here to help! Chat with our support team in real-time.
                    </p>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
