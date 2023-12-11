export interface Note { 
    id: number,
    title: string,
    text: string,
    color: string,
    date: string,
}

export interface AppInitialState {
    notes: Note[],
    notesView: boolean,
    foldersView: boolean,
}