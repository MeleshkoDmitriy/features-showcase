import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./slices/api/formSlice";



export const store = configureStore({
  reducer: {
    // categories: categoriesSlice,
    // products: productsSlice,
    // user: userSlice,
    [formSlice.reducerPath]: formSlice.reducer,
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;