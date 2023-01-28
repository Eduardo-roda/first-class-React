import { useParams, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getDataFromPokemon } from '../../services';
import React from 'react';
import { 
    Container,
    Grid,
    Button,
    Chip} from '@mui/material';

const Detail = () => {
//1° crear el Hooks de parametro 
const {name}=useParams();
const history = useNavigate()

const[country,setCountry] = useState([]);

const fetchCountry = async ()=>{
    const response = await getDataFromPokemon(`https://restcountries.com/v3.1/name/${name}`)
    setCountry(response[0])
};

useEffect(()=>{
    fetchCountry()
},[])

  return (
    <Container>
        <Button variant='outlined' onClick={()=>history(-1)}>
            Back
        </Button>
        {Object.keys(country).length > 0 && (
            <Grid container
            alignItems="center"
            spacing={3}
            sx={{height : "100vh"}} >
                <Grid item md={6} >
                    <img src={country.flags.svg} width={400} alt="banderas" />
                </Grid>
                <Grid item md={6} >
                    <Grid item md={6} >
                        <h4>{country.name.official} </h4>
                    </Grid>
                    <Grid container item spacing={1} mt={3} >
                        <Grid item md={6}>
                            <p>
                                <b>Native Name: </b>{country.name.common} 
                            </p>
                            <p>
                                <b>Population: </b>{country.population} 
                            </p>
                            <p>
                                <b>Region: </b>{country.region} 
                            </p>
                            <p>
                                <b>Sub Region: </b>{country.subregion} 
                            </p>
                            <p>
                                <b>Capital: </b>{country.capital} 
                            </p>
                        </Grid>
                        <Grid item md={6}>
                            <p>
                                <b>Top Level Domain: </b> {country.tld} 
                            </p>
                            <p>
                                <b>Currencies: </b> {""}
                                {Object.keys(country.currencies).map((currency)=>(
                                    <span>{currency}, </span>
                                ))}
                            </p>
                            <p>
                                <b>Languages: </b>
                                {Object.keys(country.languages).map((lang)=>(
                                    <span>{lang} </span>
                                ))}
                            </p>
                            
                        </Grid>
                    </Grid>

                    <Grid item md={6} >
                        <p>
                            <b>Border Countries: </b> 
                                
                        </p>
                        
                    </Grid>
                    
                </Grid>
            </Grid>
        )}
    </Container>
  )
}

export default Detail;
