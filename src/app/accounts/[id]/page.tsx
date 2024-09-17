import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/navbar/navbar';
import { Account } from '@/app/models/Account';

type Params = {
  params: {
    id: string,
  }
}

export default async function AccountIdPage({ params }: Params) {
  const { id } = params;
  let data = await fetch(`http://localhost:8080/api/accounts/${id}`, { cache: "no-store" });
  let response = await data.json();
  let account = response.data || response;
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />
      {/* Account Information */}
      <section className="bg-white p-6 mt-4 shadow-md rounded">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Account Information</h2>
          <div className="flex space-x-2">
            <button className="bg-red-500 px-3 py-1 rounded">DETAILS</button>
            <button className="bg-red-500 px-3 py-1 rounded">DOCUMENTS</button>
            <button className="bg-red-500 px-3 py-1 rounded">DOWNLOAD</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Balance</h3>
            {/* Add details similar to your image */}
          </div>
          <div>
            <h3 className="font-medium">Activity</h3>
            {/* Add details similar to your image */}
          </div>
        </div>
      </section>

      {/* Transactions */}
      <section className="bg-white p-6 mt-4 shadow-md rounded">
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>
        <div className="mb-4">
          {/* Search and filter options */}
          <input
            type="text"
            placeholder="Search transactions"
            className="border p-2 rounded w-full"
          />
        </div>
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Debit</th>
              <th className="border p-2">Credit</th>
              <th className="border p-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample transaction row */}
            <tr className="border">
              <td className="text-black border p-2">Sep 11, 2024</td>
              <td className="text-black border p-2">Transaction Description</td>
              <td className="text-black border p-2">$44.15</td>
              <td className="text-black border p-2">$0.00</td>
              <td className="text-black border p-2">$1000.00</td>
            </tr>
            {/* Add more rows as necessary */}
          </tbody>
        </table>
      </section>
    </div>
  );
};
