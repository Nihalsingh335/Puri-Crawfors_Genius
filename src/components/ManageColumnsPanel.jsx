import React, { useRef, useState, useCallback, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FiRefreshCw } from 'react-icons/fi';

const columnsDefault = [
  { label: 'GR No.', key: 'grNo', enabled: true },
  { label: 'Insurer', key: 'insurer', enabled: true },
  { label: 'Insured', key: 'insured', enabled: true },
  { label: 'Policy Type', key: 'policyType', enabled: true },
  { label: 'COL', key: 'col', enabled: true },
  { label: 'NOL', key: 'nol', enabled: true },
  { label: 'Estimate Loss', key: 'estimatedLoss', enabled: true },
  { label: 'Status', key: 'status', enabled: true },
  { label: 'Options 1', key: 'opt1', enabled: false },
  { label: 'Options 2', key: 'opt2', enabled: false },
  { label: 'Options 3', key: 'opt3', enabled: false },
];

const ItemType = 'COLUMN_ROW';

function DraggableRow({ id, index, moveRow, label, enabled, onToggle }) {
  // Attach drag/drop refs to the entire row
  const rowRef = useRef(null);
  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!rowRef.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = rowRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(rowRef));
  return (
    <div
      ref={rowRef}
      className={`flex items-center px-5 py-1.5 border-b border-gray-50 last:border-b-0 bg-white ${isDragging ? 'opacity-50 cursor-grabbing shadow-2xl transform rotate-2 scale-105' : 'cursor-grab hover:shadow-md'}`}
      style={{ 
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : 'all 0.2s ease-in-out'
      }}
    >
      {/* Drag handle dots (visual only) */}
      <span className="flex items-center mr-2 select-none">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="text-gray-300">
          <circle cx="4" cy="5" r="1" fill="currentColor" />
          <circle cx="4" cy="8" r="1" fill="currentColor" />
          <circle cx="4" cy="11" r="1" fill="currentColor" />
          <circle cx="8" cy="5" r="1" fill="currentColor" />
          <circle cx="8" cy="8" r="1" fill="currentColor" />
          <circle cx="8" cy="11" r="1" fill="currentColor" />
        </svg>
      </span>
      <span
        className="flex-1 text-left truncate select-none"
        style={{
          fontFamily: 'Ubuntu Sans, sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: 0,
          verticalAlign: 'middle',
          color: '#3A3A3A',
        }}
      >
        {label}
      </span>
      {/* Toggle switch */}
      <button
        className={`relative inline-flex h-5 w-10 border-2 rounded-full transition-colors duration-200 focus:outline-none ${enabled ? 'bg-blue-100 border-blue-500' : 'bg-gray-100 border-gray-200'} cursor-pointer`}
        tabIndex={0}
        type="button"
        aria-pressed={enabled}
        onClick={e => { e.stopPropagation(); onToggle(); }}
      >
        <span className="sr-only">Toggle {label}</span>
        <span
          className={`inline-block h-4 w-4 rounded-full shadow transform transition-transform duration-200 ${enabled ? 'bg-blue-600 translate-x-5' : 'bg-gray-400 translate-x-0'}`}
        ></span>
      </button>
    </div>
  );
}

const getResetColumns = () => {
  // First 7 ON, rest OFF
  return columnsDefault.map((col, idx) => ({ ...col, enabled: idx < 7 }));
};

const ManageColumnsPanel = ({ open, onClose, onColumnsChange, initialColumns }) => {
  const [columns, setColumns] = useState(initialColumns || columnsDefault);
  const [savedColumns, setSavedColumns] = useState(initialColumns || columnsDefault);

  // When opening, restore saved state
  useEffect(() => {
    if (open) setColumns(savedColumns);
  }, [open, savedColumns]);

  // Update columns when initialColumns prop changes
  useEffect(() => {
    if (initialColumns) {
      setColumns(initialColumns);
      setSavedColumns(initialColumns);
    }
  }, [initialColumns]);

  const moveRow = useCallback((from, to) => {
    setColumns((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(from, 1);
      updated.splice(to, 0, removed);
      return updated;
    });
  }, []);

  const handleToggle = (idx) => {
    setColumns((prev) => prev.map((col, i) => i === idx ? { ...col, enabled: !col.enabled } : col));
  };

  const handleReset = () => {
    setColumns(getResetColumns());
  };

  const handleSave = () => {
    setSavedColumns(columns);
    if (onColumnsChange) {
      onColumnsChange(columns);
    }
    if (onClose) onClose();
  };

  if (!open) return null;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="fixed top-[80px] right-0 h-[calc(100vh-80px)] w-full max-w-xs bg-white shadow-2xl rounded-l-xl flex flex-col z-50 border-l border-gray-100 m-0 p-0 scrollbar-hide" style={{ minWidth: 340 }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-[#EFF6FF]">
          <h3 className="text-[15px] font-semibold text-gray-900">Manage Columns</h3>
          <button className="text-gray-400 hover:text-gray-600 text-xl font-bold" onClick={onClose} aria-label="Close">&times;</button>
        </div>
        {/* Search and Reset */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
          <input
            type="text"
            placeholder="Search"
            className="w-[120px] px-3 py-1.5 border border-gray-200 rounded-[6px] text-[13px] text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="flex items-center gap-1 text-gray-500 text-xs font-medium px-1.5 py-1 rounded hover:bg-gray-100 transition-colors" onClick={handleReset}>
            <FiRefreshCw className="h-4 w-4 text-gray-400" />
            <span className="mt-[1px]">Reset</span>
          </button>
        </div>
        {/* Columns List */}
        <div className="flex-1 overflow-y-auto px-0 py-2 scrollbar-hide">
          {columns.map((col, idx) => (
            <DraggableRow
              key={col.key}
              id={col.key}
              index={idx}
              moveRow={moveRow}
              label={col.label}
              enabled={col.enabled}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-gray-100 bg-white">
          <button className="px-4 py-2 rounded border border-gray-200 text-gray-700 text-[13px] font-medium hover:bg-gray-50" onClick={onClose}>Close</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-700" onClick={handleSave}>Save</button>
        </div>
      </div>
    </DndProvider>
  );
};

export default ManageColumnsPanel; 