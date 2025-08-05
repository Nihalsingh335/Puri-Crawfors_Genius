import React, { useState } from 'react';

const ILAForm = () => {
  const [snapShortExpanded, setSnapShortExpanded] = useState(true);
  const [consignmentExpanded, setConsignmentExpanded] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">ILA Form - IN11-1514-1545-0000</h2>
      </div>

      {/* Snap Short Section */}
      <div className="mb-6">
        <div 
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => setSnapShortExpanded(!snapShortExpanded)}
        >
          <h3 className="text-md font-semibold text-gray-700">Snap Short</h3>
          <svg 
            className={`w-5 h-5 text-gray-600 transition-transform ${snapShortExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {snapShortExpanded && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Insured <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter insured name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Insurer <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">--Select Customer--</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Policy Type <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">--Select Property Type--</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Policy No <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter policy number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Claim # <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter claim number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Appointed By <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter appointed by"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Date Of Appointment <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select Date"
                />
                <div className="absolute pointer-events-none" style={{ top: '8px', right: '12px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" style={{ color: '#3B82F6' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Date Of Survey <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select Date"
                />
                <div className="absolute pointer-events-none" style={{ top: '8px', right: '12px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" style={{ color: '#3B82F6' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Consignment Section */}
      <div className="mb-6">
        <div 
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => setConsignmentExpanded(!consignmentExpanded)}
        >
          <h3 className="text-md font-semibold text-gray-700">Consignment</h3>
          <svg 
            className={`w-5 h-5 text-gray-600 transition-transform ${consignmentExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {consignmentExpanded && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Consignor <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter consignor"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Consignee <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter consignee"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Nature of Cargo <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">--Select Nature of Cargo--</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Items <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">--Select Items--</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Invoice No. <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter invoice number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Invoice Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select Date"
                />
                <div className="absolute pointer-events-none" style={{ top: '8px', right: '12px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" style={{ color: '#3B82F6' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Date Of Survey <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select Date"
                />
                <div className="absolute pointer-events-none" style={{ top: '8px', right: '12px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" style={{ color: '#3B82F6' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
        <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
          PDF Preview
        </button>
        <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
          Save as Draft
        </button>
        <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
          Send for Authorization
        </button>
        <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ILAForm; 