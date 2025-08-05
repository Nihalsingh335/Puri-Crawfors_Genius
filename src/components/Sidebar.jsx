import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  FiMenu, 
  FiX,
  FiFileText,
  FiMail,
  FiUsers,
  FiSettings,
  FiMapPin,
  FiPackage,
  FiDollarSign,
  FiUser,
  FiUserCheck,
  FiShield,
  FiCheckSquare,
  FiClipboard,
  FiRefreshCw,
  FiHelpCircle,
  FiFile,
  FiBox,
  FiChevronDown,
  FiChevronRight,
  FiChevronUp
} from 'react-icons/fi'
import { MdOutlineDashboard } from "react-icons/md";
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'
import icon6 from '../assets/icon6.svg'
import icon7 from '../assets/icon7.svg'
import icon8 from '../assets/icon8.svg'
import icon9 from '../assets/icon9.svg'
import icon10 from '../assets/icon10.svg'
import icon11 from '../assets/icon11.svg'
import icon12 from '../assets/icon12.svg'
import icon13 from '../assets/icon13.svg'
import icon14 from '../assets/icon14.svg'
import icon15 from '../assets/icon15.svg'
import icon16 from '../assets/icon16.svg'
import icon17 from '../assets/icon17.svg'
import icon18 from '../assets/icon18.svg'

// Custom Icon Component for Dashboard
const DashboardIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon1} 
      alt="Dashboard" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Claim List
const ClaimListIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon2} 
      alt="Claim List" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Email
const EmailIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon3} 
      alt="Email" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Role
const RoleIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon4} 
      alt="Role" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Company Setup
const CompanySetupIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon5} 
      alt="Company Setup" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Location
const LocationIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon6} 
      alt="Location" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Products
const ProductsIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon7} 
      alt="Products" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Finance
const FinanceIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon8} 
      alt="Finance" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Customers
const CustomersIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon9} 
      alt="Customers" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Employee
const EmployeeIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon10} 
      alt="Employee" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Insurance
const InsuranceIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon11} 
      alt="Insurance" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Assignments
const AssignmentsIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon12} 
      alt="Assignments" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Approval
const ApprovalIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon13} 
      alt="Approval" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Reimbursement
const ReimbursementIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon14} 
      alt="Reimbursement" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Knowledge Base
const KnowledgeBaseIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon15} 
      alt="Knowledge Base" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Invoice
const InvoiceIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon16} 
      alt="Invoice" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Logistic
const LogisticIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon17} 
      alt="Logistic" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

// Custom Icon Component for Reports
const ReportsIcon = ({ size, className }) => {
  const isActive = className?.includes('text-blue-600');
  return (
    <img 
      src={icon18} 
      alt="Reports" 
      style={{ 
        width: size, 
        height: size,
        filter: isActive ? 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(10000%) hue-rotate(210deg) brightness(0.8) contrast(1.2)' : 'none'
      }} 
      className={className} 
    />
  );
}

const menuItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/' },
  { icon: ClaimListIcon, label: 'Claim List', path: '/claims' },
  { icon: EmailIcon, label: 'Email', path: '/email' },
  { icon: RoleIcon, label: 'Role', path: '/role' },
  { icon: CompanySetupIcon, label: 'Company Setup', path: '/company-setup' },
  { icon: LocationIcon, label: 'Location', path: '/location' },
  { icon: ProductsIcon, label: 'Products', path: '/products' },
  { icon: FinanceIcon, label: 'Finance', path: '/finance' },
  { icon: CustomersIcon, label: 'Customers', path: '/customers' },
  { icon: EmployeeIcon, label: 'Employee', path: '/employee' },
  { icon: InsuranceIcon, label: 'Insurance', path: '/insurance' },
  { icon: AssignmentsIcon, label: 'Assignments', path: '/assignments' },
  { 
    icon: ApprovalIcon, 
    label: 'Approval', 
    path: '/approval', 
    notification: 20,
    subItems: [
      { label: 'ILA/PSR Approval', path: '/approval/ila-psr', notification: 6 },
      { label: 'LOR Approval', path: '/approval/lor', notification: 5 },
      { label: 'Invoice Approval', path: '/approval/invoice', notification: 3 },
      { label: 'Invoice Approval', path: '/approval/invoice-2', notification: 3 },
      { label: 'Customer LOR Approval', path: '/approval/customer-lor', notification: 1 }
    ]
  },
  { 
    icon: ReimbursementIcon, 
    label: 'Templates', 
    path: '/templates',
    subItems: [
      { label: 'Template Item', path: '/templates/item' }
    ]
  },
  { icon: KnowledgeBaseIcon, label: 'Reimbursement', path: '/knowledge-base' },
  { icon: InvoiceIcon, label: 'Knowledge Base', path: '/invoice' },
  { icon: LogisticIcon, label: 'Invoice', path: '/logistic' },
  { icon: ReportsIcon, label: 'Logistic', path: '/reports' }
]

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState(new Set())

  const handleMenuToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const handleItemClick = (path, hasSubItems) => {
    if (hasSubItems) {
      setExpandedItems(prev => {
        const newSet = new Set(prev)
        if (newSet.has(path)) {
          newSet.delete(path)
        } else {
          newSet.add(path)
        }
        return newSet
      })
    } else {
      navigate(path)
    }
  }

  return (
         <aside className={`fixed left-0 top-[66px] w-[66px] h-[calc(100vh-66px)] bg-white shadow-md z-20 transition-all duration-300 ease-in-out opacity-100 ${
       isExpanded ? 'w-[240px]' : 'w-[66px]'
     } ${!isExpanded ? 'rounded-br-[20px]' : ''}`}>
      {/* Menu Toggle Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
                     <button
             onClick={handleMenuToggle}
             className="p-2 rounded-lg hover:bg-gray-100 transition-colors mt-2"
           >
            {isExpanded ? (
              <FiX size={20} className="text-gray-600" />
            ) : (
              <FiMenu size={20} className="text-gray-600" />
            )}
          </button>
                     {isExpanded && (
             <span className="font-['Ubuntu_Sans'] font-medium text-base leading-[30px] text-gray-700 w-[96px] h-[30px] absolute top-[30px] left-[66px]">Menu Toggle</span>
           )}
        </div>
      </div>

                           {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4 max-h-[calc(100vh-150px)]" style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}>
                                         <nav className={`${isExpanded ? 'space-y-1' : 'space-y-[11px] flex flex-col items-center'}`}>
           {menuItems.map((item) => {
             const IconComponent = item.icon
                          const isActive = location.pathname === item.path
                          const hasSubItems = item.subItems && item.subItems.length > 0
                          const isExpandedItem = expandedItems.has(item.path)
            
            return (
              <div key={item.label}>
                <div
                  onClick={() => handleItemClick(item.path, hasSubItems)}
                  className={`${
                    isExpanded 
                      ? 'flex items-center gap-3 px-4 py-3 mx-2 rounded-lg cursor-pointer transition-all duration-200' 
                      : 'w-12 h-8 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 relative'
                  } ${
                    isActive 
                      ? isExpanded 
                        ? 'bg-blue-50 text-blue-600 w-[200px] h-[44px] rounded-lg opacity-100' 
                        : 'text-blue-600' 
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                  style={{
                    border: isActive && isExpanded ? '1px solid rgba(0, 89, 223, 1)' : 'none'
                  }}
                >
                                 <div className="flex-shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                   <IconComponent 
                     size={22} 
                     className={`${isActive ? (isExpanded ? 'text-blue-600' : 'text-blue-600') : 'text-gray-500'} opacity-100`} 
                   />
                 </div>
                
                                                   {isExpanded && (
                    <div className="flex items-center flex-1 min-w-0">
                                             <span className={`${item.label === 'Approval' ? '' : 'truncate'} ${
                         isActive ? 'text-[rgba(0,89,223,1)]' : 'text-[rgba(109,112,128,1)]'
                       }`} style={{
                         fontFamily: 'Ubuntu Sans',
                         fontWeight: isActive ? 700 : 500,
                         fontStyle: isActive ? 'normal' : 'normal',
                         fontSize: '16px',
                         lineHeight: '30px',
                         letterSpacing: isActive ? '-2%' : '0%'
                       }}>
                         {item.label}
                       </span>
                      
                      {item.notification && (
                        <div className="flex-shrink-0 ml-2">
                          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full min-w-[20px] h-5">
                            {item.notification}
                          </span>
                        </div>
                      )}
                      
                                                                    {hasSubItems && (
                          <div className={`flex-shrink-0 ${item.label === 'Approval' ? 'ml-8' : 'ml-16'}`}>
                            {isExpandedItem ? (
                              <FiChevronUp size={16} className="text-gray-500" />
                            ) : (
                              <FiChevronDown size={16} className="text-gray-500" />
                            )}
                          </div>
                        )}
                    </div>
                  )}
                 
                                   {/* Notification badge for collapsed sidebar */}
                  {!isExpanded && item.notification && (
                    <div className="absolute -top-1 -right-1">
                      <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium text-white bg-red-500 rounded-full min-w-[16px] h-4">
                        {item.notification}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Sub-items */}
                {isExpanded && hasSubItems && isExpandedItem && (
                                     <div 
                     className={`approval-subitems-container ${item.label === 'Approval' ? 'approval-specific-bg' : ''}`}
                     style={{
                       backgroundColor: item.label === 'Approval' ? 'var(--BG-Primary-Color, rgba(239, 244, 251, 1))' : 'transparent',
                       borderRadius: item.label === 'Approval' ? '8px' : '0px',
                       margin: item.label === 'Approval' ? '2px' : '0px'
                     }}
                   >
                    {item.subItems.map((subItem) => {
                      const isSubActive = location.pathname === subItem.path
                      return (
                                         <div
                           key={subItem.label}
                           onClick={() => handleItemClick(subItem.path, false)}
                           className={`flex items-center gap-3 px-4 py-2 mx-2 ml-4 rounded-lg cursor-pointer transition-all duration-200 ${
                             isSubActive 
                               ? 'text-blue-600 rounded-lg opacity-100' 
                               : 'text-gray-500'
                           }`}
                           style={{
                             border: isSubActive ? '1px solid rgba(0, 89, 223, 1)' : 'none',
                             backgroundColor: 'transparent'
                           }}
                         >
                                               <div className="flex-shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                          <span className="text-gray-400 text-lg font-bold" style={{
                            width: '6px',
                            height: '1.5px',
                            borderRadius: '2px',
                            backgroundColor: '#9CA3AF',
                            display: 'block'
                          }}></span>
                        </div>
                       <div className="flex items-center justify-between flex-1 min-w-0">
                                                   <span className={`truncate ${
                            isSubActive ? 'text-[rgba(0,89,223,1)]' : 'text-[rgba(109,112,128,1)]'
                          }`} style={{
                            fontFamily: 'Ubuntu Sans',
                            fontWeight: 500,
                            fontStyle: 'Medium',
                            fontSize: '14px',
                            lineHeight: '18px',
                            letterSpacing: '0%'
                          }}>
                            {subItem.label}
                          </span>
                         
                         {subItem.notification && (
                           <div className="flex-shrink-0">
                             <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full min-w-[20px] h-5">
                               {subItem.notification}
                             </span>
                           </div>
                         )}
                       </div>
                     </div>
                    )
                  })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar 