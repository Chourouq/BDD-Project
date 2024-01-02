import React, { useContext, useEffect, useState } from 'react';
import ReservationFinder from '../../Apis/ReservationFinder';
import { ReservationContext } from '../../context/ReservationContext';

// eslint-disable-next-line react/prop-types
const InvoiceTable = ({ data }) => {
  const { reservation, setReservation } = useContext(ReservationContext);
  const [liberatedReservations, setLiberatedReservations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const response = await ReservationFinder.get(`http://localhost:3000/api/v1/reservation/search?query=${searchQuery}`);
      setReservation(response.data.data.reservation);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const handleUpdate = async (reservation_id) => {
    try {
      const response = await ReservationFinder.put(`http://localhost:3000/api/v1/reservation/${reservation_id}`, {
        status: 'inactive',
      });

      if (response.status === 200) {
        setReservation((prevReservations) =>
          prevReservations.map((reservation) =>
            reservation.reservation_id === reservation_id ? { ...reservation, status: 'inactive' } : reservation
          )
        );
        setLiberatedReservations((prevLiberated) => [...prevLiberated, reservation_id]);
      }

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search by date..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
          onClick={fetchData}
        >
          Search
        </button>
      </div>
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
          <tr className="text-left sticky top-0">
            <th className="p-3">Id</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3">Price</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {reservation.map((reservation) => (
            <tr key={reservation.reservation_id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-[#F3EBE7]">
              <td className="p-3">
                <p>{reservation.reservation_id}</p>
              </td>
              <td className="p-3">
                <p>{reservation.resdate}</p>
              </td>
              <td className="p-3">
                <p>{reservation.restime}</p>
              </td>
              <td className="p-3 ">
                <p>{reservation.price}</p>
              </td>
              <td className="p-3">
                <p className={reservation.status === 'inactive' ? 'text-red-500' : 'text-green-500'}>{reservation.status}</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <span>
                    <button
                      onClick={() => handleUpdate(reservation.reservation_id)}
                      disabled={liberatedReservations.includes(reservation.reservation_id)}
                    >
                      {liberatedReservations.includes(reservation.reservation_id) ? 'Liberated' : 'Liberate'}
                    </button>
                  </span>
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
