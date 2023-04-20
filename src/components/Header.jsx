import React, { Fragment } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
// import { CgProfile } from 'react-icons/cg';
import { Popover, Transition, Menu } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="h-10 px-4 flex content-end justify-between items-center">
            <div className="font-bold text-2xl">Dashboard</div>

            <div className="flex item-center gap-3 mr-2 ">
                <div className="relative flex item-center gap-3 mr-2">
                    <AiOutlineSearch
                        fontSize={20}
                        className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-3"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-slate-400 text- bg-white 
                        focus:outline-none active:none h-30px w-182px rounded-3xl px-4 top-10px"
                    ></input>
                </div>
                <Popover className="relative flex item-center gap-3 mr-2">
                    {({ open }) => (
                        <>
                            <Popover.Button>
                                <BiBell className="h-5 w-5" />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transform ease-out duration-200 transition-transform"
                                enterFrom="opacity-0 scale-95 transform top-1/2 -translate-y-1/2 right-3"
                                enterTo="opacity-100 scale-100 transform translate-y-0"
                                leave="transform ease-in duration-150 transition-transform"
                                leaveFrom="opacity-100 scale-100 transform translate-y-0"
                                leaveTo="opacity-0 scale-95 transform -translate-y-1"
                            >
                                <Popover.Panel
                                    className="absolute mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    style={{ maxWidth: '90vw', right: '-10px', top: '25px' }}
                                >
                                    <div className="py-2.5 px-2">
                                        <p className="text-sm font-medium text-gray-900">You can do it</p>
                                        <p className="text-sm text-gray-500">no new messages!</p>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div className="inline-flex">
                        <Menu.Button className="ml-2 inline flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">User Menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
                            >
                                <span className="sr-only">Nishtha</span>
                            </div>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className="origin-top-rigth absolute right-0 mt-10 w-48 shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            style={{ maxWidth: '90vw', right: '-10px', top: '25px' }}
                        >
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-1'
                                        )}
                                        onClick={() => navigate('/profile')}
                                    >
                                        Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-1'
                                        )}
                                        onClick={() => navigate('/logout')}
                                    >
                                        LogOut
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
}
