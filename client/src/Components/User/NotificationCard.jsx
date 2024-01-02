import React, { useState, useEffect } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import axios from 'axios';

function NotificationCard() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications when the component mounts
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/notification');
        const fetchedNotifications = response.data.data.notification || [];
        console.log(fetchedNotifications);
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        // Handle error gracefully, e.g., setNotifications([]) or show an error message
      }
    };

    fetchNotifications();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="max-h-[250px] sm:min-w-[200px] min-w-[200px] py-2 px-4 absolute right-4 bg-white border-t-2 border-b-2 border-gray-500 rounded-2xl overflow-auto text-sm">
      {notifications.map((notification, index) => (
        <div
          className="flex flex-row items-center justify-start border-b border-cyan-600 w-full py-2 relative"
          key={index}
        >
          <div className="text-gray-600 flex items-center mr-2">
            <IoNotificationsOutline className="w-6 h-6 text-cyan-600" />
          </div>
          <span className="text-[10px]">
          {notification.message}
          </span>
        </div>
      ))}
    </div>
  );
}

export default NotificationCard;
