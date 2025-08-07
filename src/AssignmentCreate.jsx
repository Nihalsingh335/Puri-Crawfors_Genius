import React, { useState } from 'react';

const initialSharedWith = [
  { person: '', archived: false, inspected: false },
];
const initialProducts = [
  { product: '', item: '', date: '', salvage: '', location: '', productID: '' },
];

export default function AssignmentCreate() {
  const [formStatus, setFormStatus] = useState(true);
  const [sharedWith, setSharedWith] = useState(initialSharedWith);
  const [products, setProducts] = useState(initialProducts);
  const [companyDetailsExpanded, setCompanyDetailsExpanded] = useState(true);
  const [appointedByExpanded, setAppointedByExpanded] = useState(true);

  // Handlers for Shared With
  const addSharedWith = () => setSharedWith([...sharedWith, { person: '', archived: false, inspected: false }]);
  const removeSharedWith = idx => setSharedWith(sharedWith.filter((_, i) => i !== idx));
  const updateSharedWith = (idx, key, value) => {
    setSharedWith(sharedWith.map((row, i) => i === idx ? { ...row, [key]: value } : row));
  };

  // Handlers for Products
  const addProduct = () => setProducts([...products, { product: '', item: '', date: '', salvage: '', location: '', productID: '' }]);
  const removeProduct = idx => setProducts(products.filter((_, i) => i !== idx));
  const updateProduct = (idx, key, value) => {
    setProducts(products.map((row, i) => i === idx ? { ...row, [key]: value } : row));
  };

  return (
    <div 
      className="min-h-screen px-6 py-4 font-sans"
      style={{
        background: 'rgba(255, 255, 255, 1)'
      }}
    >
      {/* Main Title - Moved to top */}
      <div className="claim-section-header mb-4" style={{fontSize: '20px'}}>Create Assignment Form</div>
      
      {/* Header */}
      <div 
        className="flex items-center justify-between pb-2 mb-4"
        style={{
          borderBottomStyle: 'solid'
        }}
      >
        <div className="flex items-center gap-4">
          <div className="font-['Ubuntu_Sans'] font-bold text-[14px] leading-[100%] tracking-[0%] align-middle text-[rgba(58,58,58,1)]">
            Clone Form
          </div>
          
          {/* Clone Form Section */}
          <div className="flex items-center gap-3">
            <input 
              type="text" 
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              style={{
                width: '314px',
                height: '28px',
                left: '86px',
                borderWidth: '1px',
                gap: '61px',
                paddingTop: '5px',
                paddingRight: '8px',
                paddingBottom: '5px',
                paddingLeft: '8px',
                borderRadius: '5px',
                border: '1px solid rgba(203, 203, 203, 1)'
              }}
              placeholder=""
            />
            <button 
              className="transition-colors"
              style={{
                width: '49px',
                height: '28px',
                angle: '0deg',
                opacity: 1,
                gap: '8px',
                paddingTop: '4px',
                paddingRight: '8px',
                paddingBottom: '4px',
                paddingLeft: '8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(0, 89, 223, 1)',
                fontFamily: 'Ubuntu Sans',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '12px',
                lineHeight: '20px',
                letterSpacing: '0%',
                color: 'rgba(255, 255, 255, 1)'
              }}
            >
              Clone
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* <span 
            className="mr-1"
            style={{
              fontFamily: 'Ubuntu Sans',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: 'rgba(58, 58, 58, 1)'
            }}
          >
            Form Status
          </span> */}
          {/* <button
            type="button"
            aria-pressed={formStatus}
            onClick={() => setFormStatus(!formStatus)}
            className="relative inline-flex items-center transition-colors focus:outline-none"
            style={{
              width: '53px',
              height: '22px',
              angle: '0deg',
              opacity: 1,
              borderWidth: '1px',
              borderRadius: '15px',
              backgroundColor: formStatus ? 'var(--Success-Color, rgba(10, 173, 70, 1))' : 'rgba(229, 231, 235, 1)',
              border: formStatus ? '1px solid var(--Success-Color, rgba(10, 173, 70, 1))' : '1px solid rgba(229, 231, 235, 1)',
              color: 'white',
              fontFamily: 'Ubuntu Sans',
              fontWeight: 700,
              fontSize: '10px',
              textTransform: 'uppercase'
            }}
          >
            <span className="ml-2">{formStatus ? 'ON' : 'OFF'}</span>
            <span
              className="absolute right-1 w-4 h-4 bg-white rounded-full shadow transition-transform"
              style={{
                transform: formStatus ? 'translateX(0)' : 'translateX(-20px)',
                border: '1px solid var(--Success-Color, rgba(10, 173, 70, 1))'
              }}
            />
          </button> */}
        </div>
      </div>
  
      {/* Form */}
      <form className="space-y-6">
        {/* Company Details */}
        <section className="bg-white mb-2 rounded-t-xl border border-[rgba(221,224,230,1)]">
          {/* Header */}
          <div 
            className="flex items-center justify-between cursor-pointer p-4 bg-[rgba(239,244,251,1)] border-b border-[rgba(203,203,203,1)] rounded-t-xl"
            onClick={() => setCompanyDetailsExpanded(!companyDetailsExpanded)}
          >
            <div className="font-['Ubuntu_Sans'] font-bold text-base leading-[30px] text-[var(--Text-Color,rgba(58,58,58,1))] m-0">Company Details</div>
            <svg 
              className={`w-5 h-5 text-gray-600 transition-transform ${companyDetailsExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Content */}
          {companyDetailsExpanded && (
            <div className="p-4">
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Company Name<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Nature Of Survey<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Type Of Claim<span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-6 mt-2">
                      <label className="flex items-center">
                        <input type="radio" name="claimType" className="mr-2" />
                        <span className="font-['Ubuntu_Sans'] font-medium text-sm leading-5 tracking-[0%] align-middle">Survey</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="claimType" className="mr-2" defaultChecked />
                        <span className="font-['Ubuntu_Sans'] font-medium text-sm leading-5 tracking-[0%] align-middle">Investigation</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Branch Office<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Branch Office --</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Owner<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Owner --</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        {/* Appointed By */}
        <section className="bg-white mb-2 rounded-t-xl border border-[rgba(221,224,230,1)]">
          {/* Header */}
          <div 
            className="flex items-center justify-between cursor-pointer p-4 bg-[rgba(239,244,251,1)] border-b border-[rgba(203,203,203,1)] rounded-t-xl"
            onClick={() => setAppointedByExpanded(!appointedByExpanded)}
          >
            <div className="font-['Ubuntu_Sans'] font-bold text-base leading-[30px] text-[var(--Text-Color,rgba(58,58,58,1))] m-0">Appointed By</div>
            <svg 
              className={`w-5 h-5 text-gray-600 transition-transform ${appointedByExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Content */}
          {appointedByExpanded && (
            <div className="p-4">
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Segment<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Appointment Mail<span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-2">
                      <input className="flex-1 h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" type="file" placeholder="Choose File" />
                      <button className="border border-[rgba(0,89,223,1)] bg-[rgba(239,244,251,1)] font-['Ubuntu_Sans'] font-semibold text-sm leading-5 text-[rgba(0,89,223,1)] cursor-pointer transition-colors px-3 py-1 rounded">Preview</button>
                    </div>
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Date of Intimation<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" type="date" />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Insured's Office<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Customer --</option>
                    </select>
                  </div>
                  <div className="flex justify-start">
                    <span className="text-gray-500 font-medium">OR</span>
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Provisional Insured<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" style={{top: '23px', opacity: 1}} />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Cause of Loss<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Cause of Loss --</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Insurer Office<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Insurer Office --</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Broker Office<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Customer Office --</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Department<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Policy Department --</option>
                    </select>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Customer Office<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Customer Office --</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Date of Appointment<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" type="date" />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Intimated Loss<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Insured Claim No.<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" />
                  </div>
                  <div className="mt-51">
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Insurer Claim No.<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Broker Claim No.<span className="text-red-500">*</span></label>
                    <input className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] text-sm" />
                  </div>
                  <div>
                    <label className="font-['Ubuntu_Sans'] font-bold text-sm leading-[100%] tracking-[0%] align-middle text-left block mb-2">Policy Type<span className="text-red-500">*</span></label>
                    <select className="w-full h-9 border border-[rgba(203,203,203,1)] rounded px-3 py-2 bg-white font-['Ubuntu_Sans'] font-normal text-sm leading-[100%] tracking-[0%] align-middle text-[rgba(145,145,145,1)]">
                      <option value="" disabled selected>-- Select Policy Type --</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        {/* Address Detail */}
        <section className="bg-white rounded border p-4 mb-2">
          <div className="claim-section-header mb-2" style={{fontSize: '16px', color: 'rgba(58, 58, 58, 1)'}}>Address Detail</div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <label className="claim-required-label mb-1">City</label>
              <input className="claim-input-container" />
            </div>
            <div className="col-span-1">
              <label className="claim-required-label mb-1">Postal Code</label>
              <input className="claim-input-container" />
            </div>
            <div className="col-span-2">
              <label className="claim-required-label mb-1">Address</label>
              <input className="claim-input-container" />
            </div>
            <div className="col-span-1">
              <label className="claim-required-label mb-1">Latitude</label>
              <input className="claim-input-container" />
            </div>
            <div className="col-span-1">
              <label className="claim-required-label mb-1">Longitude</label>
              <input className="claim-input-container" />
            </div>
          </div>
        </section>
        {/* Site Person Details */}
        <section className="bg-white rounded border p-4 mb-2">
          <div className="claim-section-header mb-2" style={{fontSize: '16px', color: 'rgba(58, 58, 58, 1)'}}>Site Person Details</div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="claim-required-label mb-1">Site Person</label>
              <input className="claim-input-container claim-input-site-person" />
            </div>
            <div className="col-span-1">
              <label className="claim-required-label mb-1">Site Phone</label>
              <input className="claim-input-container claim-input-site-phone" />
            </div>
            <div className="col-span-1">
              <label className="claim-required-label mb-1">Site Email</label>
              <input className="claim-input-container claim-input-site-email" type="email" />
            </div>
          </div>
        </section>
        {/* Shared With */}
        <section className="bg-white rounded border p-4 mb-2">
          <div className="claim-section-header mb-2" style={{fontSize: '16px', color: 'rgba(58, 58, 58, 1)'}}>Shared With</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1 font-semibold">Persons</th>
                  <th className="border px-2 py-1 font-semibold">Is Archived</th>
                  <th className="border px-2 py-1 font-semibold">Is Inspected</th>
                  <th className="border px-2 py-1 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {sharedWith.map((row, idx) => (
                  <tr key={idx}>
                    <td className="border px-2 py-1">
                      <input
                        className="w-full border rounded px-2 py-1 text-xs"
                        value={row.person}
                        onChange={e => updateSharedWith(idx, 'person', e.target.value)}
                      />
                    </td>
                    <td className="border px-2 py-1 text-center">
                      <button
                        type="button"
                        aria-pressed={row.archived}
                        onClick={() => updateSharedWith(idx, 'archived', !row.archived)}
                        className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none ${row.archived ? 'bg-green-500' : 'bg-gray-200'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${row.archived ? 'translate-x-5' : 'translate-x-1'}`}
                        />
                      </button>
                    </td>
                    <td className="border px-2 py-1 text-center">
                      <button
                        type="button"
                        aria-pressed={row.inspected}
                        onClick={() => updateSharedWith(idx, 'inspected', !row.inspected)}
                        className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none ${row.inspected ? 'bg-green-500' : 'bg-gray-200'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${row.inspected ? 'translate-x-5' : 'translate-x-1'}`}
                        />
                      </button>
                    </td>
                    <td className="border px-2 py-1 text-center">
                      <button type="button" className="text-red-500 px-2" onClick={() => removeSharedWith(idx)}>
                        &#10005;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" className="claim-form-btn mt-2" onClick={addSharedWith}>+ Add</button>
          </div>
        </section>
        {/* Product */}
        <section className="bg-white rounded border p-4 mb-2">
          <div className="claim-section-header mb-2" style={{fontSize: '16px', color: 'rgba(58, 58, 58, 1)'}}>Products</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1 font-semibold">Product</th>
                  <th className="border px-2 py-1 font-semibold">Item</th>
                  <th className="border px-2 py-1 font-semibold">Date of Issue</th>
                  <th className="border px-2 py-1 font-semibold">Salvage</th>
                  <th className="border px-2 py-1 font-semibold">Location ID</th>
                  <th className="border px-2 py-1 font-semibold">Product ID</th>
                  <th className="border px-2 py-1 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((row, idx) => (
                  <tr key={idx}>
                    <td className="border px-2 py-1">
                      <input
                        className="w-full border rounded px-2 py-1 text-xs"
                        value={row.product}
                        onChange={e => updateProduct(idx, 'product', e.target.value)}
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        className="w-full border rounded px-2 py-1 text-xs"
                        value={row.item}
                        onChange={e => updateProduct(idx, 'item', e.target.value)}
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        className="w-full border rounded px-2 py-1 text-xs"
                        type="date"
                        value={row.date}
                        onChange={e => updateProduct(idx, 'date', e.target.value)}
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        className="w-full border rounded px-2 py-1 text-xs"
                        value={row.salvage}
                        onChange={e => updateProduct(idx, 'salvage', e.target.value)}
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        className="w-full border rounded px-2 py-1 text-xs"
                        value={row.location}
                        onChange={e => updateProduct(idx, 'location', e.target.value)}
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        className="w-full border rounded px-2 py-1 text-xs"
                        value={row.productID}
                        onChange={e => updateProduct(idx, 'productID', e.target.value)}
                      />
                    </td>
                    <td className="border px-2 py-1 text-center">
                      <button type="button" className="text-red-500 px-2" onClick={() => removeProduct(idx)}>
                        &#10005;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" className="claim-form-btn mt-2" onClick={addProduct}>+ Add</button>
          </div>
        </section>
        {/* Actions */}
        <div className="flex justify-center gap-4 mt-4">
          <button type="submit" className="claim-form-btn px-8 py-2">Save</button>
          <button type="button" className="claim-form-btn px-8 py-2">Cancel</button>
        </div>
      </form>
    </div>
  );
}
