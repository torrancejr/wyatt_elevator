import React, { useState, useEffect, Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { fetchJobs, updateJob } from '../../api/api'; // Adjust the import based on your file structure
import JobListForm from './JobListForm'; // Adjust the import based on your file structure
import { Dialog, Transition } from '@headlessui/react';

const JobsList = () => {
    const [jobs, setJobs] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentJob, setCurrentJob] = useState(null); // State for the job being edited

    const getJobs = async () => {
        try {
            const data = await fetchJobs();
            if (Array.isArray(data)) {
                setJobs(data);
            } else {
                console.error('Unexpected data format:', data);
                setJobs([]);
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
            setJobs([]);
        }
    };

    useEffect(() => {
        getJobs();
    }, []);

    const closeForm = () => {
        setIsFormOpen(false);
        setCurrentJob(null);
    };

    const openForm = (job = null) => {
        setCurrentJob(job);
        setIsFormOpen(true);
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Jobs</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the jobs.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                        onClick={() => openForm()}
                    >
                        Add Job
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
                                    ID
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    E
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Consolidated
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Start Date
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Job
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Tax
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Type
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Job Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Address
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    City
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    State
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Zone
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Zip
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Type (String)
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Mech
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Units
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Visits
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {Array.isArray(jobs) && jobs.length > 0 ? (
                                jobs.map((job) => (
                                    <tr key={job.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {job.id}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.e ? 'Yes' : 'No'}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.consolidated}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(job.start_date).toLocaleDateString()}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.job}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.tax}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.job_type}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.job_name}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.address}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.city}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.state}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.zone}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.zip}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.type_str}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.mech}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.units}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.visits}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                                            <button onClick={() => openForm(job)} className="text-emerald-600 hover:text-emerald-900">
                                                Edit<span className="sr-only">, {job.consolidated}</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="18" className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                                        No jobs available.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal for Job Form */}
            <Transition.Root show={isFormOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeForm}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                {currentJob ? 'Edit Job' : 'Add Job'}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <JobListForm job={currentJob} closeForm={closeForm} refreshJobs={getJobs} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={closeForm}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export default JobsList;

