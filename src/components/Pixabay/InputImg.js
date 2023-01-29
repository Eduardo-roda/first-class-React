import React from 'react'
import { useState } from 'react';
import PintadoImg from './PintadoImg';

const InputImg = () => {

    const [valorInput,setValorInput]=useState("");
    const captura =(e)=>{
        e.preventDefault()
        let input = document.querySelector("input")
        setValorInput(input.value)
    }

  return (
    <div>
      <form action="" >
        <input type="text"/>
        <button onClick={captura} >Buscar</button>
      </form>
      <PintadoImg valor={valorInput}/>
    </div>
  )
}

export default InputImg;
