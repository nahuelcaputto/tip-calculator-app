import React from "react";

const TIP_OPTIONS = [5, 10, 15, 25, 50];

interface TipSelectorProps {
  selectedTip: number | null;
  onSelect: (tip: number | null) => void;
}

const TipSelector: React.FC<TipSelectorProps> = ({ selectedTip, onSelect }) => {
  return (
    <div className="input-group">
      <label>Select Tip %</label>
      <div className="tip-grid">
        {TIP_OPTIONS.map((percent) => (
          <button
            key={percent}
            type="button"
            className={`tip-btn ${selectedTip === percent ? "active" : ""}`}
            onClick={() => onSelect(percent)}
          >
            {`${percent}%`}
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          className="tip-custom"
          value={
            selectedTip !== null && !TIP_OPTIONS.includes(selectedTip)
              ? selectedTip
              : ""
          }
          onChange={(e) =>
            onSelect(e.target.value ? Number(e.target.value) : null)
          }
        />
      </div>
    </div>
  );
};

export default TipSelector;
