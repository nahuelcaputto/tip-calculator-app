import React from "react";

interface BillInputProps {
  value: string;
  onChange: (value: string) => void;
}

const BillInput: React.FC<BillInputProps> = ({ value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor="bill">Bill</label>
      <div className="input-wrapper">
        <img
          src="/images/icon-dollar.svg"
          alt=""
          className="input-icon"
          aria-hidden="true"
        />
        <input
          id="bill"
          type="number"
          placeholder="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </div>
  );
};

export default BillInput;
