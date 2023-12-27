// InvoiceTable.jsx

import React from 'react';

// eslint-disable-next-line react/prop-types
const InvoiceTable = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="w-24" />
                </colgroup>
                <thead className="dark:bg-orange-500 text-white">
                <tr className="text-left sticky top-0 ">
                    <th className="p-3">Id</th>
                    <th className="p-3 ">Date</th>
                    <th className="p-3">Time</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                </tr>
                </thead>
                <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                {data.map((invoice, index) => (
                    <tr key={index} className="border-b  border-opacity-20 dark:border-gray-700 dark:bg-[#F3EBE7]">
                        <td className="p-3">
                            <p>{invoice.id}</p>
                        </td>
                        <td className="p-3">
                            <p>{invoice.Date}</p>
                        </td>
                        <td className="p-3">
                            <p>{invoice.Time}</p>
                        </td>
                        <td className="p-3 ">
                            <p>{invoice.Price}</p>
                        </td>
                        <td className="p-3">
                            <p>{invoice.Status}</p>
                        </td>
                        <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <span>{invoice.Action}</span>
                </span>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceTable;
