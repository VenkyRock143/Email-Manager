import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/emailSlice";

const EmailDetail = ({ email }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(email.id));
  };

  return (
    <div className="email-detail">
      <div className="email-detail-header">
        <span className="email-initial">{email.sender[0]}</span>
        <div>
          <h2>{email.subject}</h2>
          <p>{email.date}</p>
        </div>
        <button 
          className={email.favorite ? "unmark-favorite" : "mark-favorite"} 
          onClick={handleFavoriteToggle}>
          {email.favorite ? "Unmark as Favorite" : "Mark as Favorite"}
        </button>
      </div>
      <div className="email-body">
        <p>{email.body}</p>
      </div>
    </div>
  );
};

export default EmailDetail;
