import React from 'react';

const Dashboard = () => {
  const metricCards = [
    { title: "Unassigned", value: "89", color: "blue", bgColor: "bg-blue-50", isUnassigned: true },
    { title: "Survey Pending", value: "203", color: "green", bgColor: "bg-green-50" },
    { title: "Unassigned", value: "114", color: "red", bgColor: "bg-red-50", isUnassigned: true },
    { title: "ILA Pending", value: "53", color: "orange", bgColor: "bg-orange-50" },
    { title: "DOX Pending", value: "1370", color: "purple", bgColor: "bg-purple-50" },
    { title: "Assessment Pending", value: "354", color: "pink", bgColor: "bg-pink-50" },
    { title: "Consent Pending", value: "9", color: "blue", bgColor: "bg-blue-50" },
    { title: "FSR Pending", value: "10", color: "gray", bgColor: "bg-gray-50" },
    { title: "TBB", value: "77", color: "gray", bgColor: "bg-gray-50" },
    { title: "BBND", value: "432", color: "blue", bgColor: "bg-blue-50" },
    { title: "DBND", value: "238", color: "purple", bgColor: "bg-purple-50" },
    { title: "Delivered", value: "24837", color: "orange", bgColor: "bg-orange-50" },
    { title: "Re-Opened", value: "3", color: "blue", bgColor: "bg-blue-50" },
    { title: "On Hold", value: "4", color: "orange", bgColor: "bg-orange-50" },
    { title: "Force Closed", value: "1932", color: "red", bgColor: "bg-red-50" },
    { title: "Total", value: "29662", color: "green", bgColor: "bg-green-50" },
  ];

  const getColorClass = (color) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      red: "text-red-600",
      orange: "text-orange-600",
      purple: "text-purple-600",
      pink: "text-pink-600",
      gray: "text-gray-600",
    };
    return colorMap[color] || "text-gray-600";
  };

  return (
    <div className="bg-[#F1F5FB] min-h-screen p-6">
      {/* Header with title and action buttons - outside the white card */}
      <div className="flex items-center justify-between mb-6">
        <h1 
          className="text-2xl font-semibold"
          style={{
            fontFamily: 'Ubuntu Sans, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '0%',
            color: '#3A3A3A',
          }}
        >
          Claim List
        </h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
            Organogram
          </button>
          <button className="px-4 py-2 text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
            Global
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            All Assignments
          </button>
        </div>
      </div>

      {/* White card containing only the metric cards */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[500px] overflow-y-auto">
          {metricCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow min-w-[220px] ${card.isUnassigned ? '' : ''}`}
              style={card.isUnassigned ? {
                background: 'linear-gradient(89.85deg, #FFFFFF 0.12%, #E7EDFF 99.86%)',
                border: '1px solid #DDE0E6'
              } : {}}
            >
              <h3 className="text-[15px] font-semibold text-gray-600 mb-2 text-left">{card.title}</h3>
              <p className={`text-3xl font-bold ${getColorClass(card.color)} text-left`}>
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 