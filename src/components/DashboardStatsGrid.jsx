import React from 'react';
import { TbUsers, TbCashBanknote } from 'react-icons/tb';
import { BsTags } from 'react-icons/bs';
import { RiThumbUpLine } from 'react-icons/ri';

export default function DashboardStatsGrid() {
    return (
        <div className="mt-8 flex gap-8 place-content-evenly justify-end w-full h-20 px-6">
            <div className="top-35px bg-green-100 shadow-sm rounded-lg ml-30px p-4 flex-1 border border-gray-200 flex items-center justify-end">
                <div className="flex items-center flex flex-col p-8">
                    <span>Total Revenues</span>
                    <strong className="text-2xl">$2,129,430</strong>
                </div>
                <TbCashBanknote className="w-8 h-8 mr-2" />
            </div>
            <div className="top-35px bg-amber-100 shadow-sm rounded-lg ml-30px p-4 flex-1 border border-gray-200 flex items-center justify-end">
                <div className="flex items-center flex flex-col p-8">
                    <span>Total Transactions</span>
                    <strong className="text-2xl">1,520</strong>
                </div>
                <BsTags className="w-8 h-8 mr-2 " />
            </div>
            <div className="top-35px bg-red-100 shadow-sm rounded-lg ml-30px p-4 flex-1 border border-gray-200 flex items-center justify-end">
                <div className="flex items-center flex flex-col p-8 ">
                    <span>Total Likes</span>
                    <strong className="text-2xl"> 9,721</strong>
                </div>
                <RiThumbUpLine className="w-8 h-8 mr-2 " />
            </div>
            <div className="top-35px bg-indigo-100 shadow-sm rounded-lg ml-30px p-4 flex-1 border border-gray-200 flex items-center justify-end">
                <div className="flex items-center flex flex-col p-8">
                    <span>Total Users</span>
                    <strong className="text-2xl">892</strong>
                </div>
                <TbUsers className="w-8 h-8 mr-2 " />
            </div>
             
        </div>
    );
}
