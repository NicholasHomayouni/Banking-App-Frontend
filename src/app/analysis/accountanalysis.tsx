const AccountAnalysis = () => {
    return (
        <div className="p-4 bg-white rounded-md shadow-md mt-4">
            <h2 className="text-lg text-black font-bold mb-4">Analysis</h2>

            <div className="mb-2">
                <strong className="text-black">Todays Date:</strong> {new Date().toLocaleDateString()}
            </div>
            <div className="mb-2">
                <strong className="text-black">Last Month's Balance on This Day:</strong> ${ }
            </div>
            <div className="mb-2 text-black">
                <strong>Difference:</strong> ${ }
            </div>

            <div className="mb-2 text-black">
                <strong>Possible Causes:</strong>
                <ul className="list-disc ml-5">
                    <li>No unresolved tenants.</li>
                </ul>
            </div>
        </div>
    );
};
export default AccountAnalysis;