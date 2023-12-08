import CreateNewNote from "../components/CreateNewNote";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../hooks";
import Folders from "./Folders";
import Notes from "./Notes";

const Home = () => {

    const foldersView = useAppSelector(state => state.app.foldersView)

    return (
        <div className="p-4 relative min-h-screen">
            <Header/>
            <Navbar/>

            {
               foldersView ? <Folders/> : <Notes/>
            }
            <CreateNewNote/>
        </div>
    );
};

export default Home;
