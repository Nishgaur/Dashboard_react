import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from '../Header';
import DashboardStatsGrid from '../DashboardStatsGrid';
import Last from '../Last';

export default function Layout() {
    return (
        <div className="flex flex-row bg-pink-50 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <div>{<Outlet />}</div>
                <DashboardStatsGrid />
                <Last />
            </div>
        </div>
    );
}
