import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./gameSlice";

export const store = configureStore({
    reducer: {
        game: gameReducer
    }
});

// типизация хранимого в store
export type RootState = ReturnType<typeof store.getState>;

// типизация метода, который меняет значение store
export type AppDispatch = typeof store.dispatch;