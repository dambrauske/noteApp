import { Note } from "../interfaces";

interface Props {
  note: Note;
}
const SingleNote = ({ note }: Props) => {
  const formateTime = (date: string) => {
    const mongoDate = new Date(date);
    const year = mongoDate.getUTCFullYear();
    const month = String(mongoDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(mongoDate.getUTCDate()).padStart(2, "0");
    const hour = String(mongoDate.getUTCHours()).padStart(2, "0");
    const minute = String(mongoDate.getUTCMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  return (
    <div className={`rounded-lg border ${note.color} p-2 h-max`}>
      <p className="text-xs text-right text-slate-600">
        {formateTime(note.createdAt)}
      </p>
      <h1 className="text-lg font-bold tracking-wider py-1">{note.title}</h1>
      <p>{note.text}</p>
    </div>
  );
};

export default SingleNote;
