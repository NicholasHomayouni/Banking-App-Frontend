import Image from 'next/image';


export default function Navbar() {
  return (
    <header className="flex flex-col bg-white shadow-sm">
        {/* Top Header with Bank Name and Welcome Section */}
        <div className="flex justify-between items-center py-2 px-6">
          <div className="flex items-center space-x-2">
          <Image 
            src={'/images/fnb.png'}
            alt="Bank logo"
            width={100}
            height={200}
            className="h-8 mr-4"
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
            <a href="/accounts" className="hover:underline">Accounts</a>
            <a href="/" className="hover:underline">Payments & Transfers</a>
            <a href="#" className="hover:underline">Checks & Deposits</a>
            <a href="/" className="hover:underline">Administration</a>
          </div>
        </nav>
      </header>
    // <header className="bg-white shadow-md p-4 flex justify-between items-center">
    //   <div className="flex items-center space-x-2">
    //     <Image
    //       src={'/images/fnb.png'}
    //       alt="Bank logo"
    //       width={100}
    //       height={200}
    //       className="h-8 mr-4"
    //     />
    //     <h1 className="text-lg font-bold text-blue-900">First National Bank</h1>
    //     <nav className="space-x-4">
    //       <a href="/" className="text-blue-500">Home</a>
    //       <a href="/accounts" className="text-blue-500">Accounts</a>
    //       <a href="#" className="text-blue-500">Checks & Deposits</a>
    //     </nav>
    //   </div>
    // </header>
  )
}