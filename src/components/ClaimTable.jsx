import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ManageColumnsPanel from './ManageColumnsPanel';
import FilterPanel from './FilterPanel';
import sort from '../assets/sort.svg'


const claims = [
  {
    ageing: '41:20 min left',
    grNo: 'IN11-1514-1545-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'Appointment',
    isHighlighted: true,
    highlightType: 'orange'
  },
  {
    ageing: '10:05 min left',
    grNo: 'IN11-1514-1545-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'Appointment (Urgent)',
    isHighlighted: true,
    highlightType: 'red'
  },
  {
    ageing: 360,
    grNo: 'IN11-1514-1545-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'ILA Process',
  },
  {
    ageing: 45,
    grNo: 'IN11-1514-1234-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'Appointment',
  },
  {
    ageing: 262,
    grNo: 'IN11-1514-5678-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'Appointment',
  },
  {
    ageing: 52,
    grNo: 'IN11-1514-9999-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'Investigation Pending',
  },
  {
    ageing: 95,
    grNo: 'IN11-1514-1111-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'Dispatched Pending',
  },
  {
    ageing: 251,
    grNo: 'IN11-1514-2222-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'Fee Pending',
  },
  {
    ageing: 153,
    grNo: 'IN11-1514-3333-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'Invoice Pending',
  },
  {
    ageing: 92,
    grNo: 'IN11-1514-4444-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'ILA Process',
  },
  {
    ageing: 85,
    grNo: 'IN11-1514-5555-0000',
    insurer: 'ITC Ltd',
    insured: 'Kamlesh Shahoo',
    policyType: 'Marin Insurance',
    col: 'Collison',
    nol: 'Damage',
    estimatedLoss: '₹ 250,000',
    status: 'ILA Process',
  },
  {
    ageing: 30,
    grNo: 'IN11-1514-1669-9991',
    insurer: 'Tata AIG',
    insured: 'Dinesh Kumar Patel',
    policyType: 'Fire Insurance',
    col: 'Short Circuit',
    nol: 'Burnout',
    estimatedLoss: '₹ 195,000',
    status: 'Closed Lost',
  },
]

const getRowClass = (claim) => {
  if (claim.isHighlighted && claim.highlightType === 'orange') {
    return '';
  }
  if (claim.isHighlighted && claim.highlightType === 'red') {
    return '';
  }
  if (claim.status === 'Appointment') {
    return '';
  }
  if (claim.status === 'Appointment (Urgent)') {
    return 'bg-red-50 border-l-4 border-red-400';
  }
  if (claim.status === 'ILA Process') {
    return '';
  }
  if (claim.status === 'Closed') {
    return 'bg-gray-50 text-gray-400';
  }
  return '';
};

const getStatusCell = (claim) => {
  if (claim.isHighlighted && claim.highlightType === 'orange') {
    return <span className="first-row-status-badge" style={{
      width: '75.26585388183594px',
      height: '20.106340408325195px',
      top: '369.53px',
      left: '1190.86px',
      gap: '10.13px',
      borderWidth: '1.01px',
      borderRadius: '12.16px',
      paddingTop: '4.05px',
      paddingRight: '10.13px',
      paddingBottom: '4.05px',
      paddingLeft: '10.13px',
      borderColor: 'rgba(255, 81, 81, 1)',
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Ubuntu Sans',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '10.13px',
      lineHeight: '100%',
      letterSpacing: '0%',
      verticalAlign: 'middle',
      color: 'rgba(255, 81, 81, 1)',
      backgroundColor: 'var(--BG-Danger-Color, rgba(255, 223, 223, 1))'
    }}>Unassigned</span>;
  }
  if (claim.isHighlighted && claim.highlightType === 'red') {
    return <span className="second-row-status-badge" style={{
      width: '75.26585388183594px',
      height: '20.106340408325195px',
      top: '369.53px',
      left: '1190.86px',
      gap: '10.13px',
      borderWidth: '1.01px',
      borderRadius: '12.16px',
      paddingTop: '4.05px',
      paddingRight: '10.13px',
      paddingBottom: '4.05px',
      paddingLeft: '10.13px',
      borderColor: 'rgba(255, 81, 81, 1)',
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Ubuntu Sans',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '10.13px',
      lineHeight: '100%',
      letterSpacing: '0%',
      verticalAlign: 'middle',
      color: 'rgba(255, 81, 81, 1)',
      backgroundColor: 'var(--BG-Danger-Color, rgba(255, 223, 223, 1))'
    }}>Unassigned</span>;
  }
  if (claim.status === 'ILA Process') {
    return <span className="third-row-status-badge" style={{
      width: '75.26585388183594px',
      height: '20.106340408325195px',
      top: '369.53px',
      left: '1190.86px',
      gap: '10.13px',
      borderWidth: '1.01px',
      borderRadius: '12.16px',
      paddingTop: '4.05px',
      paddingBottom: '4.05px',
      borderColor: 'var(--Warning-Color, rgba(255, 147, 14, 1))',
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Ubuntu Sans',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '10.13px',
      lineHeight: '100%',
      letterSpacing: '0%',
      verticalAlign: 'middle',
      color: 'rgba(255, 147, 14, 1)',
      backgroundColor: 'var(--BG-Warning-Color, rgba(255, 237, 216, 1))'
    }}>ILA Process</span>;
  }
  if (claim.status === 'Closed') {
    return <span className="fourth-row-status-badge" style={{
      width: '75.26585388183594px',
      height: '20.106340408325195px',
      top: '369.53px',
      left: '1190.86px',
      gap: '10.13px',
      borderWidth: '1.01px',
      borderRadius: '12.16px',
      paddingTop: '4.05px',
      paddingBottom: '4.05px',
      borderColor: 'var(--Success-Color, rgba(10, 173, 70, 1))',
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Ubuntu Sans',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '10.13px',
      lineHeight: '100%',
      letterSpacing: '0%',
      verticalAlign: 'middle',
      color: 'var(--Success-Color, rgba(10, 173, 70, 1))',
      backgroundColor: 'var(--BG-Success-Color, rgba(220, 252, 231, 1))'
    }}>Appointment</span>;
  }
  if (claim.status === 'Appointment') {
    return <span className="fourth-row-status-badge" style={{
      width: '75.26585388183594px',
      height: '20.106340408325195px',
      top: '369.53px',
      left: '1190.86px',
      gap: '10.13px',
      borderWidth: '1.01px',
      borderRadius: '12.16px',
      paddingTop: '4.05px',
      paddingBottom: '4.05px',
      borderColor: 'var(--Success-Color, rgba(10, 173, 70, 1))',
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Ubuntu Sans',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '10.13px',
      lineHeight: '100%',
      letterSpacing: '0%',
      verticalAlign: 'middle',
      color: 'var(--Success-Color, rgba(10, 173, 70, 1))',
      backgroundColor: 'var(--BG-Outline-success, rgba(240, 253, 244, 1))'
    }}>Appointment</span>;
  }
  if (claim.status === 'Appointment (Urgent)') {
    return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Appointment (Urgent)</span>;
  }
  if (claim.status === 'Investigation Pending') {
    return <span className="sixth-row-status-badge" style={{
      width: '123.26585388183594px',
      height: '20.106340408325195px',
      top: '603.69px',
      left: '1190.86px',
      gap: '10.13px',
      borderWidth: '1.01px',
      borderRadius: '12.16px',
      paddingTop: '4.05px',
      paddingBottom: '4.05px',
      borderColor: 'rgba(159, 10, 173, 1)',
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Ubuntu Sans',
      fontWeight: 600,
      fontStyle: 'SemiBold',
      fontSize: '10.13px',
      lineHeight: '100%',
      letterSpacing: '0%',
      verticalAlign: 'middle',
      color: 'rgba(159, 10, 173, 1)',
      backgroundColor: 'rgba(253, 236, 255, 1)'
    }}>Investigation Pending</span>;
  }
  if (claim.status === 'Dispatched Pending') {
    return <span className="seventh-row-status-badge" style={{
      width: '114.26585388183594px',
      height: '20.106340408325195px',
      top: '648.29px',
      left: '1190.86px',
      gap: '10.13px',
      borderWidth: '1.01px',
      borderRadius: '12.16px',
      paddingTop: '4.05px',
      paddingBottom: '4.05px',
      borderColor: 'rgba(41, 125, 251, 1)',
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Ubuntu Sans',
      fontWeight: 600,
      fontStyle: 'SemiBold',
      fontSize: '10.13px',
      lineHeight: '100%',
      letterSpacing: '0%',
      verticalAlign: 'middle',
      color: 'rgba(41, 125, 251, 1)',
      backgroundColor: 'var(--BG-lignt-Blue, rgba(239, 244, 251, 1))'
    }}>Dispatched Pending</span>;
  }
           if (claim.status === 'Fee Pending') {
      return <span className="eighth-row-status-badge" style={{
        width: '78.26585388183594px',
        height: '20.106340408325195px',
        top: '693.91px',
        left: '1190.86px',
        gap: '10.13px',
        borderWidth: '1.01px',
        borderRadius: '12.16px',
        paddingTop: '4.05px',
        paddingBottom: '4.05px',
        borderColor: 'rgba(97, 65, 225, 1)',
        borderStyle: 'solid',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Ubuntu Sans',
        fontWeight: 600,
        fontStyle: 'SemiBold',
        fontSize: '10.13px',
        lineHeight: '100%',
        letterSpacing: '0%',
        verticalAlign: 'middle',
        color: 'rgba(97, 65, 225, 1)',
        backgroundColor: 'rgba(233, 228, 255, 1)'
      }}>Fee Pending</span>;
    }
         if (claim.status === 'Invoice Pending') {
       return <span className="ninth-row-status-badge" style={{
         width: '94.26585388183594px',
         height: '20.106340408325195px',
         top: '738.51px',
         left: '1190.86px',
         gap: '10.13px',
         borderWidth: '1.01px',
         borderRadius: '12.16px',
         paddingTop: '4.05px',
         paddingBottom: '4.05px',
         borderColor: 'var(--Text-Colot, rgba(58, 58, 58, 1))',
         borderStyle: 'solid',
         display: 'inline-flex',
         alignItems: 'center',
         justifyContent: 'center',
         fontFamily: 'Ubuntu Sans',
         fontWeight: 600,
         fontStyle: 'SemiBold',
         fontSize: '10.13px',
         lineHeight: '100%',
         letterSpacing: '0%',
         verticalAlign: 'middle',
         color: 'var(--Text-Colot, rgba(58, 58, 58, 1))',
         backgroundColor: 'rgba(238, 238, 238, 1)'
       }}>Invoice Pending</span>;
     }
                                                                                               if (claim.status === 'Closed Lost') {
           return <span className="tenth-row-status-badge" style={{
             width: '75.26585388183594px',
             height: '20.106340408325195px',
             top: '783.11px',
             left: '1190.86px',
             gap: '10.13px',
             borderWidth: '1.01px',
             borderRadius: '12.16px',
             paddingTop: '4.05px',
             paddingBottom: '4.05px',
             borderColor: 'var(--danger-Color, rgba(255, 81, 81, 1))',
             borderStyle: 'solid',
             backgroundColor: 'var(--BG-Danger-Color, rgba(255, 223, 223, 1))',
             display: 'inline-flex',
             alignItems: 'center',
             justifyContent: 'center',
             textAlign: 'center',
             fontFamily: 'Ubuntu Sans',
             fontWeight: 600,
             fontStyle: 'SemiBold',
             fontSize: '10.13px',
             lineHeight: '100%',
             letterSpacing: '0%',
             verticalAlign: 'middle',
             color: 'var(--danger-Color, rgba(255, 81, 81, 1))'
           }}>Closed Lost</span>;
         }
  return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{claim.status}</span>;
};

const ItemType = 'TABLE_COLUMN';

function DraggableHeader({ id, index, moveColumn, children }) {
  const headerRef = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!headerRef.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = headerRef.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return;
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) return;
      moveColumn(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  drag(drop(headerRef));
  
  return (
    <th 
      ref={headerRef}
      className={`px-4 py-3 text-left font-['Ubuntu_Sans'] font-semibold text-sm leading-[100%] align-middle text-slate-700 ${isDragging ? 'opacity-50 shadow-2xl transform rotate-1 scale-105' : 'hover:shadow-md'}`}
      style={{ 
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : 'all 0.2s ease-in-out'
      }}
    >
      {children}
    </th>
  );
}

const ClaimTable = () => {
  const [showManageColumns, setShowManageColumns] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [columns, setColumns] = useState([
    { id: 'ageing', label: 'Ageing (Days)', key: 'ageing', enabled: true },
    { id: 'grNo', label: 'GR No.', key: 'grNo', enabled: true },
    { id: 'insurer', label: 'Insurer', key: 'insurer', enabled: true },
    { id: 'insured', label: 'Insured', key: 'insured', enabled: true },
    { id: 'policyType', label: 'Policy Type', key: 'policyType', enabled: true },
    { id: 'col', label: 'COL', key: 'col', enabled: true },
    { id: 'nol', label: 'NOL', key: 'nol', enabled: true },
    { id: 'estimatedLoss', label: 'Estimated Loss', key: 'estimatedLoss', enabled: true },
    { id: 'status', label: 'Status', key: 'status', enabled: true },
  ]);
  const navigate = useNavigate();

  const moveColumn = useCallback((from, to) => {
    setColumns((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(from, 1);
      updated.splice(to, 0, removed);
      return updated;
    });
  }, []);

  const handleColumnsChange = (newColumns) => {
    setColumns(newColumns);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#f7f8fa] p-2 scrollbar-hide overflow-auto">
      {/* Title and Controls Row in gray area */}
      <div className="flex items-center justify-between mb-2 max-w-[98%] mx-auto">
                 <h2 className="font-['Ubuntu_Sans'] font-bold text-lg leading-[30px] text-[rgba(58,58,58,1)]">Claim List</h2>
        <div className="flex justify-end gap-2">
          <select className="claim-table-all-status-dropdown border border-slate-300 rounded text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All Status</option>
          </select>
          <select className="claim-table-policy-type-dropdown border border-slate-300 rounded text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Policy Type All</option>
          </select>
          <button className="claim-table-create-button bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center gap-2 text-sm">
            <span className="claim-table-create-button-plus-text">+</span>
            <span className="claim-table-create-button-text">Create</span>
          </button>
          <button
            className="claim-table-filter-button bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-3 font-medium text-sm"
            onClick={() => setShowFilterPanel(!showFilterPanel)}
          >
            <svg className="claim-table-filter-button-icon" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H10V2.5L6.5 7.5V11H4.5V7.5L1 2.5V1Z" stroke="rgba(255,255,255,1)" stroke-width="1.2" fill="none"/>
            </svg>
            <span className="claim-table-filter-button-text">Filter</span>
          </button>
        </div>
      </div>
      
      {/* Filter Panel - appears above the table */}
      <div className="max-w-[99%] mx-auto">
        <FilterPanel open={showFilterPanel} onClose={() => setShowFilterPanel(false)} />
      </div>
      
      {/* Table Card */}
      <div className={`bg-white rounded-2xl shadow-md border border-slate-200 max-w-[99%] mx-auto px-6 pt-4 pb-2 transition-all duration-300 ${showFilterPanel ? 'mt-16' : 'mt-0'}`}>
        {/* Search Bar and Manage Columns inside white card */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 w-[320px]">
                         <input
               type="text"
               placeholder="Search"
               className="pl-4 pr-4 py-2 border border-slate-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[192px] h-[28px] font-['Ubuntu_Sans'] font-normal text-xs leading-[100%] align-middle text-slate-700 placeholder-slate-400"
             />
                         <button className="bg-white text-blue-600 w-[32px] h-[32px] rounded-[3px] hover:bg-gray-50 transition-colors duration-200 border border-blue-600 flex items-center justify-center">
               <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </button>
          </div>
          <button className="text-blue-600 text-sm hover:text-blue-800 font-medium transition-colors duration-200 mr-2" onClick={() => setShowManageColumns(true)}>Manage Columns</button>
        </div>
        <div className="overflow-x-auto w-full scrollbar-hide">
          <table className="min-w-full text-sm">
                                                         <thead>
                                <tr className="border-b border-slate-200" style={{
                   background: 'rgba(255, 255, 255, 1)',
                   border: '1.01px solid var(--border, rgba(221, 224, 230, 1))'
                 }}>
                   {columns.filter(col => col.enabled).map((column, index) => (
                     <DraggableHeader
                       key={column.id}
                       id={column.id}
                       index={index}
                       moveColumn={moveColumn}
                     >
                                               <div className="flex items-center gap-1 group hover:bg-[rgba(239,244,251,1)] px-2 py-1 rounded transition-colors duration-200">
                          <span>{column.label}</span>
                          <img 
                            src={sort} 
                            alt="Sort" 
                            className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                          />
                        </div>
                     </DraggableHeader>
                   ))}
                </tr>
              </thead>
                         <tbody>
                              {claims.map((claim, idx) => (
                  <tr key={idx} className={`border-b border-slate-100 hover:bg-blue-50 transition-colors duration-200 ${getRowClass(claim)}`} style={{ 
                    fontWeight: claim.status === 'ILA Process' ? 600 : 400,
                    backgroundColor: claim.isHighlighted && claim.highlightType === 'orange' ? 'rgba(255, 245, 232, 1)' : 
                                    claim.isHighlighted && claim.highlightType === 'red' ? 'rgba(255, 230, 230, 1)' : undefined,
                    borderBottom: claim.isHighlighted && claim.highlightType === 'orange' ? '2px solid rgba(255, 147, 14, 1)' : 
                                 claim.isHighlighted && claim.highlightType === 'red' ? '2px solid rgba(255, 81, 81, 1)' : undefined
                  }}>
                    {columns.filter(col => col.enabled).map((column) => {
                      const renderCell = () => {
                        switch (column.key) {
                          case 'ageing':
                            return claim.isHighlighted ? (
                              <span className={`flex items-center gap-1 ${claim.highlightType === 'orange' ? 'text-orange-600' : 'text-red-600'}`} style={{
                                fontFamily: 'Ubuntu Sans',
                                fontStyle: 'Regular',
                                fontSize: '14.19px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                verticalAlign: 'middle',
                                textAlign: 'left'
                              }}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {claim.ageing}
                              </span>
                            ) : (
                              claim.ageing
                            );
                          case 'grNo':
                            return (
                              <button className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium transition-colors duration-200 underline" onClick={() => navigate(`/claim/${claim.grNo}/stage/appointment/tab/single-pager`)} style={{
                                fontFamily: 'Ubuntu Sans',
                                fontStyle: 'Regular',
                                fontSize: '14.19px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                verticalAlign: 'middle',
                                textAlign: 'left'
                              }}>
                                {claim.grNo}
                              </button>
                            );
                          case 'status':
                            return getStatusCell(claim);
                          default:
                            return (
                              <span style={{
                                fontFamily: 'Ubuntu Sans',
                                fontStyle: 'Regular',
                                fontSize: '14.19px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                verticalAlign: 'middle',
                                textAlign: 'left'
                              }}>
                                {claim[column.key]}
                              </span>
                            );
                        }
                      };

                      return (
                        <td key={column.id} className={`px-4 py-3 text-left ${column.key === 'status' ? 'font-medium' : 'text-slate-900'}`}>
                          {renderCell()}
                        </td>
                      );
                    })}
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-200 px-4">
          <span className="text-sm text-slate-600">Showing 10 out of 158</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 text-slate-500 hover:text-slate-700 rounded transition-colors duration-200">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded font-medium text-sm">1</button>
            <button className="px-3 py-1.5 text-slate-600 hover:text-slate-800 rounded font-medium text-sm">2</button>
            <button className="px-3 py-1.5 text-slate-600 hover:text-slate-800 rounded font-medium text-sm">3</button>
            <button className="px-3 py-1.5 text-slate-600 hover:text-slate-800 rounded font-medium text-sm">4</button>
            <button className="px-3 py-1.5 text-slate-600 hover:text-slate-800 rounded font-medium text-sm">5</button>
            <button className="px-3 py-1.5 text-slate-600 hover:text-slate-800 rounded font-medium text-sm">6</button>
            <button className="px-3 py-1.5 text-slate-600 hover:text-slate-800 rounded font-medium text-sm">7</button>
            <button className="px-3 py-1.5 text-slate-600 hover:text-slate-800 rounded font-medium text-sm">8</button>
            <span className="px-2 text-slate-500">...</span>
            <button className="px-3 py-1.5 text-slate-500 hover:text-slate-700 rounded transition-colors duration-200">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Rows Per Page</span>
            <select className="border border-slate-300 rounded px-3 py-1.5 text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
             {/* Manage Columns Side Panel */}
       <ManageColumnsPanel 
         open={showManageColumns} 
         onClose={() => setShowManageColumns(false)}
         onColumnsChange={handleColumnsChange}
         initialColumns={columns}
       />
     </div>
     </DndProvider>
   );
 };

export default ClaimTable; 