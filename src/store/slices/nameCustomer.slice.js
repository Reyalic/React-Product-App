import { createSlice } from "@reduxjs/toolkit";

export const nameCustomerSlice = createSlice({
  name: "nameCustomer",
  initialState: '',
  reducers: {
    setNameCustomer: (state, action) => action.payload
  }
})

export const {setNameCustomer} = nameCustomerSlice.actions

export default nameCustomerSlice.reducer