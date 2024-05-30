import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {getCurrentUser} from "../api/api";
import { logout } from '../api/api';
import { useNavigate } from 'react-router-dom';
import api from "../api/api";
import { useCurrentUser } from '../userContext';

const navigation = [
    { name: 'Services', href: '/elevator-services' },
    { name: 'Successes', href: '/wyatt-elevator-success' },
    { name: 'Suppliers', href: '/elevator-suppliers' },
    { name: 'Contact Us', href: '/contact-us' },
    // { name: 'Blog', href: '/blog' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { currentUser, setCurrentUser } = useCurrentUser();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            setCurrentUser(null);
            navigate('/login');
            window.location.reload(); // Redirect to login page after logout
        } catch (error) {
            console.error('Failed to logout', error);
        }
    };


    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Wyatt Elevator</span>
                            <img
                                className="h-16 w-auto"
                                src="https://wyatt-elevator.s3.amazonaws.com/wyattlogo-sm.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {currentUser ? (
                            <div className="flex flex-col items-end">
                                <h1 className="text-sm font-semibold leading-6 text-gray-900">Welcome, {currentUser.email}</h1>
                                <button onClick={handleLogout} className="text-sm font-semibold leading-6 text-gray-900 mt-2">
                                    Log out <span aria-hidden="true">&rarr;</span>
                                </button>
                            </div>
                        ) : (
                            <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                                {/*Log in <span aria-hidden="true">&rarr;</span>*/}
                            </a>
                        )}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Wyatt Elevator</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://wyatt-elevator.s3.amazonaws.com/wyattlogo-sm.jpg"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}
