'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function Analytics() {
  const [damageData, setDamageData] = useState([]);
  const [severityData, setSeverityData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const inspections = JSON.parse(localStorage.getItem('inspections') || '[]');

    // Calculate damage type frequency
    const damageCount = {};
    inspections.forEach(item => {
      damageCount[item.damage_type] = (damageCount[item.damage_type] || 0) + 1;
    });

    setDamageData(Object.entries(damageCount).map(([name, value]) => ({
      name,
      value
    })));

    // Calculate severity distribution
    const severityCount = { Low: 0, Medium: 0, High: 0 };
    inspections.forEach(item => {
      const severity = item.severity || 'Low';
      severityCount[severity] = (severityCount[severity] || 0) + 1;
    });

    setSeverityData(Object.entries(severityCount).map(([name, value]) => ({
      name,
      value
    })));

    // Calculate timeline (inspections per week)
    const weekCounts = {};
    inspections.forEach(item => {
      const week = item.date?.substring(0, 7) || 'Unknown';
      weekCounts[week] = (weekCounts[week] || 0) + 1;
    });

    setTimelineData(Object.entries(weekCounts).map(([week, count]) => ({
      week,
      count
    })));
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Analytics Dashboard</h1>
        <p className="text-xl text-slate-600 mb-12">Track your inspection statistics and patterns</p>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Total Inspections */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-slate-600 text-sm font-semibold mb-2">Total Inspections</p>
            <p className="text-4xl font-bold text-blue-600">
              {damageData.reduce((sum, item) => sum + item.value, 0)}
            </p>
          </div>

          {/* Unique Damage Types */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-slate-600 text-sm font-semibold mb-2">Unique Damage Types</p>
            <p className="text-4xl font-bold text-green-600">{damageData.length}</p>
          </div>

          {/* Most Common Severity */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-slate-600 text-sm font-semibold mb-2">Most Common Severity</p>
            <p className="text-4xl font-bold text-orange-600">
              {severityData.length > 0
                ? severityData.reduce((max, item) => item.value > max.value ? item : max, severityData[0])?.name
                : 'N/A'}
            </p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Damage Type Bar Chart */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Damage Type Frequency</h2>
            {damageData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={damageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-slate-500 text-center py-12">No data available</p>
            )}
          </div>

          {/* Severity Pie Chart */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Severity Distribution</h2>
            {severityData.length > 0 && severityData.some(item => item.value > 0) ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={severityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {severityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-slate-500 text-center py-12">No data available</p>
            )}
          </div>
        </div>

        {/* Timeline Chart */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Inspections Over Time</h2>
          {timelineData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} name="Inspections" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-slate-500 text-center py-12">No data available</p>
          )}
        </div>

        {/* Insights */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Insights</h2>
          <ul className="space-y-3 text-blue-800">
            {damageData.length > 0 && (
              <li>• Most detected damage type: <strong>{damageData[0]?.name}</strong></li>
            )}
            {severityData.length > 0 && (
              <li>• Most common severity level: <strong>
                {severityData.reduce((max, item) => item.value > max.value ? item : max, severityData[0])?.name}
              </strong></li>
            )}
            <li>• Keep analyzing more images to improve trend predictions</li>
            <li>• Regular inspections help track damage patterns over time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
