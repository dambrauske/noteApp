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
    notes: Note[],
    notesView: boolean,
    foldersView: boolean,
}

export interface registerForm {
    name: string,
    email: string,
    password: string,
    password2: string,
}