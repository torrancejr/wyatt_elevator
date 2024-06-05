import React, { useState } from 'react';

const JobListForm = ({ closeForm, refreshJobs }) => {
    const [formData, setFormData] = useState({
        e: false,
        consolidated: '',
        start_date: '',
        job: '',
        tax: '',
        job_type: '', // Changed to job_type
        job_name: '',
        address: '',
        city: '',
        state: '',
        zone: '',
        zip: '',
        type_str: '',
        mech: '',
        units: '',
        visits: 'Reg',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                },
                body: JSON.stringify({ job: formData }), // Wrap formData in { job: formData }
            });
            if (response.ok) {
                await refreshJobs(); // Refresh jobs list after successful submission
                closeForm();
            } else {
                console.error('Failed to submit job');
            }
        } catch (error) {
            console.error('Error submitting job:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="e"
                        checked={formData.e}
                        onChange={handleChange}
                    />
                    E (Boolean)
                </label>
            </div>
            <div>
                <label>
                    Consolidated:
                    <input
                        type="text"
                        name="consolidated"
                        value={formData.consolidated}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    Start Date:
                    <input
                        type="date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    Job (3-digit number):
                    <input
                        type="number"
                        name="job"
                        value={formData.job}
                        onChange={handleChange}
                        className="block w-full"
                        max="999"
                        min="0"
                    />
                </label>
            </div>
            <div>
                <label>
                    Tax (single letter):
                    <input
                        type="text"
                        name="tax"
                        value={formData.tax}
                        onChange={handleChange}
                        className="block w-full"
                        maxLength="1"
                    />
                </label>
            </div>
            <div>
                <label>
                    Job Type (number below 10):
                    <input
                        type="number"
                        name="job_type" // Changed to job_type
                        value={formData.job_type}
                        onChange={handleChange}
                        className="block w-full"
                        max="9"
                        min="0"
                    />
                </label>
            </div>
            <div>
                <label>
                    Job Name:
                    <input
                        type="text"
                        name="job_name"
                        value={formData.job_name}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    Zone (single letter or number):
                    <input
                        type="text"
                        name="zone"
                        value={formData.zone}
                        onChange={handleChange}
                        className="block w-full"
                        maxLength="1"
                    />
                </label>
            </div>
            <div>
                <label>
                    Zip:
                    <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    Type (String):
                    <input
                        type="text"
                        name="type_str"
                        value={formData.type_str}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    Mech Name:
                    <input
                        type="text"
                        name="mech"
                        value={formData.mech}
                        onChange={handleChange}
                        className="block w-full"
                    />
                </label>
            </div>
            <div>
                <label>
                    Units (number below 10):
                    <input
                        type="number"
                        name="units"
                        value={formData.units}
                        onChange={handleChange}
                        className="block w-full"
                        max="9"
                        min="0"
                    />
                </label>
            </div>
            <div>
                <label>
                    Visits:
                    <select
                        name="visits"
                        value={formData.visits}
                        onChange={handleChange}
                        className="block w-full"
                    >
                        <option value="Reg & Sys">Reg & Sys</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Bi-Monthly">Bi-Monthly</option>
                        <option value="Elev Quarterly/ CL Yearly">Elev Quarterly/ CL Yearly</option>
                    </select>
                </label>
            </div>
            <button
                type="submit"
                className="block rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
                Submit
            </button>
        </form>
    );
};

export default JobListForm;
