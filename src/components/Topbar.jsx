import React, { useState } from 'react'
import { FiSearch, FiUser, FiBell, FiMail, FiChevronDown, FiMenu } from 'react-icons/fi'
import logo from '../assets/logo.png'

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 bg-white border-b border-gray-100 shadow-sm flex items-center justify-between px-4 md:px-5 z-30">
      {/* Logo and Search Section */}
      <div className="flex items-center gap-4 md:gap-8 lg:gap-12 flex-1">
        {/* Logo */}
        <div className="w-32 md:w-40 lg:w-[179px] h-16 md:h-20 flex items-center justify-center flex-shrink-0">
          <img src={logo} alt="PCIS Crawford Logo" className="w-full h-full object-contain" />
        </div>
        
        {/* Search Bar - Hidden on mobile, visible on tablet and up */}
        <div className="hidden md:block relative flex-1 max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="relative w-full h-8 md:h-10">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full h-full bg-[rgba(239,244,251,1)] border-none rounded-lg pl-8 md:pl-10 pr-3 py-2 font-['Ubuntu_Sans'] font-normal text-sm leading-5 text-[rgba(99,115,129,1)] outline-none transition-all duration-200 focus:bg-[rgba(239,244,251,0.9)] focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 placeholder-[rgba(99,115,129,0.7)]"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
        >
          <FiMenu size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Actions and User Section */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4 pr-2 lg:pr-5">
        {/* Notification Bell */}
        <div className="relative w-8 h-8 lg:w-[34px] lg:h-[34px] bg-[rgba(239,244,251,1)] border border-[rgba(226,232,240,1)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[rgba(226,232,240,1)] hover:-translate-y-0.5">
          <FiBell size={16} className="lg:w-[18px] lg:h-[18px] text-gray-500 transition-colors duration-200 hover:text-gray-600" title="Notifications" />
        </div>

        {/* Mail with notification dot */}
        <div className="relative w-8 h-8 lg:w-[34px] lg:h-[34px] bg-[rgba(239,244,251,1)] border border-[rgba(226,232,240,1)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[rgba(226,232,240,1)] hover:-translate-y-0.5">
          <FiMail size={16} className="lg:w-[18px] lg:h-[18px] text-gray-500 transition-colors duration-200 hover:text-gray-600" title="Messages" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 lg:gap-3 bg-white border border-transparent rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 cursor-pointer transition-all duration-200 hover:bg-[rgba(243,244,246,1)] hover:border-[rgba(209,213,219,1)] min-w-[180px] lg:min-w-[229px] h-10 lg:h-[46px]">
          <div className="w-8 h-8 lg:w-[46px] lg:h-[46px] bg-[rgba(209,213,219,1)] rounded-full flex items-center justify-center flex-shrink-0">
            <FiUser size={14} className="lg:w-4 lg:h-4 text-gray-600" />
          </div>
          <div className="flex flex-col items-start gap-0.5 flex-1 min-w-0">
            <span className="font-['Ubuntu_Sans'] font-bold text-xs lg:text-sm leading-4 lg:leading-5 text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] lg:max-w-[147px]">Sandeep Kumar Patwa</span>
            <span className="font-['Ubuntu_Sans'] font-medium text-[11px] lg:text-[13px] leading-3 lg:leading-[14px] text-gray-900">User</span>
          </div>
          <FiChevronDown size={16} className="lg:w-5 lg:h-5 flex-shrink-0 transition-transform duration-200 group-hover:rotate-180" style={{ color: 'var(--Menu-Color, rgba(109, 112, 128, 1))' }} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-bl-lg p-4" onClick={(e) => e.stopPropagation()}>
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative w-full h-10">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full h-full bg-[rgba(239,244,251,1)] border-none rounded-lg pl-8 pr-3 py-2 font-['Ubuntu_Sans'] font-normal text-sm leading-5 text-[rgba(99,115,129,1)] outline-none"
                />
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <FiBell size={18} className="text-gray-500" />
                <span className="font-['Ubuntu_Sans'] font-medium text-sm text-gray-700">Notifications</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <FiMail size={18} className="text-gray-500" />
                <span className="font-['Ubuntu_Sans'] font-medium text-sm text-gray-700">Messages</span>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="w-8 h-8 bg-[rgba(209,213,219,1)] rounded-full flex items-center justify-center">
                  <FiUser size={14} className="text-gray-600" />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Ubuntu_Sans'] font-bold text-sm text-gray-900">Sandeep Kumar Patwa</span>
                  <span className="font-['Ubuntu_Sans'] font-medium text-xs text-gray-600">User</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Topbar 