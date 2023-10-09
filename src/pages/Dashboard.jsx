import React from 'react';

const Dashboard = () => {
    return (
        <div className="bg-blue-50 h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">Logged in Successfully !</h2>
                <p className="text-gray-600 text-center">Welcome, [Username]!</p>
            </div>
        </div>
    );
};

export default Dashboard;
