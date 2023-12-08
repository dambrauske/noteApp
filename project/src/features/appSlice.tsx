import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppInitialState, Note } from "../interfaces";

const appSlice = createSlice({
  name: "app",
  initialState: {
    notes: [],
    notesView: true,
    foldersView: false,
  } as AppInitialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    changeViewToFolders: (state) => {
      state.notesView = false
      state.foldersView = true
    },
    changeViewToNotes: (state) => {
      state.notesView = true
      state.foldersView = false
    },
  },
});

export const { addNote, changeViewToFolders, changeViewToNotes } = appSlice.actions;

export default appSlice.reducer;
