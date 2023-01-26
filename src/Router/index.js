import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/pokemon";
import FormUser from "../FormUser";

const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="formulario" element={<FormUser />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;