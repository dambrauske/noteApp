import SingleNote from "../components/SingleNote";
import { useAppSelector } from "../hooks";

const Notes = () => {
  const notes = useAppSelector((state) => state.app.notes);

  return (
    <div className="grid md:grid-cols-3 gap-4">
    {notes && notes.map((note, i) => <SingleNote key={i} note={note} />)}
    
    </div>
  );
};

export default Notes;
