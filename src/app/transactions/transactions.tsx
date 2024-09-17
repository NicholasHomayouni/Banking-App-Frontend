import { Account } from "../models/Account";
import { Transaction } from "../models/Transaction";

export default async function Transactions({ id }: Account) {
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
      <div className="p-4 bg-gray-200 rounded-md shadow-md">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-right">Debit</th>
              <th className="py-2 px-4 text-right">Credit</th>
              <th className="py-2 px-4 text-right">Balance After</th>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-300 text-black">
                <td className="py-2 px-4 text-left">{new Date(transaction.creationDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 text-left">{transaction.description}</td>
                <td className="py-2 px-4 text-right">{transaction.debit ? `$${transaction.debit.toFixed(2)}` : '-'}</td>
                <td className="py-2 px-4 text-right">{transaction.credit ? `$${transaction.credit.toFixed(2)}` : '-'}</td>
                <td className="py-2 px-4 text-right">${transaction.balanceAfter.toFixed(2)}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }