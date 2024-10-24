import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, sender: 'info@acme.com', subject: 'Meeting Reminder', date: '24/10/2024 09:00am', body: 'Don’t forget about our meeting at 10 AM tomorrow.', read: false, favorite: false },
  { id: 2, sender: 'updates@news.com', subject: 'Daily News Digest', date: '24/10/2024 08:45am', body: 'Here are the top news stories for today.', read: false, favorite: true },
  { id: 3, sender: 'support@service.com', subject: 'Password Reset Request', date: '24/10/2024 07:30am', body: 'Click here to reset your password.', read: true, favorite: false },
  { id: 4, sender: 'newsletter@fashion.com', subject: 'Exclusive Discounts Just for You!', date: '23/10/2024 05:00pm', body: 'Don’t miss out on our latest offers.', read: false, favorite: true },
  { id: 5, sender: 'alerts@bank.com', subject: 'Transaction Alert', date: '23/10/2024 03:15pm', body: 'A transaction of $200 was made from your account.', read: true, favorite: false },
  { id: 6, sender: 'noreply@socialmedia.com', subject: 'New Comment on Your Post', date: '23/10/2024 12:00pm', body: 'Someone commented on your recent post. Check it out!', read: false, favorite: false },
];
const emailSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const email = state.find(email => email.id === action.payload);
      if (email) {
        email.favorite = !email.favorite;
      }
    },
    markAsRead: (state, action) => {
      const email = state.find(email => email.id === action.payload);
      if (email && !email.read) {
        email.read = true; // Set as read when opened
      }
    },
  },
});

export const { toggleFavorite, markAsRead } = emailSlice.actions;
export default emailSlice.reducer;
