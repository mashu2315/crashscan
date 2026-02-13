'use client';

import { useRouter } from 'next/navigation';
import { CheckCircle, Zap, BarChart3, Shield, Camera, Brain, Clock, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();

  const handleUploadClick = () => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/signup');
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight text-balance">
              AI-Driven Vehicle Damage Detection &amp; Intelligent Assessment
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto text-balance">
              Instantly identify vehicle damage, location, and severity with advanced AI technology. Accurate, fast, and reliable for insurance claims, dealer intake, and inspections.
            </p>
            <button
              onClick={handleUploadClick}
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Upload Vehicle Image
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Time-Consuming</h3>
              <p className="text-slate-600">
                Manual vehicle inspections are slow, requiring trained inspectors and hours of assessment time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inconsistent Results</h3>
              <p className="text-slate-600">
                Different assessors provide different evaluations, leading to disputes and disagreements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-yellow-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Missed Damages</h3>
              <p className="text-slate-600">
                Minor damages like scratches and dents are often overlooked during manual inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Our Solution</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Powered by Advanced AI</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Instant Detection</h4>
                    <p className="text-slate-600">Analyze vehicle damage in seconds, not hours</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Accurate Classification</h4>
                    <p className="text-slate-600">Identify damage type, location, and severity automatically</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Consistency</h4>
                    <p className="text-slate-600">Get standardized, unbiased assessments every time</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Explainable AI</h4>
                    <p className="text-slate-600">Understand why damage was flagged with visual overlays</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
              <Brain size={64} className="mb-4 opacity-80" />
              <h4 className="text-2xl font-bold mb-4">Advanced AI Model</h4>
              <p className="mb-4 opacity-90">
                YOLOv8/CNN-based detection optimized for vehicle damage assessment across all weather and lighting conditions.
              </p>
              <p className="text-sm opacity-75">
                AI model placeholder — will be replaced by YOLOv8/CNN implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Upload Image</h4>
                <p className="text-slate-600">
                  Capture or upload a photo of the vehicle from your mobile device, camera, or gallery.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">AI Analysis</h4>
                <p className="text-slate-600">
                  Our AI instantly processes the image to detect damage, location, and severity level.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Get Results</h4>
                <p className="text-slate-600">
                  Receive detailed damage report with visual overlays and confidence scores instantly.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  4
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Store &amp; Analyze</h4>
                <p className="text-slate-600">
                  Save inspections and track damage patterns with analytics and historical data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
              <Zap className="text-green-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Faster Inspections</h3>
              <p className="text-slate-600">Reduce inspection time from hours to minutes with instant AI analysis.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200">
              <Shield className="text-purple-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Reduced Disputes</h3>
              <p className="text-slate-600">Consistent, objective assessments reduce disagreements and claims processing time.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 border border-blue-200">
              <BarChart3 className="text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Automation</h3>
              <p className="text-slate-600">Automate repetitive assessment tasks and reduce human error.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 border border-orange-200">
              <Camera className="text-orange-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Scalable</h3>
              <p className="text-slate-600">Works for motorcycles, scooters, 3W vehicles, and full-size 4W vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Vehicle Inspections?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start uploading vehicle images and get instant AI-powered damage detection reports.
          </p>
          <button
            onClick={handleUploadClick}
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
