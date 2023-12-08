import { useNavigate } from "react-router-dom";

const CreateNewNote = () => {
const navigate = useNavigate()

    return (
        <div 
        onClick={() => navigate('/newNote')}
        className="absolute border rounded-2xl p-5 bg-blue-100 right-10 bottom-10">
           <i className="fas fa-plus"></i>
        </div>
    );
};

export default CreateNewNote;
