import React, { useContext, useEffect, useState } from 'react';
import UserFinder from '../../Apis/UserFinder';
import { UsersContext } from '../../context/userscontext';

// eslint-disable-next-line react/prop-types
const ManagementTable = ({ data }) => {
  const { users, setUsers } = useContext(UsersContext);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserFinder.get('http://localhost:3000/api/v1/users');
        setUsers(response.data.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);



  const handleDelete = async (id) => {
    try {
      const response = await UserFinder.delete(`/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await UserFinder.get(`http://localhost:3000/api/v1/users/search?query=${searchTerm}`);
      setUsers(response.data.data.user);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center mb-4">
        <input
          className="px-4 py-2 text-gray-600 flex focus:outline-none focus:border-none focus:border-b focus:border-gray-700"
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSearch}
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
          {users &&
            users.map((user) => (
              <tr key={user.id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-[#F3EBE7]">
                <td className="p-3">
                  <p>{user.id}</p>
                </td>
                <td className="p-3">
                  <p>{user.username}</p>
                </td>
                <td className="p-3">
                  <p>{user.email}</p>
                </td>
                <td className="p-3">
                  <p>active</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <span> <button onClick={() => handleDelete(user.id)}> Delete</button></span>
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
