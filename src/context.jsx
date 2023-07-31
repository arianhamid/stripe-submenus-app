import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const openSubmenu = (text, coordinates) => {
    setIsSubmenuOpen(true);
    setLocation(coordinates);

    const selectedPage = sublinks.find((subLink) => {
      return subLink.page === text;
    });
    setPage(selectedPage);
    console.log(page);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const closeSubmenu = () => {
    console.log("object");
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
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//custom hook
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
