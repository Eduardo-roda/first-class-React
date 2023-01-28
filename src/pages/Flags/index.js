import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CircularProgress } from '@mui/material';
//funcion que consume el servicio
import { getDataFromPokemon } from '../../services';

const Flags = () => {

    const [countries,setCountries] = useState([]);
    const [region,setRegion] = useState("");

    const fetchCountries = async()=>{
        const response = await getDataFromPokemon("https://restcountries.com/v3.1/all");
        //const data = await response.json()
        setCountries(response)
        //console.log(data)
    };

    const handleRegion = async (e)=>{
        setRegion(e.target.value)
        //vamos a evaluar si el valor es igual a all entonces ejecutas la funcion fetchCountries
        if(e.target.value === "all"){
            fetchCountries();
            return;
        }
    //primero dbemos limpiar para poder llenarlo con la nueva información
    setCountries([]);
    
    const response = await getDataFromPokemon(
        `https://restcountries.com/v3.1/region/${e.target.value}`
        );
        setCountries(response)
    };

    //vamos a crear una funcion la cual se encargue de buscar paises ...
    const handleSearchCountry =(e)=>{
        const countryName = e.target.value

        if(countryName.length === 0){
            fetchCountries();
        }
        if(countryName.length > 3){
            //acá debemos iniciar la busqueda
            //para poder hacer la busqueda debo transformar todo a texto UPPERCASE o LOWERCASE
            const filterCountries = countries.filter((country)=>
            country.name.official.toUpperCase().includes(countryName.toUpperCase())
            );
            setCountries(filterCountries);
        }
    }
    
    useEffect(()=>{
        fetchCountries()
    },[])



    return (
    <Container>
      <Grid container spacing={3} mt={5} >
        <Grid item md={6}>
            <TextField 
            onChange={handleSearchCountry}
            label="Search for a Country" fullWidth/>
        </Grid>
        <Grid item md={6} >
            <FormControl fullWidth>
                <InputLabel>Filter by Region</InputLabel>
                <Select label="filter by region" onChange={handleRegion} value={region} >
                    <MenuItem value="all" >Todas las Regiones</MenuItem>
                    <MenuItem value="Americas" >America</MenuItem>
                    <MenuItem value="Europe" >Europa</MenuItem>
                    <MenuItem value="Africa" >Africa</MenuItem>
                    <MenuItem value="Asia" >Asia</MenuItem>
                    <MenuItem value="Oceania" >Oceania</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        {countries.length > 0 ? (
            countries.map((country)=>(
                <Grid item md={3} xs={12} >
                    <Link to={`/flags/detail/${country.name.common}`} >
                    <Card>
                        <CardMedia 
                        component="img"
                        height={200}
                        image={country.flags.svg} />
                        <CardContent>
                            <h4>{country.name.common}</h4>
                            <p>Population: {country.population} </p>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
            ))
        ):(
            <div>
                <CircularProgress/>
                <h4>Cargando...</h4>
            </div>
        )}
      </Grid>
    </Container>
  );
};

export default Flags;
