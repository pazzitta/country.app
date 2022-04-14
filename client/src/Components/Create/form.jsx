import React from "react";
import { Link } from "react-router-dom";
import './newActivity.css'

//importar todas las acciones y funciones de estado

export default function Form () {
    return (
        <div>

            
           
            <div >
            <form  className="boxForm">
               
               <div>
                  <input autoComplete="off" className="nombreForm" type= "text" name="Nombre" placeholder="Nombre"/>
               </div>
               {/* para desavilitar y habilitar estos hay que usas estados */}
               <div className="estacionesForm">
                   <input className="estVer" type="radio" name ='Verano'/>
                   <input className="estOto" type="radio" name="Otoño"/>
                   <input className="estInv" type="radio" name= "Invierno"/>
                   <input className="estPrim" type="radio" name="Primavera"/>
               </div>
               
               
               <div className="dificultadForm">
                   <input className="dif1Form" type="checkbox" name="1"/>
                   <input className="dif2Form" type="checkbox" name= "2"/>
                   <input className="dif3Form" type="checkbox"name= "3"/>
                   <input className="dif4Form" type="checkbox" name="4"/>
                   <input className="dif5Form" type="checkbox" name="5"/>
               </div>
               
               <div >
                  <input className="duracionForm" autoComplete="off" type= "text" name='Duracion' placeholder="Duración de la actividad"/>
               </div>

               <div>
                   <select className="selectForm">Selecionar paises</select>
               </div>
               
               <button type='submit' className="botonCreateD"></button>
            
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