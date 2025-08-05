import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FilterPanel = ({ open, onClose }) => {
  const [filters, setFilters] = useState({
    policyType: '',
    status: '',
    insurer: '',
    col: '',
    nol: '',
    date: '',
    dateOfLoss: '',
    doa: '',
    tag: ''
  });

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));

    // Update selected filters chips
    if (value && !selectedFilters.includes(value)) {
      setSelectedFilters(prev => [...prev, value]);
    }
  };

  const removeFilter = (filterToRemove) => {
    setSelectedFilters(prev => prev.filter(f => f !== filterToRemove));

    // Also clear the corresponding field
    const fieldMap = {
      'Marin Insurance': 'policyType',
      'Appointment': 'status',
      'ITC LTD': 'insurer',
      '29/07/2025 - 31/07/2025': 'date'
    };

    if (fieldMap[filterToRemove]) {
      setFilters(prev => ({
        ...prev,
        [fieldMap[filterToRemove]]: ''
      }));
    }
  };

  const clearAll = () => {
    setFilters({
      policyType: '',
      status: '',
      insurer: '',
      col: '',
      nol: '',
      date: '',
      dateOfLoss: '',
      doa: '',
      tag: ''
    });
    setSelectedFilters([]);
  };

  const handleSearch = () => {
    console.log('Selected filter values:', filters);
  };

  if (!open) return null;

  return (
    <div
      className="bg-white border border-gray-200 rounded-[10px] mb-4 transition-all duration-300 ease-in-out relative"
      style={{
        width: '100%',
        height: '205px',
        gap: '10px',
        angle: '0deg',
        opacity: 1,
        borderRadius: '10px',
        borderWidth: '1px',
        padding: '16px',
        maxWidth: '100%',
        margin: '0 0 0 0'
      }}
    >
      {/* Filter Fields */}
      <div className="h-full flex flex-col  gap-4" >
                 <div className="grid grid-cols-6 gap-2 gap-y-4 mb-2" style={{ justifyContent: 'stretch', alignItems: 'flex-start', width: '100%' }}>
                     {/* Policy Type */}
           <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle', 
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>Policy Type</label>
             <div className="relative" style={{ width: '100%', height: '28px' }}>
              <select
                value={filters.policyType}
                onChange={(e) => handleFilterChange('policyType', e.target.value)}
                className="appearance-none bg-white focus:outline-none w-full h-full"
                style={{
                  borderRadius: '4px',
                  borderWidth: '1px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  paddingLeft: '8px',
                  paddingRight: '30px',
                  border: '1px solid rgba(203, 203, 203, 1)',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: filters.policyType ? 'rgba(0, 0, 0, 1)' : 'rgba(145, 145, 145, 1)'
                }}
              >
                <option value="" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: 'rgba(145, 145, 145, 1)'
                }}>Select Policy Type</option>
                <option value="Marin Insurance" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Marin Insurance</option>
                <option value="Fire Insurance" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Fire Insurance</option>
                <option value="Health Insurance" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Health Insurance</option>
              </select>
              <FiChevronDown
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--Menu-Color, rgba(109, 112, 128, 1))' }}
              />
            </div>
          </div>

                     {/* Status */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle',
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>Status</label>
             <div className="relative" style={{ width: '100%', height: '28px' }}>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="appearance-none bg-white focus:outline-none w-full h-full"
                style={{
                  borderRadius: '4px',
                  borderWidth: '1px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  paddingLeft: '8px',
                  paddingRight: '30px',
                  border: '1px solid rgba(203, 203, 203, 1)',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: filters.status ? 'rgba(0, 0, 0, 1)' : 'rgba(145, 145, 145, 1)'
                }}
              >
                <option value="" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: 'rgba(145, 145, 145, 1)'
                }}>Select Status</option>
                <option value="Appointment" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Appointment</option>
                <option value="ILA Process" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>ILA Process</option>
                <option value="Closed" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Closed</option>
              </select>
              <FiChevronDown
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--Menu-Color, rgba(109, 112, 128, 1))' }}
              />
            </div>
          </div>

                     {/* Insurer */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle',
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>Insurer</label>
             <div className="relative" style={{ width: '100%', height: '28px' }}>
              <select
                value={filters.insurer}
                onChange={(e) => handleFilterChange('insurer', e.target.value)}
                className="appearance-none bg-white focus:outline-none w-full h-full"
                style={{
                  borderRadius: '4px',
                  borderWidth: '1px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  paddingLeft: '8px',
                  paddingRight: '30px',
                  border: '1px solid rgba(203, 203, 203, 1)',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: filters.insurer ? 'rgba(0, 0, 0, 1)' : 'rgba(145, 145, 145, 1)'
                }}
              >
                <option value="" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: 'rgba(145, 145, 145, 1)'
                }}>Select Insurer</option>
                <option value="ITC LTD" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>ITC LTD</option>
                <option value="Tata AIG" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Tata AIG</option>
                <option value="Bajaj Allianz" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Bajaj Allianz</option>
              </select>
              <FiChevronDown
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--Menu-Color, rgba(109, 112, 128, 1))' }}
              />
            </div>
          </div>

                     {/* COL */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle',
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>COL</label>
             <div className="relative" style={{ width: '100%', height: '28px' }}>
              <select
                value={filters.col}
                onChange={(e) => handleFilterChange('col', e.target.value)}
                className="appearance-none bg-white focus:outline-none w-full h-full"
                style={{
                  borderRadius: '4px',
                  borderWidth: '1px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  paddingLeft: '8px',
                  paddingRight: '30px',
                  border: '1px solid rgba(203, 203, 203, 1)',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: filters.col ? 'rgba(0, 0, 0, 1)' : 'rgba(145, 145, 145, 1)'
                }}
              >
                <option value="" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: 'rgba(145, 145, 145, 1)'
                }}>Select COL</option>
                <option value="Collision" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Collision</option>
                <option value="Short Circuit" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Short Circuit</option>
                <option value="Theft" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Theft</option>
              </select>
              <FiChevronDown
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--Menu-Color, rgba(109, 112, 128, 1))' }}
              />
            </div>
          </div>

                     {/* NOL */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle',
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>NOL</label>
             <div className="relative" style={{ width: '100%', height: '28px' }}>
              <select
                value={filters.nol}
                onChange={(e) => handleFilterChange('nol', e.target.value)}
                className="appearance-none bg-white focus:outline-none w-full h-full"
                style={{
                  borderRadius: '4px',
                  borderWidth: '1px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  paddingLeft: '8px',
                  paddingRight: '30px',
                  border: '1px solid rgba(203, 203, 203, 1)',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: filters.nol ? 'rgba(0, 0, 0, 1)' : 'rgba(145, 145, 145, 1)'
                }}
              >
                <option value="" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: 'rgba(145, 145, 145, 1)'
                }}>Select NOL</option>
                <option value="Damage" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Damage</option>
                <option value="Burnout" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Burnout</option>
                <option value="Loss" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>Loss</option>
              </select>
              <FiChevronDown
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--Menu-Color, rgba(109, 112, 128, 1))' }}
              />
            </div>
          </div>

                     {/* Date */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle',
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>Date</label>
             <div className="relative" style={{ width: '100%', height: '28px' }}>
              <input
                type="text"
                value={filters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                placeholder="Select Date"
                className="appearance-none bg-white focus:outline-none"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '4px',
                  borderWidth: '1px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '12px',
                  paddingRight: '30px',
                  border: '1px solid rgba(203, 203, 203, 1)',
                  boxSizing: 'border-box',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}
              />
              <svg className="absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: '#666666'
              }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
          </div>

                     {/* Date of Loss */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle',
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>Date of Loss</label>
             <div className="relative" style={{ width: '100%', height: '28px' }}>
              <input
                type="text"
                value={filters.dateOfLoss}
                onChange={(e) => handleFilterChange('dateOfLoss', e.target.value)}
                placeholder="Select Date"
                className="appearance-none bg-white focus:outline-none"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '4px',
                  borderWidth: '1px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '12px',
                  paddingRight: '30px',
                  border: '1px solid rgba(203, 203, 203, 1)',
                  boxSizing: 'border-box',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}
              />
              <svg className="absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: '#666666'
              }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
          </div>

                     {/* DOA */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle',
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>DOA</label>
             <div className="relative" style={{ width: '100%', height: '28px' }}>
              <select
                value={filters.doa}
                onChange={(e) => handleFilterChange('doa', e.target.value)}
                className="appearance-none bg-white focus:outline-none w-full h-full"
                style={{
                  borderRadius: '4px',
                  borderWidth: '1px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  paddingLeft: '8px',
                  paddingRight: '30px',
                  border: '1px solid rgba(203, 203, 203, 1)',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: filters.doa ? 'rgba(0, 0, 0, 1)' : 'rgba(145, 145, 145, 1)'
                }}
              >
                <option value="" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: 'rgba(145, 145, 145, 1)'
                }}>Select DOA</option>
                <option value="DOA 1" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>DOA 1</option>
                <option value="DOA 2" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>DOA 2</option>
                <option value="DOA 3" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}>DOA 3</option>
              </select>
              <FiChevronDown
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--Menu-Color, rgba(109, 112, 128, 1))' }}
              />
            </div>
          </div>

                     {/* TAG */}
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
             <label style={{
               fontFamily: 'Ubuntu Sans',
               fontWeight: 700,
               fontStyle: 'Bold',
               fontSize: '12px',
               lineHeight: '100%',
               letterSpacing: '0%',
               verticalAlign: 'middle',
               display: 'block',
               marginBottom: '4px',
               color: 'rgba(58, 58, 58, 1)',
               textAlign: 'left'
             }}>TAG</label>
             <div className="flex gap-4" style={{
               width: '100%',
               height: '28px',
               paddingTop: '8px',
               paddingBottom: '8px',
               paddingLeft: '0px',
               alignItems: 'center'
             }}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tag"
                  value="Option 1"
                  checked={filters.tag === 'Option 1'}
                  onChange={(e) => handleFilterChange('tag', e.target.value)}
                  style={{
                    width: '16px',
                    height: '16px',
                    marginRight: '4px'
                  }}
                />
                <span style={{
                  width: '56px',
                  height: '20px',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: 'rgba(0, 0, 0, 1)'
                }}>Option 1</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tag"
                  value="Option 2"
                  checked={filters.tag === 'Option 2'}
                  onChange={(e) => handleFilterChange('tag', e.target.value)}
                  style={{
                    width: '16px',
                    height: '16px',
                    marginRight: '4px'
                  }}
                />
                <span style={{
                  width: '56px',
                  height: '20px',
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: 'rgba(0, 0, 0, 1)'
                }}>Option 2</span>
              </label>
            </div>
          </div>
        </div>

                                                                       {/* Border Line - Always Visible */}
           <div className="mb-1">
             <div className="mb-2" style={{ borderTop: '1px solid rgba(107, 117, 126, 1)' }}></div>
            
                        {/* Selected Filters Chips */}
            {selectedFilters.length > 0 && (
              <div className="flex flex-wrap gap-1 items-center">
               {selectedFilters.map((filter, index) => (
                 <div
                   key={index}
                   className="bg-gray-200 text-xs rounded-full px-2 py-0.5 flex items-center gap-1"
                 >
                   <span>{filter}</span>
                   <button
                     onClick={() => removeFilter(filter)}
                     className="text-gray-600 hover:text-gray-800"
                   >
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <line x1="18" y1="6" x2="6" y2="18"></line>
                       <line x1="6" y1="6" x2="18" y2="18"></line>
                     </svg>
                   </button>
                 </div>
               ))}
               <button
                 onClick={clearAll}
                 className="bg-gray-600 text-white px-2 py-0.5 rounded text-xs hover:bg-gray-700 ml-2"
               >
                 Clear All
               </button>
             </div>
            )}
          </div>
      </div>

      {/* Action Buttons - Fixed at bottom right */}
      <div
        className="flex items-center justify-end gap-3"
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px'
        }}
      >
        <button
          onClick={onClose}
          className="bg-white border border-gray-300 rounded hover:bg-gray-100 text-gray-700"
          style={{
            width: '78px',
            height: '28px',
            gap: '6px',
            angle: '0deg',
            opacity: 1,
            fontFamily: 'Ubuntu Sans',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '12px',
            lineHeight: '30px',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          Close
        </button>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white hover:bg-blue-700"
          style={{
            width: '78px',
            height: '28px',
            gap: '3px',
            angle: '0deg',
            opacity: 1,
            borderRadius: '4px',
            fontFamily: 'Ubuntu Sans',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '12px',
            lineHeight: '30px',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterPanel; 