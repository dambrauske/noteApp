const NewNote = () => {
  return (
    <div className="p-4">
      <button className="flex gap-2 items-center mb-8">
        <i className="fas fa-chevron-left"></i>
        Notes
      </button>
      <div className="rounded-lg border p-2">
        <ul className="flex gap-2 justify-end">
          <li className="w-6 h-6 rounded-full bg-blue-200"></li>
          <li className="w-6 h-6 rounded-full bg-pink-200"></li>
          <li className="w-6 h-6 rounded-full bg-yellow-200"></li>
          <li className="w-6 h-6 rounded-full bg-violet-200"></li>
          <li className="w-6 h-6 rounded-full bg-green-200"></li>
        </ul>
        <form className=" flex flex-col gap-4">
          <input type="text" placeholder="Title" className="text-lg font-bold" />
          <textarea
            cols={30}
            rows={10}
            placeholder="Your note..."
          ></textarea>
          <button className="bg-blue-200 px-4 py-1 rounded-xl  self-end">Save</button>
        </form>
      </div>
    </div>
  );
};

export default NewNote;
