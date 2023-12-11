import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppInitialState, Note } from "../interfaces";

const notes: Note[] = JSON.parse(localStorage.getItem("notes") ?? '[]')

const appSlice = createSlice({
  name: "app",
  initialState: {
    notes,
    notesView: true,
    foldersView: false,
  } as AppInitialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes))
    },
    setViewToFolders: (state) => {
      state.notesView = false
      state.foldersView = true
    },
    setViewToNotes: (state) => {
      state.notesView = true
      state.foldersView = false
    },
  },
});

export const { addNote, setViewToFolders, setViewToNotes } = appSlice.actions;

export default appSlice.reducer;
