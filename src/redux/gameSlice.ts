import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { calculateWinner, type ISquare } from "../utils/constants";

interface IGameState {
    squares: ISquare[],
    xIsNext: boolean,
    score: {
        x: number,
        0: number,
    }
}

const initialState: IGameState = {
    squares: Array(9).fill(''),
    xIsNext: true,
    score: {
        x: 0,
        0: 0
    }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        move(state, action: PayloadAction<number>) {
            if (calculateWinner(state.squares)) return;

            if (!state.squares[action.payload]) {
                state.squares[action.payload] = state.xIsNext ? 'x' : '0';
               
            if (calculateWinner(state.squares) === 'Победитель x') {
                state.score.x++;
            }

            if (calculateWinner(state.squares) === 'Победитель 0') {
                state.score[0]++;
            }
                state.xIsNext = !state.xIsNext;

            }
        },
        restart(state) {
            state.xIsNext = true;
            state.squares = Array(9).fill('')
        }
    }
});

export const { move, restart } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;