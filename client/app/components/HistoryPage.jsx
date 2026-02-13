'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Eye, Filter, Search } from 'lucide-react';

export default function HistoryPage() {
  const [inspections, setInspections] = useState([]);
  const [filteredInspections, setFilteredInspections] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      router.push('/login');
      return;
    }

    const data = JSON.parse(localStorage.getItem('inspections') || '[]');
    setInspections(data);
    setFilteredInspections(data);
  }, [router]);

  useEffect(() => {
    let filtered = inspections;

    // Filter by severity
    if (severityFilter !== 'all') {
      filtered = filtered.filter(item =>
        item.severity?.toLowerCase() === severityFilter.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.damage_type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date?.includes(searchTerm)
      );
    }

    setFilteredInspections(filtered);
  }, [searchTerm, severityFilter, inspections]);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this inspection?')) {
      const updated = inspections.filter(item => item.id !== id);
      setInspections(updated);
      localStorage.setItem('inspections', JSON.stringify(updated));
    }
  };

  const handleView = (inspection) => {
    // Save as current inspection
    const inspections = JSON.parse(localStorage.getItem('inspections') || '[]');
    const reordered = [inspection, ...inspections.filter(i => i.id !== inspection.id)];
    localStorage.setItem('inspections', JSON.stringify(reordered));
    router.push('/result');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Inspection History</h1>
          <p className="text-xl text-slate-600">View and manage all your vehicle damage inspections</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by damage type, location, or date..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-slate-600" />
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Severity Levels</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="text-sm text-slate-600">
            Showing {filteredInspections.length} of {inspections.length} inspections
          </div>
        </div>

        {/* Inspections List */}
        {filteredInspections.length > 0 ? (
          <div className="space-y-4">
            {filteredInspections.map((inspection) => (
              <div key={inspection.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image Thumbnail */}
                  <div className="md:w-40 flex-shrink-0">
                    <img
                      src={inspection.image}
                      alt="Vehicle"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Damage Type</p>
                        <p className="text-lg font-bold text-slate-900">{inspection.damage_type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Location</p>
                        <p className="text-lg font-bold text-slate-900">{inspection.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Severity</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(inspection.severity)}`}>
                          {inspection.severity}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Confidence</p>
                        <p className="text-lg font-bold text-slate-900">{(inspection.confidence * 100).toFixed(0)}%</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <span>{inspection.date}</span>
                      {inspection.remarks && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Has remarks</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-2 justify-end">
                    <button
                      onClick={() => handleView(inspection)}
                      className="flex items-center justify-center space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                    >
                      <Eye size={18} />
                      <span className="hidden md:inline">View</span>
                    </button>
                    <button
                      onClick={() => handleDelete(inspection.id)}
                      className="flex items-center justify-center space-x-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
                    >
                      <Trash2 size={18} />
                      <span className="hidden md:inline">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-xl text-slate-600 mb-4">
              {searchTerm || severityFilter !== 'all' ? 'No inspections match your filters' : 'No inspections yet'}
            </p>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Start New Inspection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
