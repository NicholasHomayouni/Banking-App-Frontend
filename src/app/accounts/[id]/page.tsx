import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/navbar/navbar';
import { Account } from '@/app/models/Account';
import Transactions from '@/app/transactions/transactions';
import AccountAnalysis from '@/app/analysis/accountanalysis';
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
            <section className="bg-white p-6 mt-4 shadow-md rounded">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl text-black font-semibold">Account Information</h2>
                    <AccountAnalysis />
                    <div className="flex space-x-2">
                        <button className="bg-red-500 px-3 py-1 rounded">DETAILS</button>
                        <button className="bg-red-500 px-3 py-1 rounded">DOCUMENTS</button>
                        <button className="bg-red-500 px-3 py-1 rounded">DOWNLOAD</button>
                    </div>
                </div>
                <div>
                    <h2 className="text-black text-xl font-semibold">{account.name}</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-black font-medium">Balance</h3>
                        {/* Add details similar to your image */}
                    </div>
                    <div>
                        <h3 className="text-black font-medium">Activity</h3>
                        {/* Add details similar to your image */}
                    </div>
                </div>
            </section>

            {/* Transactions */}
            <section className="bg-white p-6 mt-4 shadow-md rounded">
                <h2 className="text-xl text-black font-semibold mb-4">Transactions</h2>
                <div className="mb-4">
                    {/* Search and filter options */}
                    <input
                        type="text"
                        placeholder="Search transactions"
                        className="border text-black p-2 rounded w-full"
                    />
                </div>
                <Transactions
                    id={account.id}
                    accountNumber={account.accountNumber}
                    name={account.name}
                    accountType={account.accountType}
                    balance={account.balance}
                    creationDate={account.creationDate}
                    status={account.status} />
            </section>
        </div>
    );
};
