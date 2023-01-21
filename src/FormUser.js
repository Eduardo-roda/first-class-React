import { useState } from "react";
import { Button, TextField } from "@mui/material";
//manipula el estado de la variable

const FormUser = ()=>{

    const [valorDeinputs,setValorInputs] = useState({
        nombre : "",
        apellido : "",
        correo : "",
        password : ""
    });

    const handleInputValue = (e) =>{
        //debemos extraer 2 cosas del event 
        //1 el name de cada input 
        //2 el value de cada input 
        //name = e.target.value

        const {name,value} = e.target;

        setValorInputs({
            ...valorDeinputs,
            [name]:value,
        })
    }




    return (
        <div>
            <form>
                <h4>Formulario de Usuario</h4>
                <h5>Nombre : {valorDeinputs.nombre}</h5>
                <h5>Apellido : {valorDeinputs.apellido}</h5>
                <h5>Correo : {valorDeinputs.correo}</h5>
                <h5>Password : {valorDeinputs.password}</h5>
                <p>
                    <TextField
                    error={false}
                        onChange={handleInputValue}
                        type = "text"
                        name = "nombre"
                        variant = "outlined"
                        label = "ingrese su nombre" />
                </p>
                <p>
                    <TextField
                        onChange={handleInputValue}
                        type = "text"
                        name = "apellido"
                        variant = "outlined"
                        label = "ingrese su apellido"/>
                </p>
                <p>
                    <TextField
                        onChange={handleInputValue}
                        type = "text"
                        name = "correo"
                        variant = "outlined"
                        label = "ingrese su correo" />
                </p>
                <p>
                    <TextField
                        onChange={handleInputValue}
                        type = "password"
                        name = "password"
                        variant = "outlined"
                        label = "ingrese su password" />
                </p>
                <p>
                    <Button variant="contained"type="submit">
                        Registrar
                    </Button>
                </p>
            </form>
        </div>
    )
}


export default FormUser