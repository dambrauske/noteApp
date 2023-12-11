import { Note } from "../interfaces";

interface Props {
    note: Note
}
const SingleNote = ({note}: Props) => {
    return (
        <div className={`rounded-lg border ${note.color} p-2 h-max`}>
            <p className="text-xs text-right text-slate-600">{note.date}</p>
            <h1 className="text-lg font-bold tracking-wider py-1">{note.title}</h1>
            <p>{note.text}</p>
        </div>
    );
};

export default SingleNote;
