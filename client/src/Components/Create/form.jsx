import React from "react";
import { Link } from "react-router-dom";
import './newActivity.css'

//importar todas las acciones y funciones de estado

export default function Form () {
    return (
        <div>

            
           
            <div >
            <form  className="boxForm">
               
               <div className="nombreForm">
                  <input type= "text" name="Nombre" placeholder="Nombre"/>
               </div>

               <div className="estacionesForm">
                   <input type="checkbox" name ='Verano'/>
                   <input type="checkbox" name="Otoño"/>
                   <input type="checkbox" name= "Invierno"/>
                   <input type="checkbox" name="Primavera"/>
               </div>
               
               <div className="dificultadForm">
                   <input type="checkbox" name="1"/>
                   <input type="checkbox" name= "2"/>
                   <input type="checkbox"name= "3"/>
                   <input type="checkbox" name="4"/>
                   <input type="checkbox" name="5"/>
               </div>
               
               <div className="duracionForm">
                  <input type= "text" name='Duracion' placeholder="Duración de la actividad"/>
               </div>

               <div>
                   <select>Selecionar paises</select>
               </div>
               
               <button>Crear</button>
            
            </form>
            <div >
                <Link to='/home' id='click'>
                   <button className="botonHomeD"></button>
                </Link>
            </div>

            </div>
           
        </div>
    )
}