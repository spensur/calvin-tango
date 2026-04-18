import { useState, useRef, useEffect } from "react";

const CORRECT_CODE = import.meta.env.VITE_INVITE_CODE;
const CODE_LENGTH = 6;

export function AccessGate({ onUnlock, visible }) {
  const [digits, setDigits] = useState(Array(CODE_LENGTH).fill(""));
  const [status, setStatus] = useState("idle");
  const inputRefs = useRef([]);

  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();

    if (visible) {
      // Lock scroll position
      const scrollY = window.scrollY;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      document.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        document.removeEventListener("touchmove", preventScroll);

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [visible]);

  const handleChange = (index, value) => {
    const char = value.replace(/\D/g, "").slice(-1);
    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);
    setStatus("idle");

    if (char && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (char && index === CODE_LENGTH - 1) {
      const entered = [...newDigits.slice(0, CODE_LENGTH - 1), char].join("");
      validate(entered);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (digits[index]) {
        const newDigits = [...digits];
        newDigits[index] = "";
        setDigits(newDigits);
        setStatus("idle");
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === "Enter") {
      validate(digits.join(""));
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
    if (!pasted) return;
    const newDigits = Array(CODE_LENGTH).fill("");
    pasted.split("").forEach((char, i) => { newDigits[i] = char; });
    setDigits(newDigits);
    setStatus("idle");
    const nextEmpty = pasted.length < CODE_LENGTH ? pasted.length : CODE_LENGTH - 1;
    inputRefs.current[nextEmpty]?.focus();
    if (pasted.length === CODE_LENGTH) validate(pasted);
  };

  const validate = (code) => {
    if (code === CORRECT_CODE) {
      setStatus("success");
      setTimeout(() => onUnlock(), 600);
    } else {
      setStatus("error");
      setDigits(Array(CODE_LENGTH).fill(""));
      setTimeout(() => {
        inputRefs.current[0]?.focus();
        setStatus("idle");
      }, 700);
    }
  };

  if (!visible) return null;

  return (
    <div className="access-gate">
      <div className="access-gate-card">
        <div className="access-gate-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="18" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M14 18v-4a6 6 0 1 1 12 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="20" cy="24" r="1.5" fill="currentColor"/>
          </svg>
        </div>

        <h1 className="access-gate-title">Enter Access Code</h1>
        <p className="access-gate-subtitle">You've been given a 6-digit code to view this invitation</p>

        <div className="access-gate-inputs" onPaste={handlePaste}>
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={`access-gate-box${status === "error" ? " access-gate-box--error" : ""}${status === "success" ? " access-gate-box--success" : ""}`}
              autoComplete="off"
            />
          ))}
        </div>

        {status === "error" && (
          <p className="access-gate-message access-gate-message--error">
            Incorrect code. Please try again.
          </p>
        )}
        {status === "success" && (
          <p className="access-gate-message access-gate-message--success">
            Welcome!
          </p>
        )}
      </div>
    </div>
  );
}
