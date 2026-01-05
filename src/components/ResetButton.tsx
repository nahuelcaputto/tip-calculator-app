import React from "react";

interface ResetButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      className="reset-btn"
      onClick={onClick}
      disabled={disabled}
    >
      RESET
    </button>
  );
};

export default ResetButton;
