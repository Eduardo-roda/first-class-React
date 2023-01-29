import React from 'react';
import { useState,useEffect } from 'react';
import { getDataFromPokemon } from '../../services';

const SearchImage = () => {

    const [all, setAll] = useState([]);
    const [image,setImage] = useState({});

    const fetchImage = async() => {
        const response = await getDataFromPokemon(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=all&per_page=50`);
        setAll(response.hits);
        console.log(response);
    }

    const handleInput = (e)=>{
        const image = e.target.value;
        if(image.length > 3 ){
            console.log(e.target.value)
            handleSearchPixelbay(e.target.value);
        }
    }

    const handleSearchPixelbay = async(valor) => {
        const response = await getDataFromPokemon(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=${valor}&per_page=50`);
        setAll(response.hits);
        console.log(response);
    }

    useEffect(()=>{
        fetchImage()
    },[])

  return (
    <div className="images mt-5">
        <div className="contenedor">
            <input type="text" onChange={handleInput} placeholder="Search for image in Pixelbay" className="form-control mb-5" />
            <div className="presentacion">
                {
                    all.length > 0 && all.map((a)=> (
                        <div>
                            <img src={a.previewURL} alt="" className='' />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SearchImage;
