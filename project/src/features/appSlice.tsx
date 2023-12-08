import { createSlice } from "@reduxjs/toolkit";
import { AppInitialState } from "../interfaces";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        notes: []
    } as AppInitialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        }
    }
})

export const { addNote } = appSlice.actions

export default appSlice.reducer