'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Download, Share2, ArrowLeft, Edit2, Save, X } from 'lucide-react';
import { useAuth } from "@/context/AuthContext";

export default function ResultPage() {
  const [inspection, setInspection] = useState(null);
  const [remarks, setRemarks] = useState('');
  const [isEditingRemarks, setIsEditingRemarks] = useState(false);
  const router = useRouter();
  const { isLoggedIn, loading: authLoading } = useAuth();

  useEffect(() => {
    // Check auth
    if (!authLoading && !isLoggedIn) {
      router.push('/login');
      return;
    }

    // Get latest inspection from localStorage
    const inspections = JSON.parse(localStorage.getItem('inspections') || '[]');
    if (inspections.length > 0) {
      setInspection(inspections[0]);
      setRemarks(inspections[0].remarks || '');
    }
  }, [router, authLoading, isLoggedIn]);

  const handleSaveRemarks = () => {
    if (!inspection) return;

    const inspections = JSON.parse(localStorage.getItem('inspections') || '[]');
    const updated = inspections.map(item =>
      item.id === inspection.id ? { ...item, remarks } : item
    );
    localStorage.setItem('inspections', JSON.stringify(updated));
    setInspection({ ...inspection, remarks });
    setIsEditingRemarks(false);
  };

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'low':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  if (!inspection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Loading inspection data...</p>
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 font-semibold">
            Go back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-3xl font-bold text-slate-900">Inspection Report</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-slate-200 rounded-lg transition" title="Download">
              <Download size={20} className="text-slate-600" />
            </button>
            <button className="p-2 hover:bg-slate-200 rounded-lg transition" title="Share">
              <Share2 size={20} className="text-slate-600" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={inspection.image}
                  alt="Vehicle"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 border-4 border-blue-500 opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded">
                  <p className="text-sm">Damage area highlighted</p>
                </div>
              </div>
              <div className="p-6 border-t">
                <p className="text-sm text-slate-600">Inspection Date: {inspection.date}</p>
              </div>
            </div>

            {/* Damage Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Damage Summary</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2">Damage Type</p>
                  <p className="text-2xl font-bold text-slate-900">{inspection.damage_type}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2">Location</p>
                  <p className="text-2xl font-bold text-slate-900">{inspection.location}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2">Severity Level</p>
                  <span className={`inline-block px-4 py-2 rounded-full font-semibold border ${getSeverityColor(inspection.severity)}`}>
                    {inspection.severity}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2">Confidence Score</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-green-500 h-full"
                        style={{ width: `${inspection.confidence * 100}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-slate-900">{(inspection.confidence * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>

              {/* Damage Classification */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Classification</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-700 font-semibold mb-1">Damage Category</p>
                    <p className="text-xl font-bold text-purple-900">{inspection.repair_category}</p>
                  </div>
                  <div className={`p-4 rounded-lg border ${
                    inspection.cosmetic 
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' 
                      : 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
                  }`}>
                    <p className={`text-sm font-semibold mb-1 ${
                      inspection.cosmetic ? 'text-yellow-700' : 'text-red-700'
                    }`}>
                      Damage Type
                    </p>
                    <p className={`text-xl font-bold ${
                      inspection.cosmetic ? 'text-yellow-900' : 'text-red-900'
                    }`}>
                      {inspection.cosmetic ? 'Cosmetic' : 'Functional'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">AI Analysis</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                {inspection.explanation}
              </p>
              <p className="text-xs text-blue-600">
                <strong>Note:</strong> This analysis is simulated for demonstration. Real AI models use advanced computer vision techniques for accurate detection.
              </p>
            </div>

            {/* Remarks Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">Remarks</h3>
                {!isEditingRemarks && (
                  <button
                    onClick={() => setIsEditingRemarks(true)}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
                  >
                    <Edit2 size={18} />
                    <span>Edit</span>
                  </button>
                )}
              </div>

              {isEditingRemarks ? (
                <div className="space-y-3">
                  <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="Add your remarks here..."
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  ></textarea>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSaveRemarks}
                      className="flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
                    >
                      <Save size={18} />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => setIsEditingRemarks(false)}
                      className="flex items-center space-x-1 px-4 py-2 bg-slate-400 hover:bg-slate-500 text-white rounded-lg transition"
                    >
                      <X size={18} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-slate-700">
                  {remarks || 'No remarks added yet.'}
                </p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-3">
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                Download Report
              </button>
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
                Share Report
              </button>
              <Link
                href="/dashboard"
                className="block text-center py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition"
              >
                New Analysis
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-sm text-slate-600">Detection Confidence</p>
                  <p className="text-2xl font-bold text-slate-900">{(inspection.confidence * 100).toFixed(0)}%</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-sm text-slate-600">Severity Assessment</p>
                  <p className="text-2xl font-bold text-slate-900">{inspection.severity}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Report Date</p>
                  <p className="text-2xl font-bold text-slate-900">{inspection.date}</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-yellow-900 mb-3">Tips</h4>
              <ul className="text-sm text-yellow-800 space-y-2">
                <li>• Compare multiple angles for accuracy</li>
                <li>• Ensure good lighting for better detection</li>
                <li>• Include context in your remarks</li>
                <li>• Save reports for compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
