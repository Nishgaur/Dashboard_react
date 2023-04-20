import React from 'react';
// import { Link } from 'react-router-dom';
import DashboardStatsGrid from './DashboardStatsGrid';
import LineCharts from './LineCharts';
import Last from './Last';

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <LineCharts />
            <Last />
        </div>
    );
}
