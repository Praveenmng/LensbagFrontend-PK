import { useState } from "react";

function TermsCheckbox({ onAcceptChange }) {
  const [accepted, setAccepted] = useState(false);

  function handleChange(e) {
    const isChecked = e.target.checked;
    setAccepted(isChecked);
    if (onAcceptChange) {
      onAcceptChange(isChecked);  // Notify the parent component
    }
  }

  return (
    <div className="form-check my-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="termsCheck"
        checked={accepted}
        onChange={handleChange}
        required
      />
      <label className="form-check-label" htmlFor="termsCheck">
        I agree to the <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>
      </label>
    </div>
  );
}

export default TermsCheckbox;
