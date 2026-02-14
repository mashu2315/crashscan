'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { CheckCircle, Zap, BarChart3, Shield, Camera, Brain, Clock, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const steps = [
    {
      step: 1,
      title: "Upload Image",
      desc: "Capture or upload a photo of the vehicle from your mobile device, camera, or gallery.",
    },
    {
      step: 2,
      title: "AI Analysis",
      desc: "Our AI instantly processes the image to detect damage, location, and severity level.",
    },
    {
      step: 3,
      title: "Get Results",
      desc: "Receive detailed damage report with visual overlays and confidence scores instantly.",
    },
    {
      step: 4,
      title: "Store & Analyze",
      desc: "Save inspections and track damage patterns with analytics and historical data.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50" style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1707779491283-4989f727825f?q=80&w=1312&auto=format&fit=crop')",
  }}></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight text-balance">
              AI-Driven Vehicle Damage Detection &amp; Intelligent Assessment
            </h1>
            <p className="text-xl text-black-600 mb-8 max-w-2xl mx-auto text-balance">
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
                AI-powered damage detection using a modular vision pipeline. Designed to support YOLOv8/CNN-based models for vehicle damage assessment across diverse lighting and weather conditions.
              </p>
              <p className="text-sm opacity-75">
                Current version uses a simulated AI inference module. Architecture is fully compatible with YOLOv8/CNN integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
    
{/* How It Works Section */}
<section className="px-4 sm:px-6 lg:px-8 py-20 bg-blue-50 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
      How It Works
    </h2>

    {/* Horizontal Timeline */}
    <div className="relative">
<div className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide">
        {steps.map((item, index) => {
          const isActive = index === activeStep;

          return (
            <div
  key={index}
  className={`min-w-[260px] md:min-w-[300px]
    bg-white rounded-xl p-6 shadow-md
    transition-all duration-200 ease-out
    overflow-hidden
    ${
      isActive
        ? "opacity-100 translate-x-0 scale-105"
        : "opacity-65 translate-x-4 scale-95"

    }`}
>

              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                {item.step}
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h4>

              <p className="text-slate-600 text-sm">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === activeStep
                ? "bg-blue-600 scale-125"
                : "bg-blue-300"
            }`}
          />
        ))}
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
