import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import EmailList from "./components/EmailList";
import EmailDetail from "./components/EmailDetail";
import Pagination from "./components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { markAsRead } from "./redux/emailSlice";
import './App.css';

function App() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filter, setFilter] = useState("all");
  const emails = useSelector((state) => state.emails);
  const dispatch = useDispatch();

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    dispatch(markAsRead(email.id));  // Mark email as read when clicked
  };

  const filteredEmails = emails.filter((email) => {
    if (filter === "unread") return !email.read;
    if (filter === "read") return email.read;
    if (filter === "favorites") return email.favorite;
    return true;
  });

  return (
    <div className="app">
      <FilterBar setFilter={setFilter} filter={filter} />
      <div className="email-container">
        <EmailList 
          emails={filteredEmails} 
          onEmailClick={handleEmailClick} 
          selectedEmail={selectedEmail} 
        />
        {selectedEmail && <EmailDetail email={selectedEmail} />}
      </div>
      <Pagination />
    </div>
  );
}

export default App;
