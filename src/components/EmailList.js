import React from "react";

const EmailList = ({ emails, onEmailClick, selectedEmail }) => {
  return (
    <div className="email-list">
      {emails.map((email) => (
        <div 
          key={email.id} 
          className={`email-item ${selectedEmail && selectedEmail.id === email.id ? "selected" : ""} ${email.read ? "read" : "unread"}`} 
          onClick={() => onEmailClick(email)}>
          <div className="email-header">
            <span className="email-initial">{email.sender[0]}</span>
            <div className="email-info">
              <p><strong>From:</strong> {email.sender}</p>
              <p><strong>Subject:</strong> {email.subject}</p>
              <p>{email.date}</p>
            </div>
          </div>
          <span className={email.favorite ? "favorite" : ""}>Favorite</span>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
