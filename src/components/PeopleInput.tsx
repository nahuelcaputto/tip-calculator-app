import React from "react";

interface PeopleInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PeopleInput: React.FC<PeopleInputProps> = ({ value, onChange }) => {
  const isError = value !== "" && Number(value) === 0;

  return (
    <div className="input-group">
      <div className="label-wrapper">
        <label htmlFor="people">Number of People</label>
        {isError && <span className="error-msg">Can't be zero</span>}
      </div>
      <div className={`input-wrapper ${isError ? "error" : ""}`}>
        <img
          src="/images/icon-person.svg"
          alt=""
          className="input-icon"
          aria-hidden="true"
        />
        <input
          id="people"
          type="number"
          placeholder="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min="0"
        />
      </div>
    </div>
  );
};

export default PeopleInput;
