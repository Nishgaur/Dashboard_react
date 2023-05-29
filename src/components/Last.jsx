import React from 'react';

export default function Last() {
    return (
        <div className="top-25px flex flex-col bg-white shadow-sm rounded-lg ml-30px p-4 flex-1 border border-gray-200 flex">
            <strong className="font-lg text-gray-700 text-bold">Today's Schedule</strong>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col border-l-green-500">
                    <span className="text-semibold text-sm text-gray-500 ">Meeting with suppliers from Kuta Bali</span>
                    <span className="text-sm text-gray-400">14:00-15:00</span>
                    <span className="text-sm text-gray-400">at Sunset Raod, Kuta, Bali</span>
                </div>
                <div className="flex flex-col border-l-indigo-500">
                    <span className="text-semibold text-gray-500 ">Check operation at Giga Factory 1</span>
                    <span className="text-sm text-gray-400">18:00-20:00</span>
                    <span className="text-sm text-gray-400">at Sunset Raod, Kuta, Bali</span>
                </div>
            </div>
        </div>
    );
}
