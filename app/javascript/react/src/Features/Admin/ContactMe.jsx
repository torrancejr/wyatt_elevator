import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { fetchInquiries } from '../../api/api'; // Adjust the import based on your file structure

const ContactMe = () => {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        const getInquiries = async () => {
            try {
                const data = await fetchInquiries();
                setInquiries(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching inquiries:', error);
            }
        };

        getInquiries();
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Contact Me Leads</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the people who have filled out the Contact Me form.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                        Add Potential Lead
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    <a href="#" className="group inline-flex">
                                        Name
                                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                    </a>
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <a href="#" className="group inline-flex">
                                        Location
                                        <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                    </a>
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <a href="#" className="group inline-flex">
                                        Email
                                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                    </a>
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <a href="#" className="group inline-flex">
                                        Phone
                                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                    </a>
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {inquiries.map((inquiry) => (
                                <tr key={inquiry.id}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        {inquiry.first_name} {inquiry.last_name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{inquiry.location}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{inquiry.email}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{inquiry.phone_number}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                                        <a href="#" className="text-emerald-600 hover:text-emerald-900">
                                            Edit<span className="sr-only">, {inquiry.first_name} {inquiry.last_name}</span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;