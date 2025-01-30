import { createReducer } from "@reduxjs/toolkit"
import { clearSendMail, setSendMail } from "../action/mailAction"

const initialState = {
    loading: false,
    succes: false,
    error: false
}

const sendMailReducer =  createReducer(initialState, (builder)=>{
    builder.addCase(setSendMail.pending, (state)=>{
        console.log("cargando");
        
        state.succes = false
        state.loading = true
        state.error = false
    })
    .addCase(setSendMail.fulfilled, (state)=>{
        console.log("se envio");
        
        state.succes = true
        state.loading = false
        state.error = false
    })
    .addCase(setSendMail.rejected, (state)=>{
        console.log("entro al reject");
        
        state.succes = false
        state.loading = false
        state.error = true
    })
    .addCase(clearSendMail, (state)=>{
        state.succes = false
        state.loading = false
        state.error = false
    })
})
export {sendMailReducer}