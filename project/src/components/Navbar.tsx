import { setViewToFolders, setViewToNotes } from "../features/appSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const notesView = useAppSelector(state => state.app.notesView)
  const foldersView = useAppSelector(state => state.app.foldersView)

  const showNotes = () => {
    dispatch(setViewToNotes());
  };

  const showFolders = () => {
    dispatch(setViewToFolders());
  };

  return (
    <nav>
      <ul className="flex justify-around p-4">
        <li className={`cursor-pointer rounded-xl px-4 font-bold  ${notesView ? 'bg-indigo-200' : null }`} onClick={showNotes}>Notes</li>
        <li className={`cursor-pointer rounded-xl px-4 font-bold  ${foldersView ? 'bg-indigo-200' : null }`} onClick={showFolders}>Folders</li>
      </ul>
    </nav>
  );
};

export default Navbar;
