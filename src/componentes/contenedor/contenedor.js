import React,{useState,useEffect} from "react";
import Articulos from "./articulos";
import {datosArticulos} from "./info_articulos"

export default function Contenedor() {
    

    //console.log(datosArticulos)
    const[post,setpost]=useState([]);
    const obtenerDatos = async()=>{
        let url='https://newsapi.org/v2/top-headlines?country=co&apiKey=1caf2ed5b268465ba31e151ef094584f'
        const respuesta = await fetch(url);
        const datos =await respuesta.json();
        console.log(datos.articles);
        setpost(datos.articles);
        return datos.articles;
    }
    useEffect(()=>{
        obtenerDatos();
    },[])
    
    return(
        <div className="w3-row-padding">
            {
                post.map((art, index)=>{
                    return <Articulos 
                    key={index} 
                    titulo={art.tittle}
                    fecha={art.publishedAt}
                    descripcion={art.description}
                    imagen={art.urlToImage}
                    />
                })
            }
            <div className="paginacion">
                <button className="atras">cargar menos</button>
                <span> 1 </span>
                <button className="adelante">cargar mas</button>
            </div>
        </div>
    );
}