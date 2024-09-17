import { Account } from "../models/Account";
import { Transaction } from "../models/Transaction";

export default async function Transactions({ id }: Account) {
    // Fetch transactions data from the backend
    let res = await fetch(`http://localhost:8080/api/transactions/account/${id}`, {
      next: { revalidate: 10 }, // Revalidate every 10 seconds if needed
      cache: 'no-store', // Prevents caching on the server side for real-time data
    });
    const data = await res.json();
  
    // If there's an error or no data
    if (!data || !Array.isArray(data)) {
      return <div>No transactions available.</div>;
    }
  
    return (
      <div className="p-4 bg-white rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Transactions for Account {id}</h2>
        <table className="min-w-full border border-gray-200">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Debit</th>
              <th className="py-2 px-4">Credit</th>
              <th className="py-2 px-4">Balance After</th>
              <th className="py-2 px-4">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-200 text-black">
                <td className="py-2 px-4">{transaction.id}</td>
                <td className="py-2 px-4">{transaction.description}</td>
                <td className="py-2 px-4">{transaction.debit ? `$${transaction.debit.toFixed(2)}` : '-'}</td>
                <td className="py-2 px-4">{transaction.credit ? `$${transaction.credit.toFixed(2)}` : '-'}</td>
                <td className="py-2 px-4">${transaction.balanceAfter.toFixed(2)}</td>
                <td className="py-2 px-4">{new Date(transaction.creationDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }