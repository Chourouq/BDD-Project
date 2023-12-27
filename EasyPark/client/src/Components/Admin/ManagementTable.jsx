// InvoiceTable.jsx
import React from 'react';
// eslint-disable-next-line react/prop-types
const ManagementTable = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="w-15" />
                </colgroup>
                <thead className="dark:bg-orange-500 text-white">
                <tr className="text-left sticky top-0 ">
                    <th className="p-3">Id</th>
                    <th className="p-3 ">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                </tr>
                </thead>
                <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                {data.map((User, index) => (
                    <tr key={index} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-[#F3EBE7]">
                        <td className="p-3">
                            <p>{User.id}</p>
                        </td>
                        <td className="p-3">
                            <p>{User.Name}</p>
                        </td>
                        <td className="p-3">
                            <p>{User.Email}</p>
                        </td>
                        <td className="p-3">
                            <p>{User.Status}</p>
                        </td>
                        <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                    {/* eslint-disable-next-line no-undef */}
                  <span>{User.Action}</span>
                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default ManagementTable;
