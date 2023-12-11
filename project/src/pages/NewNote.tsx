import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Note } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { addNote } from "../features/appSlice";

const NewNote = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const [bgColor, setBgColor] = useState("bg-blue-100")
  const bgColors = [
    "bg-blue-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-violet-100",
    "bg-green-100",
  ]
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  const titleRef = useRef<HTMLInputElement>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)

  const generateId = () => {
    return Math.floor(Math.random() * Date.now())
  }

  const formatDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}-${month}-${day}`
  }

  const saveNote = () => {
    const title = titleRef?.current?.value ?? ""
    const text = textRef?.current?.value ?? ""

    if (title === "" && text === "") return setErrorMessage("Please insert a title or a note")

    const newNote: Note = {
      id: generateId(),
      title,
      text,
      color: bgColor,
      date: formatDate(),
    }

    dispatch(addNote(newNote))
    navigate('/')
  }

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/")}
        className="flex gap-2 items-center justify-center mb-8">
        <i className="fas fa-chevron-left"></i>
        Notes
      </button>
      <div className=" flex flex-col items-center">
         <div className={`rounded-lg border p-2 ${bgColor} md:w-1/3`}>
          
        <ul className="flex gap-2 justify-end">
          {bgColors.map((color, i) => (
            <li
            key={i}
            onClick={() => setBgColor(color)}
            className={`w-6 h-6 rounded-full ${color} border border-slate-300 cursor-pointer`}
          ></li>
          ))}
        </ul>

        <form className=" flex flex-col gap-4">
          <input
            type="text"
            ref={titleRef}
            placeholder="Title"
            className={`text-lg font-bold outline-none ${bgColor}`}
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Your note..."
            ref={textRef}
            className={`outline-none ${bgColor}`}
          ></textarea>
          <button 
          onClick={saveNote}
          className="bg-blue-200 px-4 py-1 rounded-xl  self-end">
            Save
          </button>
        </form>
        {errorMessage && 
        <div>{errorMessage}</div>
        }
      </div>
      </div>

     
    </div>
  );
};

export default NewNote;
