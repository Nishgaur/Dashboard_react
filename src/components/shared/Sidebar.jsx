import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS } from '../library/consts/navigation';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../library/consts/navigation';

const linkClasses =
    'flex items-center gap-2 font-light px-3 py-2 hover:big-neutral-700 hover:bg-gray-800 active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-4 rounded-xl flex flex-col text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <span className="text-3xl  font-bold ">Board.</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 ">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
        </div>
    );
}

function SidebarLink({ item }) {
    // const { pathname } = useLocation();
    return (
        <Link to={item.path} className={classNames(linkClasses)}>
            <span className="text-ul">{item.icon}</span>
            {item.label}
        </Link>
    );
}
