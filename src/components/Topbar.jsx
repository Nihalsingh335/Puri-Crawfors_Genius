import React from 'react'
import { FiSearch, FiUser, FiBell, FiMail, FiChevronDown } from 'react-icons/fi'
import logo from '../assets/logo.png'

const Topbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white border-b border-gray-100 shadow-sm flex items-center justify-between px-5 z-30 min-w-[1439px] max-w-full flex-shrink-0">
      {/* Logo and Search Section */}
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="w-[179px] h-20 flex items-center justify-center">
          <img src={logo} alt="PCIS Crawford Logo" className="w-[179px] h-20 object-contain" />
        </div>
        
        {/* Search Bar */}
        <div className="relative w-[344px] h-10">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full h-full bg-[rgba(239,244,251,1)] border-none rounded-lg pl-10 pr-3 py-2 font-['Ubuntu_Sans'] font-normal text-sm leading-5 text-[rgba(99,115,129,1)] outline-none transition-all duration-200 focus:bg-[rgba(239,244,251,0.9)] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 placeholder-[rgba(99,115,129,0.7)]"
          />
        </div>
      </div>

      {/* Actions and User Section */}
      <div className="flex items-center gap-4 pr-5">
        {/* Notification Bell */}
        <div className="relative w-[34px] h-[34px] bg-[rgba(239,244,251,1)] border border-[rgba(226,232,240,1)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[rgba(226,232,240,1)] hover:-translate-y-0.5">
          <FiBell size={18} className="text-gray-500 transition-colors duration-200 hover:text-gray-600" title="Notifications" />
        </div>

        {/* Mail with notification dot */}
        <div className="relative w-[34px] h-[34px] bg-[rgba(239,244,251,1)] border border-[rgba(226,232,240,1)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[rgba(226,232,240,1)] hover:-translate-y-0.5">
          <FiMail size={18} className="text-gray-500 transition-colors duration-200 hover:text-gray-600" title="Messages" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 bg-white border border-transparent rounded-lg px-3 py-2 cursor-pointer transition-all duration-200 hover:bg-[rgba(243,244,246,1)] hover:border-[rgba(209,213,219,1)] min-w-[229px] h-[46px]">
          <div className="w-[46px] h-[46px] bg-[rgba(209,213,219,1)] rounded-full flex items-center justify-center flex-shrink-0">
            <FiUser size={16} className="text-gray-600" />
          </div>
          <div className="flex flex-col items-start gap-0.5 flex-1 min-w-0">
            <span className="font-['Ubuntu_Sans'] font-bold text-sm leading-5 text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-[147px]">Sandeep Kumar Patwa</span>
            <span className="font-['Ubuntu_Sans'] font-medium text-[13px] leading-[14px] text-gray-900">User</span>
          </div>
          <FiChevronDown size={20} className="flex-shrink-0 transition-transform duration-200 group-hover:rotate-180" style={{ color: 'var(--Menu-Color, rgba(109, 112, 128, 1))' }} />
        </div>
      </div>
    </header>
  )
}

export default Topbar 