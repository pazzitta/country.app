import React, {useState} from "react";
import { Link } from "react-router-dom";
import './newActivity.css';
import { useHistory } from "react-router-dom";

//importar todas las acciones (get/activity and allConutries) y funciones de estado

export function validate (input) {
    let errors = {};
}


export default function Form () {

const [errors, setErrors] = useState ({})

const [input, setInput] = useState({
    name: '',
    duration: '',
    countries: [],
    
    // faltan difficulty, season


})

    
    return (
        <div>    
           
            <div >
            <form  className="boxForm">
               
               <div>
                  <input autoComplete="off" className="nombreForm" type= "text" name="name" placeholder="Nombre"/>
               </div>
               {/* para desavilitar y habilitar estos hay que usas estados */}
               {/* ¿cómo hago que estos (radio y checkbox) esten dentro de un "name" en el input y demás? ya que son solo elementos de lectura? */}
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
                  <input className="duracionForm" autoComplete="off" type= "text" name='duration' placeholder="Duración de la actividad"/>
               </div>

               <div>
                   <select className="selectForm">
                      <option disabled selected>Selecionar paises</option>
                   </select>
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