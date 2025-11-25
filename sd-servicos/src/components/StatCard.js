import React from 'react';

function StatCard({ value, label }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <div className="text-4xl font-bold text-sd-orange mb-2">
        {value}
      </div>
      <div className="text-gray-600">
        {label}
      </div>
    </div>
  );
}

export default StatCard;
