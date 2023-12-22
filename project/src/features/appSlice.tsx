import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppInitialState, Note, User } from "../interfaces";

const notes: Note[] = JSON.parse(localStorage.getItem("notes") ?? "[]");
const token: string | undefined = localStorage.getItem("token") ?? undefined;

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: undefined,
    token,
    notes,
    notesView: true,
    foldersView: false,
  } as AppInitialState,
  reducers: {
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setViewToFolders: (state) => {
      state.notesView = false;
      state.foldersView = true;
    },
    setViewToNotes: (state) => {
      state.notesView = true;
      state.foldersView = false;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      localStorage.setItem("token", state.token);
    }
  },
});

export const { setNotes, setViewToFolders, setViewToNotes, addUser, setToken } =
  appSlice.actions;

export default appSlice.reducer;
