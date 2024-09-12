import Image from 'next/image';


export default function Navbar() {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src={'/images/fnb.png'}
            alt="Bank logo"
            width={100}
            height={200}
            className="h-8 mr-4"
          />
          <nav className="space-x-4">
            <a href="/" className="text-blue-500">Home</a>
            <a href="/accounts" className="text-blue-500">Accounts</a>
            <a href="#" className="text-blue-500">Checks & Deposits</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-blue-500">Profile</button>
          <button className="text-blue-500">Log Out</button>
        </div>
      </header>
    )
}