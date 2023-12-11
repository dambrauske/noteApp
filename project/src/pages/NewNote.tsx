import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewNote = () => {
  const navigate = useNavigate();

  const [bgColor, setBgColor] = useState("bg-blue-100")
  const bgColors = [
    "bg-blue-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-violet-100",
    "bg-green-100",
  ]

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/")}
        className="flex gap-2 items-center mb-8"
      >
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
            placeholder="Title"
            className={`text-lg font-bold outline-none ${bgColor}`}
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Your note..."
            className={`outline-none ${bgColor}`}
          ></textarea>
          <button className="bg-blue-200 px-4 py-1 rounded-xl  self-end">
            Save
          </button>
        </form>
      </div>
      </div>

     
    </div>
  );
};

export default NewNote;
