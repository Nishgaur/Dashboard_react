import { FiPieChart } from 'react-icons/fi';
import { BsTags } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <FiPieChart />,
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: <BsTags />,
    },
    {
        key: 'schedule',
        label: 'Schedule',
        path: '/schedule',
        icon: <AiOutlineSchedule />,
    },
    {
        key: 'user',
        label: 'Users',
        path: '/users',
        icon: <BiUserCircle />,
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <IoSettingsOutline />,
    },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'help',
        label: 'Help',
        path: '/help',
    },
    {
        key: 'contact',
        label: 'Contact Us',
        path: '/contact',
    },
];
