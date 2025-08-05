import React from 'react';
import { FiX, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const surveyors = [
  {
    name: 'Esther Howard',
    role: 'Field',
    distance: '12 km',
    location: 'Durgapur, West Bengal',
    fee: '₹ 500',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    phone: '95625 65822',
    email: 'estherhoward@example.com',
  },
  {
    name: 'Cameron Williamson',
    role: 'Field',
    distance: '12 km',
    location: 'Durgapur, West Bengal',
    fee: '₹ 500',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    phone: '95625 65823',
    email: 'cameronwilliamson@example.com',
  },
  {
    name: 'Wade Warren',
    role: 'Field',
    distance: '45 km',
    location: 'Ranigunj, West Bengal',
    fee: '₹ 500',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    phone: '95625 65824',
    email: 'wadewarren@example.com',
  },
  {
    name: 'Guy Hawkins',
    role: 'Field',
    distance: '75 km',
    location: 'Ranigunj, West Bengal',
    fee: '₹ 500',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    phone: '95625 65825',
    email: 'guyhawkins@example.com',
  },
  {
    name: 'Robert Fox',
    role: 'Field',
    distance: '75 km',
    location: 'Ranigunj, West Bengal',
    fee: '₹ 500',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    phone: '95625 65826',
    email: 'robertfox@example.com',
  },
  {
    name: 'Jacob Jones',
    role: 'Field',
    distance: '75 km',
    location: 'Ranigunj, West Bengal',
    fee: '₹ 500',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    phone: '95625 65827',
    email: 'jacobjones@example.com',
  },
  {
    name: 'Albert Flores',
    role: 'Field',
    distance: '75 km',
    location: 'Ranigunj, West Bengal',
    fee: '₹ 500',
    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
    phone: '95625 65828',
    email: 'albertflores@example.com',
  },
];

const AssignSurveyorPage = ({ onSurveyorSelected }) => {
  const navigate = useNavigate();

  const handleAssign = (surveyor) => {
    if (onSurveyorSelected) {
      onSurveyorSelected(surveyor);
    }
  };

  const handleClose = () => {
    if (onSurveyorSelected) {
      // If called from parent component, just close without navigation
      onSurveyorSelected(null);
    } else {
      // If called as standalone page, navigate back
      navigate(-1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[43.5rem] p-8 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-gray-700">Assign a New Surveyor</h2>
          <button className="text-gray-400 hover:text-gray-600 text-xl" onClick={handleClose}>
            <FiX />
          </button>
        </div>
        {/* Filters */}
        <div className="flex items-center gap-2 mb-4">
          <select className="border rounded px-2 py-1 text-sm min-w-[120px]">
            <option>-Select Zone-</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm min-w-[120px]">
            <option>-Select City-</option>
          </select>
          <input type="date" className="border rounded px-2 py-1 text-sm min-w-[120px]" value="2025-07-22" readOnly />
          <input type="time" className="border rounded px-2 py-1 text-sm min-w-[90px]" value="17:30" readOnly />
          <div className="flex items-center gap-2">
            <div className="flex items-center border rounded px-2 py-1 w-32 bg-white">
              <input type="text" className="w-full outline-none px-1 py-0.5 text-sm bg-white" placeholder="Search" />
            </div>
            <button className=" ml-1 mr-10  border border-blue-700 text-blue-600 rounded px-2 py-1 text-sm font-semibold flex items-center bg-white">
              <FiSearch />
            </button>
          </div>
        </div>
        {/* Surveyor List */}
        <div className="divide-y divide-gray-200">
          {surveyors.map((s, idx) => (
            <div key={idx} className="flex items-center py-3">
              <img src={s.avatar} alt={s.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow mr-3" />
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-0">
                <div className="flex flex-col mr-4 min-w-[120px]">
                  <span className="font-semibold text-sm text-gray-800 leading-tight">{s.name}</span>
                  <span className="text-xs text-gray-500 leading-tight">{s.role}</span>
                </div>
                <div className="flex flex-col mr-4 min-w-[70px]">
                  <span className="text-blue-600 font-semibold text-sm leading-tight">{s.distance}</span>
                </div>
                <div className="flex flex-col mr-4 min-w-[160px]">
                  <span className="text-xs text-gray-500 leading-tight">{s.location}</span>
                </div>
                <div className="flex flex-col mr-4 min-w-[80px]">
                  <span className="text-sm font-semibold text-gray-700 leading-tight">Fee: <span className="text-black">{s.fee}</span></span>
                </div>
              </div>
              <button 
                className="ml-4 border border-blue-600 text-blue-600 px-5 py-1.5 rounded font-semibold hover:bg-blue-50 transition text-sm"
                onClick={() => handleAssign(s)}
              >
                Assign
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignSurveyorPage; 