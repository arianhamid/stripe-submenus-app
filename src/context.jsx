import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const openSubmenu = (text, coordinates) => {
    setIsSubmenuOpen(true);
    setLocation(coordinates);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen: isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//custom hook
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
