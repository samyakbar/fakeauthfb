import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CodeVerification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join("");
    if (enteredCode === "2121") {
      alert("✅ Code correct. Welcome to your dashboard, JASMINE KURT!");
      navigate("/dashboard");
    } else {
      alert("❌ Invalid code. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#f5f5f5] px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, JASMINE KURT</h1>
        <p className="text-sm text-gray-500">Enter the 4-digit code sent to your email</p>

        <div className="flex justify-center gap-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
        >
          Verify Code
        </button>
      </div>
    </div>
  );
};

export default CodeVerification;

