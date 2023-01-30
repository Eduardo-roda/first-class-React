//desde react router (npm install react-router-dom)
//de las cuales inicializamos con 3 elementos
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/pokemon";
import FormUser from "../FormUser";
import Header from "../components/Header";
import Flags from "../pages/Flags";
import Detail from "../pages/Detail";
import SearchImage from "../pages/Pixabait"
import PrincipalImg  from "../pages/Pixabait"


const Router =()=>{
    return(
        <BrowserRouter>
        {/*rutas publicas*/}
            <Header />
            <Routes>
                <Route path="/"                     element={<Home />}/>
                <Route path="formulario"            element={<FormUser />}/>
                <Route path="flags"                 element={<Flags />}/>
                <Route path="/flags/detail/:name"   element={<Detail />} />
                <Route path="/pixabait"             element={<SearchImage />} />
                <Route path="/principalImg"         element={<PrincipalImg  />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;