export interface Note { 
    user: User,
    _id: string,
    title: string,
    text: string,
    color: string,
    createdAt: string,
}

export interface User {
    _id: string,
    name: string,
}

export interface AppInitialState {
    user: User | undefined,
    token: string | undefined,
    notes: Note[],
    notesView: boolean,
    foldersView: boolean,
}

export interface RegisterForm {
    name: string,
    email: string,
    password: string,
    password2: string,
}

export interface NoteForm {
    title: string,
    text: string,
    color: string,
  }