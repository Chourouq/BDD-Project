// NotificationContext.jsx

import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (admin, action, description) => {
    const newNotification = {
      admin,
      action,
      description,
      id: Date.now(), // Add a unique id for each notification
    };

    setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
