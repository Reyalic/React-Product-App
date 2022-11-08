import {configureStore} from "@reduxjs/toolkit"

import nameCustomer from './slices/nameCustomer.slice'

export default configureStore({
  reducer: {
    nameCustomer
  }
})