import { configureStore } from '@reduxjs/toolkit'
import profileSlice from '../routes/Profile/profileSlice'
import TicketsSlice from '../routes/Tickets/TicketsSlice' 
export default configureStore({
    reducer: {
        profile: profileSlice,
        tikets: TicketsSlice
    }
})