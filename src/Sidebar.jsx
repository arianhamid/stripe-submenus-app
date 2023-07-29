import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import Submenu from "./Submenu";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            return (
              <article key={index}>
                <h4>{link.page}</h4>
                <div className="sidebar-sublinks">
                  <Submenu />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
