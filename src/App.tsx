import React, { useState } from "react";
import "./styles/global.css";
import BillInput from "./components/BillInput";
import TipSelector from "./components/TipSelector";
import PeopleInput from "./components/PeopleInput";
import Results from "./components/Results";
import ResetButton from "./components/ResetButton";
import {
  calculateTipPerPerson,
  calculateTotalPerPerson,
} from "./logic/calculations";

const App: React.FC = () => {
  const [bill, setBill] = useState<string>("");
  const [tip, setTip] = useState<number | null>(null); // Tip percentage
  const [people, setPeople] = useState<string>("");

  const tipAmount = calculateTipPerPerson(Number(bill), tip, Number(people));
  const totalAmount = calculateTotalPerPerson(
    Number(bill),
    tip,
    Number(people)
  );

  const handleReset = () => {
    setBill("");
    setTip(null);
    setPeople("");
  };

  const isResetDisabled = !bill && tip === null && !people;

  return (
    <main className="container">
      <header className="header">
        <h1>
          SPLI
          <br />
          TTER
        </h1>
      </header>

      <div className="calculator-card">
        <section className="input-section">
          <BillInput value={bill} onChange={(v: string) => setBill(v)} />

          <TipSelector
            selectedTip={tip}
            onSelect={(t: number | null) => setTip(t)}
          />

          <PeopleInput value={people} onChange={(v: string) => setPeople(v)} />
        </section>

        <section className="result-section">
          <Results tipAmount={tipAmount} totalAmount={totalAmount} />
          <ResetButton onClick={handleReset} disabled={isResetDisabled} />
        </section>
      </div>
    </main>
  );
};

export default App;
