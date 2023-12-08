export interface Note { 
    id: number,
    title: string,
    text: string,
    color: string,
    date: Date,
}

export interface AppInitialState {
    notes: Note[],
    notesView: boolean,
    foldersView: boolean,
}