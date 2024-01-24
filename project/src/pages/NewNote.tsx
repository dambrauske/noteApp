import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Note, NoteForm } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { setNotes, setToken } from "../features/appSlice";
import { useForm, SubmitHandler } from "react-hook-form";

const NewNote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteForm>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [bgColor, setBgColor] = useState("bg-blue-100");
  const bgColors = [
    "bg-blue-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-violet-100",
    "bg-green-100",
  ];
  const token = localStorage.getItem("token");

  const handleColorChange = (color: string) => {
    setBgColor(color);
  };

  const optionsHelper = (options: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers?: { "content-type"?: string; Authorization?: string };
    body: any;
  }) => {
    const token = localStorage.getItem("token");

    if (!options.headers) {
      options.headers = {};
    }

    options.headers["content-type"] = "application/json";
    options.headers["Authorization"] = token ?? "NO_TOKEN";

    console.warn("opts", options);

    return options;
  };

  const onSubmit: SubmitHandler<NoteForm> = async (data) => {
    const title = data.title;
    const text = data.text;
    const color = bgColor;

    const options = optionsHelper({
      method: "POST",
      body: JSON.stringify({ token, title, text, color }),
    });

    try {
      const response = await fetch("http://localhost:8000/addNote", options);
      const data = await response.json();
      if (data.error === false) {
        console.log(data);
        console.log("token", data.data.token);
        dispatch(setNotes(data.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/")}
        className="flex gap-2 items-center justify-center mb-8"
      >
        <i className="fas fa-chevron-left"></i>
        Notes
      </button>
      <div className=" flex flex-col items-center">
        <div className={`rounded-lg border p-2 ${bgColor} md:w-1/3`}>
          <div {...register("color")} className="flex gap-2 justify-end">
            {bgColors.map((color, i) => (
              <div
                key={i}
                onClick={() => handleColorChange(color)}
                className={`w-6 h-6 rounded-full ${color} border border-slate-300 cursor-pointer`}
              ></div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-4"
          >
            <input
              type="text"
              {...register("title", {
                maxLength: 100,
              })}
              max={100}
              placeholder="Title"
              className={`text-lg font-bold outline-none ${bgColor}`}
            />
            <textarea
              cols={30}
              rows={10}
              {...register("text", {
                validate: (value) => {
                  if (!value) {
                    return "Please enter your note";
                  }
                },
              })}
              placeholder="Your note..."
              className={`outline-none ${bgColor}`}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-200 px-4 py-1 rounded-xl  self-end"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
