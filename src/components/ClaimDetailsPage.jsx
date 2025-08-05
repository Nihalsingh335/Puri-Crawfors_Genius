import React, { useState, useEffect } from 'react'
import { BsCalendar, BsFileEarmarkText, BsClipboardCheck, BsClipboardData, BsPencil, BsFileEarmark, BsFileEarmarkSpreadsheet, BsBox, BsBank, BsGear, BsPlus, BsEye, BsTelephone, BsEnvelope, BsGeoAlt, BsCamera, BsCameraVideo, BsSticky, BsArrowsExpand, BsX, BsChevronDown, BsCalendarDate } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import AssignSurveyorPage from './AssignSurveyorPage'
import ILAForm from './ILAForm'
import Assignment from '../assets/Assignment.svg'
import Surveyor from '../assets/Surveyor.svg'
import JIR from '../assets/JIR.svg'
import ILA from '../assets/ILA.svg'
import LOR from '../assets/LOR.svg'
import Assessment from '../assets/Assessment.svg'
import Consent from '../assets/Consent.svg'
import FSR from '../assets/FSR.svg'
import Invoice from '../assets/Invoice.svg'
import DBND from '../assets/DBND.svg'
import Delivery from '../assets/Delivery.svg'
import Reconcilation from '../assets/Reconcilation.svg'
import Closed from '../assets/Closed.svg'

const steps = [
  { icon: <img src={Assignment} alt="Assignment" style={{ width: '20px', height: '20px' }} />, label: 'Assignment', status: 'completed' },
  { icon: <img src={Surveyor} alt="Surveyor" style={{ width: '20px', height: '20px' }} />, label: 'Surveyor', status: 'current' },
  { icon: <img src={JIR} alt="JIR" style={{ width: '20px', height: '20px' }} />, label: 'JIR', status: 'pending' },
  { icon: <img src={ILA} alt="ILA Process" style={{ width: '20px', height: '20px' }} />, label: 'ILA Process', status: 'pending' },
  { icon: <img src={LOR} alt="LOR Process" style={{ width: '20px', height: '20px' }} />, label: 'LOR Process', status: 'pending' },
  { icon: <img src={Assessment} alt="Assessment" style={{ width: '20px', height: '20px' }} />, label: 'Assessment', status: 'pending' },
  { icon: <img src={Consent} alt="Consent" style={{ width: '20px', height: '20px' }} />, label: 'Consent', status: 'pending' },
  { icon: <img src={FSR} alt="FSR" style={{ width: '20px', height: '20px' }} />, label: 'FSR', status: 'pending' },
  { icon: <img src={Invoice} alt="Invoice" style={{ width: '20px', height: '20px' }} />, label: 'Invoice', status: 'pending' },
  { icon: <img src={DBND} alt="BBND/DBND" style={{ width: '20px', height: '20px' }} />, label: 'BBND/DBND', status: 'pending' },
  { icon: <img src={Delivery} alt="Delivery" style={{ width: '20px', height: '20px' }} />, label: 'Delivery', status: 'pending' },
  { icon: <img src={Reconcilation} alt="Reconciliation" style={{ width: '20px', height: '20px' }} />, label: 'Reconciliation', status: 'pending' },
  { icon: <img src={Closed} alt="Closed" style={{ width: '20px', height: '20px' }} />, label: 'Closed', status: 'pending' },
]

const ClaimDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, stage, tab } = useParams(); // Get the claim ID, stage, and tab from the URL
  
  // Initialize state from URL parameters or defaults
  const [activeTab, setActiveTab] = useState(tab || 'single-pager');
  const [currentStage, setCurrentStage] = useState(stage || 'appointment');
  const [showAssignSurveyor, setShowAssignSurveyor] = useState(false);
  const [selectedSurveyor, setSelectedSurveyor] = useState(null);
  const [ilaSections, setIlaSections] = useState({
    snapShort: false,
    consignment: false
  });

  // Function to determine stage based on claim ID (you can modify this logic)
  useEffect(() => {
    // For demo purposes, let's say claims with certain IDs are in different stages
    // In a real app, you would fetch claim data from an API
    if (id) {
      // Example logic: if claim ID contains certain patterns, set different stages
      if (id.includes('1545')) {
        setCurrentStage('surveyor'); // This claim is in surveyor stage
      } else if (id.includes('1546')) {
        setCurrentStage('ila-process'); // This claim is in ILA Process stage
      } else {
        setCurrentStage('appointment'); // Default to appointment stage
      }
    }
  }, [id]);

  // Handle URL parameter changes
  useEffect(() => {
    if (stage) {
      setCurrentStage(stage);
    }
    if (tab) {
      setActiveTab(tab);
    }
  }, [stage, tab]);

  // Navigation functions
  const navigateToStage = (newStage) => {
    setCurrentStage(newStage);
    navigate(`/claim/${id}/stage/${newStage}/tab/${activeTab}`);
  };

  const navigateToTab = (newTab) => {
    setActiveTab(newTab);
    navigate(`/claim/${id}/stage/${currentStage}/tab/${newTab}`);
  };

  const navigateToTimeline = () => {
    navigate(`/claim/${id}/timeline`);
  };

  const navigateBack = () => {
    // Navigate back to claims list
    navigate('/claims');
  };

  // Function to handle surveyor assignment
  const handleAssignSurveyor = () => {
    setShowAssignSurveyor(true);
  };

  // Function to handle surveyor selection from modal
  const handleSurveyorSelected = (surveyor) => {
    setSelectedSurveyor(surveyor);
    setShowAssignSurveyor(false);
  };

  // Function to submit and move to next stage
  const handleSubmit = (stage) => {
    if (stage === 'appointment') {
      navigateToStage('surveyor');
    } else if (stage === 'surveyor') {
      navigateToStage('ila-process');
    } else if (stage === 'ila-process') {
      // TODO: Move to next stage (LOR Process)
      console.log('Moving to LOR Process');
    }
  };

  // Function to expand all ILA sections
  const handleExpandAll = () => {
    setIlaSections({
      snapShort: true,
      consignment: true
    });
  };

  // Function to collapse all ILA sections
  const handleCollapseAll = () => {
    setIlaSections({
      snapShort: false,
      consignment: false
    });
  };

  // Function to get steps based on current stage
  const getStepsForStage = (stage) => {
    if (stage === 'appointment') {
      return steps.map((step, index) => {
        if (index === 0) return { ...step, status: 'current' };
        return { ...step, status: 'pending' };
      });
    } else if (stage === 'surveyor') {
      return steps.map((step, index) => {
        if (index === 0) return { ...step, status: 'completed' };
        if (index === 1) return { ...step, status: 'current' };
        return { ...step, status: 'pending' };
      });
    } else if (stage === 'ila-process') {
      return steps.map((step, index) => {
        if (index <= 2) return { ...step, status: 'completed' };
        if (index === 3) return { ...step, status: 'current' };
        return { ...step, status: 'pending' };
      });
    }
    return steps;
  };

  const currentSteps = getStepsForStage(currentStage);

  return (
    <div className="w-full">

      {/* Breadcrumb Navigation */}
      {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <button 
            onClick={navigateBack}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Claims
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">{id}</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium capitalize">{currentStage.replace('-', ' ')}</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium capitalize">{activeTab.replace('-', ' ')}</span>
        </div>
      </div> */}

      {/* Primary Information Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        {/* Claim Details Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900" style={{ fontFamily: 'Ubuntu Sans', fontWeight: 700, fontStyle: 'Bold', fontSize: '16px', lineHeight: '30px', letterSpacing: '0%' }}>Claim Details</h2>
          <div className="text-sm text-gray-500">Last updated: 56 mins ago</div>
        </div>
        
        {/* Main Content - Single Horizontal Layout */}
        <div className="flex items-center gap-4 w-full">
          {/* Section 1 - Avatar, Name, Status, GR No. */}
          <div className="flex items-center justify-between px-4 py-3 rounded-lg h-12">
            {/* Left side - Avatar */}
            <div className="relative">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Claimant" className="w-16 h-16 rounded-full object-cover" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            {/* Middle section - Claimant Information */}
            <div className="flex-1 ml-4">
              <div className="font-bold text-gray-900 text-xs mb-1">Dipak Krishna Maloo</div>
              <div className="text-gray-500 text-xs mb-1">Back Office</div>
              <div className="text-red-600 font-semibold text-xs">Unassigned</div>
            </div>
            
            {/* Vertical Divider */}
            <div className="w-px h-12 bg-gray-300 mx-4"></div>
            
            {/* Right side - GR No. */}
            <div className="text-right">
              <div className="text-gray-500 text-xs">GR No.</div>
              <div className="text-blue-600 font-medium text-xs">{id || 'IN11-1514-1545-0000'}</div>
            </div>
          </div>

          {/* Section 2 - Claim Amount and Details */}
          <div className="flex items-center px-4 py-3 rounded-lg h-12 relative">
            {/* Details Label */}
            <div className="absolute left-0 top-0 bottom-0 bg-white border border-blue-600 flex items-center justify-center" style={{ width: '23px', height: '48px', borderRadius: '4px', borderWidth: '1px' }}>
              <span className="text-blue-600 transform -rotate-90 whitespace-nowrap" style={{ fontFamily: 'Ubuntu Sans', fontWeight: 600, fontStyle: 'normal', fontSize: '12px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', verticalAlign: 'middle' }}>Details</span>
            </div>
            {/* Claim Information */}
            <div className="flex flex-col justify-center items-start ml-5 flex-1">
              <div className="font-bold text-gray-900 text-base mb-1">₹ 250,000</div>
              <div className="text-gray-700 text-xs mb-0.5">Collision - Damage</div>
              <div className="text-gray-700 text-xs mb-0.5">Electronic Parts-Variable Capacitors</div>
              <div className="text-gray-700 text-xs">Durgapur, West Bengal</div>
            </div>
          </div>

          {/* Section 3 - Insurer Information and Action Buttons */}
          <div className="flex items-center justify-between px-4 py-3 rounded-lg h-12 relative">
            {/* Insurer Label */}
            <div className="absolute left-0 top-0 bottom-0 bg-white border border-blue-600 flex items-center justify-center" style={{ width: '23px', height: '48px', borderRadius: '4px', borderWidth: '1px' }}>
              <span className="text-blue-600 transform -rotate-90 whitespace-nowrap" style={{ fontFamily: 'Ubuntu Sans', fontWeight: 600, fontStyle: 'normal', fontSize: '12px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', verticalAlign: 'middle' }}>Insurer</span>
            </div>
            
            {/* Left Component - Insurer Information */}
            <div className="flex flex-col justify-center ml-5 flex-1">
              <div className="font-bold text-gray-900 text-xs mb-1">Reliance General Insurance Co Ltd</div>
              <div className="text-gray-700 text-xs mb-1">Jupiter International Ltd</div>
              <div className="text-blue-600 font-medium text-xs">Marin Cargo</div>
            </div>

            {/* Right Component - Action Buttons */}
            <div className="grid grid-cols-2 gap-1 ml-6 mr-2">
              <button className="px-2 py-1 border border-blue-600 text-blue-600 rounded text-xs font-medium hover:bg-blue-50 transition-colors">
                Survey
              </button>
              <button className="px-2 py-1 border border-blue-600 text-blue-600 rounded text-xs font-medium hover:bg-blue-50 transition-colors">
                Message
              </button>
              <button className="px-2 py-1 border border-blue-600 text-blue-600 rounded text-xs font-medium hover:bg-blue-50 transition-colors">
                Assignment
              </button>
              <button className="px-2 py-1 border border-blue-600 text-blue-600 rounded text-xs font-medium hover:bg-blue-50 transition-colors">
                Email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="flex items-center justify-between gap-2">
          {currentSteps.map((step, idx) => {
            const stageMap = {
              'Appointment': 'appointment',
              'Surveyor': 'surveyor',
              'JIR': 'jir',
              'ILA Process': 'ila-process',
              'LOR Process': 'lor-process',
              'Assessment': 'assessment',
              'Consent': 'consent',
              'FSR': 'fsr',
              'Invoice': 'invoice',
              'BBND/DBND': 'bbnd-dbnd',
              'Delivery': 'delivery',
              'Reconciliation': 'reconciliation',
              'Closed': 'closed'
            };
            
            const stageKey = stageMap[step.label];
            const isClickable = step.status === 'completed' || step.status === 'current';
            
            return (
              <div 
                key={step.label} 
                className="flex flex-col items-center flex-1 relative cursor-pointer"
                onClick={() => {
                  if (stageKey) {
                    navigateToStage(stageKey);
                  }
                }}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-full border mb-2 relative z-10 ${
                  step.status === 'completed' 
                    ? 'border-green-500 bg-white text-gray-400' 
                    : step.status === 'current'
                    ? 'border-blue-600 bg-white text-blue-600'
                    : 'border-gray-300 bg-gray-100 text-gray-400'
                } ${isClickable ? 'hover:scale-110 transition-transform' : ''}`}>
                  {step.status === 'completed' ? (
                    <img src="/src/assets/Assignment.svg" alt="Assignment" style={{ width: '20px', height: '20px' }} />
                  ) : (
                    step.icon
                  )}
                </div>
                <div className="text-center relative z-10" style={{
                  fontFamily: 'Ubuntu Sans',
                  fontWeight: 500,
                  fontStyle: 'Medium',
                  fontSize: '13px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  color: 'var(--Text-Colot, rgba(58, 58, 58, 1))'
                }}>
                  {step.label}
                </div>
                {idx < currentSteps.length - 1 && (
                  <div className="absolute left-1/2 right-[-50%] top-5 h-px z-0" style={{ 
                    backgroundImage: step.status === 'completed' ? 'repeating-linear-gradient(to right, #10B981 0px, #10B981 4px, transparent 4px, transparent 8px)' : 'repeating-linear-gradient(to right, rgb(203, 212, 225) 0px, rgb(203, 212, 225) 4px, transparent 4px, transparent 8px)'
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabs Section - Below Timeline */}
      <div className="flex justify-end mb-6">
        <div className="claim-details-tab-container-fixed flex border border-blue-600 rounded-lg overflow-hidden">
          <button
            onClick={() => navigateToTab('single-pager')}
            className={`claim-details-single-pager-tab-btn font-semibold text-sm transition-colors px-3 py-2 ${
              activeTab === 'single-pager'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-gray-50'
            }`}
          >
            <span className="claim-details-single-pager-tab-label">Single Pager</span>
          </button>
          <button
            onClick={() => navigateToTab('activity-timeline')}
            className={`claim-details-activity-timeline-tab-btn font-semibold text-sm transition-colors px-3 py-2 ${
              activeTab === 'activity-timeline'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-gray-50'
            }`}
          >
            <span className="claim-details-activity-timeline-tab-label">Activity Timeline</span>
          </button>
        </div>
      </div>

      {/* ILA Form */}
      {currentStage === 'ila-process' && (
        <ILAForm />
      )}

      {/* Dynamic Content Based on Stage */}
      {currentStage === 'appointment' && (
        /* Appointment Stage - Old Design with Surveyor Card */
        <div className="bg-white rounded-xl shadow p-8 mb-6 w-full">
  
          
          {!selectedSurveyor ? (
            /* Integrated Surveyor Assignment Content - Properly aligned like image 2 */
            <div className="surveyor-assignment-container space-y-8 -mr-8">
              {/* Header */}
              <div className="surveyor-assignment-header mb-6">
                <h2 className="surveyor-assignment-title text-gray-700 text-left" style={{ fontFamily: 'Ubuntu Sans', fontWeight: 600, fontStyle: 'normal', fontSize: '18px', lineHeight: '30px', letterSpacing: '0%' }}>Assign a New Surveyor</h2>
              </div>
              
              {/* Filters */}
              <div className="surveyor-assignment-filters flex items-center gap-3 mb-6">
                <div className="surveyor-zone-select-container relative" style={{ width: '163px', height: '40px' }}>
                  <select className="surveyor-zone-select rounded px-3 py-2 w-full h-full appearance-none" style={{ borderRadius: '6px', border: '1px solid rgba(203, 203, 203, 1)', color: 'rgba(82, 82, 82, 1)', fontFamily: 'Ubuntu Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', verticalAlign: 'middle', paddingRight: '30px' }}>
                    <option>--Select Zone--</option>
                  </select>
                  <div className="absolute pointer-events-none" style={{ top: '17px', left: '144px' }}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L5 6L10 0H0Z" fill="rgba(82, 82, 82, 1)"/>
                    </svg>
                  </div>
                </div>
                <div className="surveyor-city-select-container relative" style={{ width: '147px', height: '40px' }}>
                  <select className="surveyor-city-select rounded px-3 py-2 w-full h-full appearance-none" style={{ borderRadius: '6px', border: '1px solid rgba(203, 203, 203, 1)', color: 'rgba(82, 82, 82, 1)', fontFamily: 'Ubuntu Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', verticalAlign: 'middle', paddingRight: '30px' }}>
                    <option>--Select City--</option>
                  </select>
                  <div className="absolute pointer-events-none" style={{ top: '17px', left: '128px' }}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L5 6L10 0H0Z" fill="rgba(82, 82, 82, 1)"/>
                    </svg>
                  </div>
                </div>
                <div className="surveyor-date-container relative" style={{ width: '122px', height: '40px' }}>
                  <input type="date" className="surveyor-date-input rounded px-3 py-2 w-full h-full appearance-none" style={{ width: '122px', height: '40px', borderRadius: '6px', border: '1px solid rgba(203, 203, 203, 1)', color: 'rgba(82, 82, 82, 1)', fontFamily: 'Ubuntu Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', verticalAlign: 'middle', paddingRight: '30px' }} value="2025-07-22" readOnly />
                  <div className="absolute pointer-events-none" style={{ top: '12px', right: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ color: '#3B82F6', width: '16px', height: '16px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
                  </div>
                </div>
                <div className="surveyor-time-container relative" style={{ width: '120px', height: '40px' }}>
                  <input type="time" className="surveyor-time-input rounded px-3 py-2 w-full h-full appearance-none" style={{ width: '120px', height: '40px', borderRadius: '6px', border: '1px solid rgba(203, 203, 203, 1)', color: 'rgba(82, 82, 82, 1)', fontFamily: 'Ubuntu Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', verticalAlign: 'middle', paddingRight: '30px' }} value="17:30" readOnly />
                  <div className="absolute pointer-events-none" style={{ top: '12px', right: '15px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ color: '#3B82F6', width: '16px', height: '16px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                </div>
                <div className="surveyor-search-container flex items-center gap-2">
                  <input type="text" className="surveyor-search-input rounded px-3 py-2 w-full h-full appearance-none" style={{ width: '192px', height: '40px', borderRadius: '6px', border: '1px solid rgba(203, 203, 203, 1)', color: 'rgba(82, 82, 82, 1)', fontFamily: 'Ubuntu Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', verticalAlign: 'middle' }} placeholder="Search" />
                                     <button className="surveyor-search-btn flex items-center justify-center bg-white border border-blue-700" style={{ width: '37px', height: '37px', borderRadius: '6px' }}>
                     <FiSearch className="text-blue-700" style={{ width: '20px', height: '20px', top: '10px', left: '16px', opacity: 1 }} />
                   </button>
                </div>
              </div>
              
              {/* Surveyor List */}
              <div className="surveyor-list-container divide-y divide-gray-200 bg-white rounded-lg border border-gray-200">
                {[
                  {
                    name: 'Esther Howard',
                    role: 'Field',
                    distance: '12 km',
                    location: 'Durgapur, West Bengal',
                    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
                    phone: '95625 65822',
                    email: 'estherhoward@example.com',
                  },
                  {
                    name: 'Cameron ',
                    role: 'Field',
                    distance: '12 km',
                    location: 'Durgapur, West Bengal',
                    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                    phone: '95625 65823',
                    email: 'cameronwilliamson@example.com',
                  },
                  {
                    name: 'Wade Warren',
                    role: 'Field',
                    distance: '45 km',
                    location: 'Durgapur, West Bengal',
                    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
                    phone: '95625 65824',
                    email: 'wadewarren@example.com',
                  },
                  {
                    name: 'Guy Hawkins',
                    role: 'Field',
                    distance: '75 km',
                    location: 'Ranigunj, West Bengal',
                    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
                    phone: '95625 65825',
                    email: 'guyhawkins@example.com',
                  },
                  {
                    name: 'Robert Fox',
                    role: 'Field',
                    distance: '75 km',
                    location: 'Ranigunj, West Bengal',
                    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
                    phone: '95625 65826',
                    email: 'robertfox@example.com',
                  },
                  {
                    name: 'Jacob Jones',
                    role: 'Field',
                    distance: '75 km',
                    location: 'Ranigunj, West Bengal',
                    avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
                    phone: '95625 65827',
                    email: 'jacobjones@example.com',
                  },
                  {
                    name: 'Albert Flores',
                    role: 'Field',
                    distance: '75 km',
                    location: 'Ranigunj, West Bengal',
                    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
                    phone: '95625 65828',
                    email: 'albertflores@example.com',
                  },
                ].map((s, idx) => (
                  <div key={idx} className="surveyor-list-item flex items-center py-2 px-2 hover:bg-gray-50">
                    <img src={s.avatar} alt={s.name} className="surveyor-avatar w-12 h-12 rounded-full object-cover border-2 border-white shadow mr-4" />
                    <div className="surveyor-details flex-1 flex items-center gap-44">
                      <div className="surveyor-name-role flex flex-col min-w-[140px] items-start">
                        <span className="surveyor-name font-semibold text-sm text-gray-800" style={{
                          fontFamily: 'Ubuntu Sans',
                          fontWeight: 600,
                          fontStyle: 'SemiBold',
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          verticalAlign: 'middle'
                        }}>{s.name}</span>
                        <span className="surveyor-role text-xs text-gray-500">{s.role}</span>
                      </div>
                      <div className="surveyor-distance-location min-w-[180px] flex flex-col items-start">
                        <span className="surveyor-distance-text" style={{
                          color: 'var(--Primary-Color, rgba(0, 89, 223, 1))',
                          fontFamily: 'Ubuntu Sans',
                          fontWeight: 600,
                          fontStyle: 'SemiBold',
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          verticalAlign: 'middle'
                        }}>{s.distance}</span>
                        <span className="surveyor-location-text text-xs text-gray-500">{s.location}</span>
                      </div>
                    </div>
                    <button 
                      className="surveyor-assign-btn border border-blue-600 text-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-50 transition text-sm mr-12"
                      onClick={() => handleSurveyorSelected(s)}
                    >
                      Assign
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Next Stage Button */}
              <div className="surveyor-submit-container flex justify-center pt-8">
                <button 
                  className="surveyor-submit-btn bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-base"
                  onClick={() => handleSubmit('appointment')}
                >
                  Next Stage
                </button>
              </div>
            </div>
          ) : (
            /* Show Selected Surveyor Card */
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Selected Surveyor</h3>
                  <button 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    onClick={() => setSelectedSurveyor(null)}
                  >
                    Change Surveyor
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <img src={selectedSurveyor.avatar} alt={selectedSurveyor.name} className="w-16 h-16 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-2">{selectedSurveyor.name}</div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <BsTelephone size={14} />
                        <span>{selectedSurveyor.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsEnvelope size={14} />
                        <span>{selectedSurveyor.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsGeoAlt size={14} />
                        <span>{selectedSurveyor.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Fee</div>
                    <div className="font-semibold text-lg">{selectedSurveyor.fee}</div>
                  </div>
                </div>
              </div>
              
              {/* Next Stage Button */}
              <div className="flex justify-center">
                <button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => handleSubmit('appointment')}
                >
                  Next Stage
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {currentStage === 'surveyor' && activeTab === 'single-pager' && (
        /* Surveyor Stage - New Design - Only show when Single Pager is active */
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* Surveyor Card 1 */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Surveyor</h3>
                <div className="flex gap-1">
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <BsPencil size={12} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <BsEye size={12} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Surveyor" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-1">Chandrakant Dutta</div>
                  <div className="space-y-0.5 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <BsTelephone size={10} />
                      <span>95625 65822</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BsEnvelope size={10} />
                      <span>chandrakantdutta@example.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BsGeoAlt size={10} />
                      <span>Durgapur, West Bengal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Surveyor Card 2 */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Surveyor</h3>
                <div className="flex gap-1">
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <BsPencil size={12} />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <BsEye size={12} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Surveyor" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-1">Rajesh Kumar</div>
                  <div className="space-y-0.5 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <BsTelephone size={10} />
                      <span>98765 43210</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BsEnvelope size={10} />
                      <span>rajeshkumar@example.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BsGeoAlt size={10} />
                      <span>Mumbai, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* JIR Card 1 */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-semibold mb-3">JIR</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsFileEarmarkText size={12} className="text-gray-500" />
                    <span className="text-xs">Documents</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsCamera size={12} className="text-gray-500" />
                    <span className="text-xs">Photos</span>
                  </div>
                  <span className="text-xs font-semibold text-red-500">20</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsCameraVideo size={12} className="text-gray-500" />
                    <span className="text-xs">Videos</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsSticky size={12} className="text-gray-500" />
                    <span className="text-xs">Notes</span>
                  </div>
                  <span className="text-xs font-semibold text-red-500">2</span>
                </div>
              </div>
            </div>

            {/* JIR Card 2 */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-semibold mb-3">JIR</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsFileEarmarkText size={12} className="text-gray-500" />
                    <span className="text-xs">Documents</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsCamera size={12} className="text-gray-500" />
                    <span className="text-xs">Photos</span>
                  </div>
                  <span className="text-xs font-semibold text-red-500">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsCameraVideo size={12} className="text-gray-500" />
                    <span className="text-xs">Videos</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsSticky size={12} className="text-gray-500" />
                    <span className="text-xs">Notes</span>
                  </div>
                  <span className="text-xs font-semibold text-red-500">5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Stage Button for Surveyor Stage */}
          <div className="flex justify-center">
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => handleSubmit('surveyor')}
            >
              Next Stage
            </button>
          </div>
        </div>
      )}

      {/* Assign Surveyor Modal */}
      {showAssignSurveyor && (
        <AssignSurveyorPage onSurveyorSelected={handleSurveyorSelected} />
      )}
    </div>
  )
}

export default ClaimDetailsPage 