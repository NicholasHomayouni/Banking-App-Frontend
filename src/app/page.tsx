// Home.js
import React from 'react';

export default function Home() {
  return (
    <main className="p-6 bg-gray-100 font-sans">
      {/* Header */}
      <header className="flex flex-col bg-white shadow-sm">
        {/* Top Header with Bank Name and Welcome Section */}
        <div className="flex justify-between items-center py-2 px-6">
          <div className="flex items-center space-x-2">
            <img
              src="path-to-your-logo.png" // Replace with the path to your logo image
              alt="Bank Logo"
              className="h-8"
            />
            <h1 className="text-lg font-bold text-blue-900">First National Bank</h1>
          </div>
          <div className="text-right text-sm">
            <span className="font-semibold text-gray-500">Welcome NICHOLE</span>,<br />
            <span className="text-gray-500">Last log in: Aug 08, 2019 04:37 PM EDT</span>
            <div className="space-x-2">
              <a href="/" className="text-blue-700 hover:underline">Profile</a>
              <span>|</span>
              <a href="/" className="text-blue-700 hover:underline">Log Out</a>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="flex justify-between items-center bg-blue-900 text-white text-sm px-6 py-2">
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/" className="hover:underline">Accounts</a>
            <a href="/" className="hover:underline">Payments & Transfers</a>
            <a href="/" className="hover:underline">Checks & Deposits</a>
            <a href="/" className="hover:underline">Administration</a>
          </div>
        </nav>
      </header>

      {/* Grid Layout for Accounts and Sidebar */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Accounts Section */}
        <section className="col-span-2 bg-white p-6 rounded-md shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Accounts</h2>
            <div className="space-x-2">
              <button className="px-4 py-1 bg-gray-300 text-sm rounded">Edit Accounts</button>
              <button className="px-4 py-1 bg-gray-300 text-sm rounded">Print</button>
            </div>
          </div>
          <div className="space-y-4">
            {['CHECKING 9253', 'CHECKING 2702 TWO', 'NEW TEST ACCOUNT 9252', 'CHECKING 9245'].map((account, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-t pt-4"
              >
                <span className="font-medium">{account}</span>
                <span className="font-bold text-2xl">${(Math.random() * 100 + 5).toFixed(2)}</span>
                <button className="text-blue-600 text-sm hover:underline">Recent</button>
              </div>
            ))}
            <button className="text-blue-600 text-sm hover:underline">Show All Accounts</button>
          </div>
        </section>

        {/* Sidebar Section */}
        <aside className="space-y-6">
          {/* Pay or Transfer Section */}
          <section className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Pay or Transfer</h3>
            {['Internal', 'ACH', 'ACH Import', 'Wire', 'Bill Pay'].map((item, index) => (
              <button
                key={index}
                className="block w-full text-left py-2 bg-blue-800 text-white rounded hover:bg-blue-900 mb-1"
              >
                {item}
              </button>
            ))}
          </section>

          {/* Additional sections such as Checks & Deposits and Quick Launch can go here */}
          {/* Checks & Deposits Section */}
          <section className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="text-lg text-black font-semibold mb-4">Checks & Deposits</h3>
            <a href="/" className="text-blue-600 hover:underline">Go to Positive Pay</a>
          </section>

          {/* Quick Launch Section */}
          <section className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="text-lg text-black font-semibold mb-4">Quick Launch</h3>
            <a href="/" className="text-blue-600 hover:underline">Demo and User Guides</a>
          </section>
        </aside>
      </div>

      {/* Payments & Transfers Section */}
      <section className="bg-white p-6 mt-6 rounded-md shadow-sm">
        <h2 className="text-lg font-bold mb-4">Payments & Transfers</h2>
        <div className="border-t border-b border-blue-800 py-2">
          <button className="text-white bg-blue-800 px-4 py-1 rounded-t-md">Review (6)</button>
          <button className="ml-auto text-blue-800 px-4 py-1">Hide ▲</button>
        </div>

        {/* Wire Section */}
        <div className="border-t mt-4">
          <h3 className="font-semibold text-md mb-2 bg-blue-800 text-white py-2 px-4">Wire</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-800 text-white text-left">
                <th className="p-2 w-1/12"><input type="checkbox" /></th>
                <th className="p-2 w-4/12">Description</th>
                <th className="p-2 w-4/12">Reason</th>
                <th className="p-2 w-3/12 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                { description: '60 TEMPLATE', reason: 'Review required', amount: '7.00' },
                { description: 'PATCHING', reason: 'Review required', amount: '5.00' },
                { description: 'RECURRING 62', reason: 'Review required', amount: '3.00' },
              ].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2"><input type="checkbox" /></td>
                  <td className="p-2 text-blue-600 hover:underline">{item.description}</td>
                  <td className="p-2">{item.reason}</td>
                  <td className="p-2 text-right">${item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-red-600 text-white px-4 py-1 rounded">Approve</button>
            <button className="bg-red-600 text-white px-4 py-1 rounded">Disapprove</button>
          </div>
        </div>

        {/* ACH Section */}
        <div className="border-t mt-4">
          <h3 className="font-semibold text-md mb-2 bg-blue-800 text-white py-2 px-4">ACH</h3>
          <p className="p-2 text-center">There are no transfers requiring review.</p>
        </div>

        {/* Internal Section */}
        <div className="border-t mt-4">
          <h3 className="font-semibold text-md mb-2 bg-blue-800 text-white py-2 px-4">Internal</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-800 text-white text-left">
                <th className="p-2 w-1/12"><input type="checkbox" /></th>
                <th className="p-2 w-4/12">Date</th>
                <th className="p-2 w-4/12">Template</th>
                <th className="p-2 w-3/12 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2"><input type="checkbox" /></td>
                <td className="p-2">Nov 02, 2018</td>
                <td className="p-2 text-blue-600 hover:underline">CHECKING TO CHECKING</td>
                <td className="p-2 text-right">$1.00</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-red-600 text-white px-4 py-1 rounded">Approve</button>
            <button className="bg-red-600 text-white px-4 py-1 rounded">Disapprove</button>
          </div>
        </div>
      </section>
    </main>
  );
}