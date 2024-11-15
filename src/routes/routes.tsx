import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
        </Routes>
    )
}

export default AppRoutes;