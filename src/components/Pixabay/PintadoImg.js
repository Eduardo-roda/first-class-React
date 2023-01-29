import React from 'react'
import { useState,useEffect } from 'react'
import { getApi } from '../../helpers/ConsumoApi'
import ImgItems from './ImgItems'

const PintadoImg = ({valor}) => {

    const[infoApi,setInfoApi]=useState([])

    useEffect(()=>{
        getApi(valor).then((newImages)=>setInfoApi(newImages.hits));
    },[valor])

  return (
    <div>
        {
            infoApi.map((img)=>{
                return <ImgItems key={img.id} {...img} />
            })
        }
    </div>
  )
}

export default PintadoImg
