import { ArrowLeft, ArrowRight, ArrowUpDown, BadgeDollarSign, Bell, BrainCog, BrainCogIcon, Home, NotepadText, NotepadTextIcon, Plus } from "lucide-react"; // You can switch to react-icons if you prefer
import React, { useState } from "react";
import Life from "../assets/lifesync.png"
import Ask from "../assets/ask.png"

const transactions = [
  {
    date: "08/09/2022",
    description:
      "ACH CREDIT FROM FRM WELLS FARGO TREASURY MANAGEMENT\nREFERENCE #052220649292874",
    amount: 307000, // $307,000.00
  },
  {
    date: "08/08/2022",
    description:
      "PURCHASE AUTHORIZED ON 08/08\nCASEY'S #3573 10102 BROADW\nCROWN POINT IN P382220644905827\nCARD 9294",
    amount: 3000,
  },
  {
    date: "08/08/2022",
    description:
      "PURCHASE AUTHORIZED ON 08/08\nCASEY'S #3573 10102 BROADW\nCROWN POINT IN P582220647870891\nCARD 9294",
    amount: 2099,
  },
  {
    date: "08/07/2022",
    description:
      "POS PURCHASE AT STARBUCKS STORE #2341\nCHICAGO IL P382220638750827\nCARD 9294",
    amount: 524,
  },
  {
    date: "08/07/2022",
    description:
      "WITHDRAWAL ATM 08/07\nFIFTH THIRD BANK ATM00092\nCHICAGO IL P982220641237822\nCARD 9294",
    amount: 10000,
  },
  {
    date: "08/06/2022",
    description:
      "PURCHASE AUTHORIZED ON 08/06\nAMAZON MKTPLACE PMTS AMZN.COM/BILL WA\nCARD 9294",
    amount: 4590,
  },
  {
    date: "08/06/2022",
    description:
      "ACH DEBIT TO APPLE.COM BILLING\nREFERENCE #82389238723498234",
    amount: 1540,
  },
  {
    date: "08/05/2022",
    description:
      "CHECK #1042 CLEARED\nFARGO RENT PAYMENT FOR AUGUST",
    amount: 127300,
  },
  {
    date: "08/04/2022",
    description:
      "DEPOSIT MOBILE 08/04\nCHASE QUICKPAY REF# 923492384\nFROM JOHN DOE",
    amount: 200000,
  },
];


function formatAmount(amount: number) {
  return `$${(amount / 100).toFixed(2)}`;
}


const Dashboard = () => {
    const [balance, setBalance] = useState(307000); // Set your default balance here
    const name = "JASMINE KURT";
    const [selectedTab, setSelectedTab] = useState<string>("Accounts");
    const formatAmount = (val) =>
        val < 0
            ? `- $${Math.abs(val).toLocaleString()}`
            : `$${val.toLocaleString()}`;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#c9d6ff] to-[#e2e2e2] px-4 py-6">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
                {/* Ask Fargo Input with Icon */}
                <div className="relative w-1/2">
                    <img
                        src={Ask}
                        alt="Ask Fargo"
                        className="absolute left-3 top-2.5 w-5 h-5"
                    />
                    <input
                        type="text"
                        placeholder="Ask Fargo"
                        className="bg-white rounded-full pl-10 pr-4 py-2 w-full text-sm shadow placeholder-gray-500"
                    />
                </div>

                {/* Bell + Sign Off */}
                <div className="flex items-center space-x-4">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <a
                        href="/login"
                        className="text-red-800 text-sm font-semibold hover:underline"
                    >
                        Sign off
                    </a>
                </div>
            </div>

            {/* Greeting & Balance */}
            <div className="mt-12 px-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Good afternoon,
                    <br />
                    {name}
                </h2>

                <p className="mt-2 mb-1 text-sm text-gray-600 flex items-center whitespace-nowrap">
                    Wells Fargo Rewards® $0.55 cash rewards
                    <ArrowRight className="ml-1 w-4 h-4 text-gray-600" />
                </p>
            </div>


            {/* Account Card */}
            <div className="bg-white rounded-xl shadow p-4 mt-6">
                <p className="text-xs text-gray-500 mb-1">EVERYDAY CHECKING …0662</p>
                <h1 className="text-3xl  text-gray-900 mb-1">${balance.toLocaleString()}</h1>
                <p className="text-sm text-gray-500">Available balance</p>
            </div>

            <div className="flex items-center space-x-2 mt-4 mb-6">
                <div className="p-2 bg-purple-700 rounded-full">
                    <Plus className="w-4 h-4 text-white" />
                </div>
                <p className="text-purple-700 font-semibold text-sm">
                    Open a new account
                </p>
            </div>



            {/* LifeSync Section */}
            <div className="bg-white rounded-xl shadow px-4 py-3 mt-4 flex items-center space-x-4">
                <img
                    src={Life}
                    alt="LifeSync Icon"
                    className="w-10 h-10 rounded-full object-cover bg-gray-100"
                />
                <div>
                    <p className="text-sm font-semibold text-gray-800">LifeSync®</p>
                    <p className="text-xs text-gray-500">Set and track your money goals</p>
                </div>
            </div>



            {/* Transactions */}
    <div className="space-y-4 mt-9">
  <h2 className="text-lg font-semibold text-gray-800 mb-3">Recent Transactions</h2>

  {transactions.map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-lg px-4 py-3 shadow-sm flex justify-between items-center"
    >
      {/* Left Section - Icon + Info */}
      <div className="flex items-center gap-3">
        {/* Check icon with background */}
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <svg
            className="w-4 h-4 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Text details */}
        <div className="text-sm text-gray-700 whitespace-pre-line leading-tight">
          <p className="font-semibold text-xs text-gray-500 mb-1">{item.date}</p>
          <p>{item.description}</p>
        </div>
      </div>

      {/* Right Section - Amount */}
      <span className="text-sm font-semibold text-gray-800">
        {formatAmount(item.amount)}
      </span>
    </div>
  ))}
</div>


            {/* Bottom Tab */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-2 px-4 flex justify-between items-center rounded-t-xl">
                {[
                    { label: "Accounts", icon: <Home /> },
                    { label: "Deposit", icon: <ArrowUpDown /> },
                    { label: "Pay & Transfer", icon: <BadgeDollarSign /> },
                    { label: "Explore", icon: <BrainCogIcon className="w-5 h-5" /> },
                    { label: "Menu", icon: <NotepadTextIcon className="w-5 h-5" /> },
                ].map(({ label, icon }) => {
                    const isActive = selectedTab === label;
                    const colorClass = isActive ? "text-red-600" : "text-gray-500";
                    return (
                        <button
                            key={label}
                            onClick={() => setSelectedTab(label)}
                            className="flex flex-col items-center space-y-1 focus:outline-none"
                        >
                            {React.cloneElement(icon as React.ReactElement, {
                                className: `${colorClass} w-6 h-6`,
                            })}
                            <span className={`text-xs font-medium ${colorClass}`}>{label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const Tab = ({ icon, label }) => (
    <div className="flex flex-col items-center text-xs text-gray-600">
        <span className="text-lg">{icon}</span>
        {label}
    </div>
);

export default Dashboard;
