import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <header>
                <NavBar />
                <Outlet />
            </header>
        </div>
    );
}

export default App;