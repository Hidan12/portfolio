import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setSendMail = createAsyncThunk("SEND_MAIL", async ({email, subject, message})=>{
    try {
        const response = await axios.post(
          "https://mytinerary-back-martinvidan.onrender.com/api/portfolio/sendMail",
          {
            email: email,
            subject: subject,
            message: message,
          }
        )
        return response.data
      } catch (error) {
        return error
      }
})
export const clearSendMail = createAction("CLEAR_SEND_MAIL")
