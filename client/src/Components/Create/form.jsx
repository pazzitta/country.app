import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './newActivity.css';
import { useHistory} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"
import {getAllCountry, postActivity} from '../../Redux/actions'

//importar todas las acciones (get/activity and allConutries) y funciones de estado

export function validate (input) {
    let errors = {};
}


export default function Form () {

const dispatch = useDispatch();
const allConutriesSel = useSelector (state => state.countries)
const [errors, setErrors] = useState ({})

const [input, setInput] = useState({
    name: '',
    duration: 0,
    difficulty: 0,
    season: '',
    countries: [],    
})

function handleChange(e) {
    e.preventDefault()
    setInput ({
       ...input,
      [e.target.name]: e.target.value
    } )
}

function handleSelectCoun(e) {
    e.preventDefault();
    setInput({
            ...input,
            countries:[...input.countries, e.target.value]
        })       
}

function handleSubmit (e) {
    e.preventDefault();
    dispatch (postActivity(input))
}

useEffect(() => {
    dispatch(getAllCountry())
 },[dispatch])
    
    return (
        <div>    
           
            <div >
            <form onSubmit={handleSubmit} className="boxForm">
               
               <div>
                  <input onChange= {handleChange} autoComplete="off" className="nombreForm" type= "text" name="name" placeholder="Nombre" value={input.name} />
               </div>
               {/* para desavilitar y habilitar estos hay que usas estados */}
               {/* ¿cómo hago que estos (radio y checkbox) esten dentro de un "name" en el input y demás? ya que son solo elementos de lectura? */}
               <div className="estacionesForm">
                   <input onClick={handleChange}  className="estVer" type="radio" name= "season" value ='Verano'/>
                   <input onClick={handleChange}  className="estOto" type="radio" name= "season" value="Otoño"/>
                   <input onClick={handleChange}  className="estInv" type="radio" name= "season" value= "Invierno"/>
                   <input onClick={handleChange}  className="estPrim" type="radio" name= "season" value="Primavera"/>
               </div>
               
               
               <div className="dificultadForm">
                   <input onClick={handleChange} className="dif1Form" type="checkbox" name="difficulty" value="1"/>
                   <input onClick={handleChange}  className="dif2Form" type="checkbox" name= "difficulty" value="2"/>
                   <input onClick={handleChange}  className="dif3Form" type="checkbox"name= "difficulty" value="3"/>
                   <input onClick={handleChange}  className="dif4Form" type="checkbox" name="ddifficulty" value= "4"/>
                   <input onClick={handleChange}  className="dif5Form" type="checkbox" name="difficulty" value= "5"/>
               </div>
               
               <div >
                  <input  onChange={handleChange} className="duracionForm" autoComplete="off" type= "text" name='duration' value= {input.duration} placeholder="Duración de la actividad"/>
               </div>

               <div>
                   <select onChange= {handleSelectCoun} className="selectForm">
                      <option value= "" disabled selected>Selecionar paises</option>
                      {allConutriesSel && allConutriesSel.map((c) => (
                          <option key= {c.id} value= {c.name} >{c.name}</option>
                      )
                        ) }
                   </select>
               </div>
               
               <button type='submit' className="botonCreateD"></button>
            
            </form>
            
            <div >
                <Link to='/home' id='click'>
                   <button type="submit" className="botonHomeD"></button>
                </Link>
            </div>

            </div>
           
        </div>
    )
}