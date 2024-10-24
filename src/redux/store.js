import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../redux/emailSlice';


const store = configureStore({
  reducer: {
    emails: emailReducer,
  },
});

export default store;
