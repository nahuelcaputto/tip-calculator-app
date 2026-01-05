import React from "react";

interface ResultsProps {
  tipAmount: number;
  totalAmount: number;
}

const Results: React.FC<ResultsProps> = ({ tipAmount, totalAmount }) => {
  const formatCurrency = (amount: number) => {
    return "$" + (Number(amount) || 0).toFixed(2);
  };

  return (
    <div className="results-container">
      <div className="result-row">
        <div className="result-label">
          <p className="label-main">Tip Amount</p>
          <p className="label-sub">/ person</p>
        </div>
        <div className="result-value">{formatCurrency(tipAmount)}</div>
      </div>

      <div className="result-row">
        <div className="result-label">
          <p className="label-main">Total</p>
          <p className="label-sub">/ person</p>
        </div>
        <div className="result-value">{formatCurrency(totalAmount)}</div>
      </div>
    </div>
  );
};

export default Results;
