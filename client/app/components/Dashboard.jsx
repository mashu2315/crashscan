'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, X, Image as ImageIcon, Camera, Loader } from 'lucide-react';

export default function Dashboard() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleFileSelect = (file) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('Image size must be less than 10MB');
      return;
    }

    setError('');
    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0];
    handleFileSelect(file);
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    setSelectedFile(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError('Please select an image');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulate AI analysis
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock AI response
      const mockResult = {
        damage_type: 'Dent',
        location: 'Front Left Door',
        severity: 'Medium',
        confidence: 0.91,
        cosmetic: true,
        repair_category: 'Minor Repair',
        explanation: 'Detected dent on front left door with medium severity. Cosmetic damage affecting appearance.',
      };

      setResult(mockResult);
      
      // Save to localStorage
      const inspectionData = {
        id: Date.now(),
        image: previewUrl,
        ...mockResult,
        date: new Date().toLocaleDateString(),
      };

      const inspections = JSON.parse(localStorage.getItem('inspections') || '[]');
      inspections.unshift(inspectionData);
      localStorage.setItem('inspections', JSON.stringify(inspections));

      // Redirect to result page
      setTimeout(() => {
        router.push('/result');
      }, 1000);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Check authentication
  const [isAuthorized, setIsAuthorized] = useState(null);
  useState(() => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (isAuthorized === false) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Vehicle Damage Detection</h1>
          <p className="text-xl text-slate-600">Upload an image of your vehicle for AI-powered damage analysis</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          {result ? (
            // Result Preview
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Analysis Complete</h2>
                <p className="text-slate-600">View your detailed report</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Detected Damage</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-green-700">Type</p>
                    <p className="text-xl font-bold text-green-900">{result.damage_type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-700">Location</p>
                    <p className="text-xl font-bold text-green-900">{result.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-700">Severity</p>
                    <p className="text-xl font-bold text-green-900">{result.severity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-700">Confidence</p>
                    <p className="text-xl font-bold text-green-900">{(result.confidence * 100).toFixed(0)}%</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-slate-900">Category:</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {result.repair_category}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-slate-900">Type:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.cosmetic ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {result.cosmetic ? 'Cosmetic' : 'Functional'}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-2">Explanation</h4>
                <p className="text-slate-700">{result.explanation}</p>
              </div>

              <button
                onClick={() => {
                  setResult(null);
                  handleRemoveImage();
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Analyze Another Image
              </button>
            </div>
          ) : (
            // Upload Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {/* Image Preview or Upload Area */}
              {previewUrl ? (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Vehicle"
                    className="w-full h-auto max-h-96 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
                  >
                    <X size={24} />
                  </button>
                </div>
              ) : (
                <>
                  {/* Drag and Drop Area */}
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-blue-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                  >
                    <ImageIcon className="mx-auto text-blue-600 mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Drop your image here
                    </h3>
                    <p className="text-slate-600 mb-4">
                      or click to browse from your device
                    </p>
                    <p className="text-sm text-slate-500">
                      Supported formats: JPG, PNG, WebP (Max 10MB)
                    </p>
                  </div>

                  {/* Camera/Gallery Options */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="py-3 px-4 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-lg transition flex items-center justify-center space-x-2"
                    >
                      <Upload size={20} />
                      <span>From Gallery</span>
                    </button>
                    <button
                      type="button"
                      className="py-3 px-4 bg-green-100 hover:bg-green-200 text-green-700 font-semibold rounded-lg transition flex items-center justify-center space-x-2"
                    >
                      <Camera size={20} />
                      <span>Take Photo</span>
                    </button>
                  </div>
                </>
              )}

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                className="hidden"
              />

              {/* Submit Button */}
              {previewUrl && (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      <span>Analyzing Image...</span>
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      <span>Analyze Image</span>
                    </>
                  )}
                </button>
              )}

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Results are generated using our current AI inference pipeline. Model performance will continuously improve as the system is trained on additional real-world data and scenarios.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
