import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './newActivity.css';
import { useDispatch, useSelector} from "react-redux"
import {getAllCountry, postActivity} from '../../Redux/actions'

export function validate (input) {
    let errors = {};
//Nombre   
    if (!input.name) {
       errors.name = "Campo requerido"
    }else if (!/^[A-ZA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(input.name)) {
       errors.name= "Ingrese solo letras y más de una,la primera debe ser mayúscula"
    }
 //duration
    if (!input.duration) {
       errors.duration = "Campo requerido"
    }else if (!/^[0-9]\d*(\.\d+)?$/.test(input.duration)) {
       errors.duration = "Solo numeros enteros"
    }else if (input.duration < 1) {
       errors.duration = "Estamos perzosos hoy?, debe ser mayor a 0"
    }else if (input.duration > 240) {
       errors.duration = "Woo sí que tenés energía, no puedes superar los 240 (4h)"
    };
 
 //difficulty 
    if (!input.difficulty) {
       errors.difficulty= "Campo requerido, debe selecionar uno únicamente"};
 
   if (!input.season) {
       errors.season = "Campo requerido, seleccione una estación"
    };
 
   if (!input.countries.length) errors.countries = "Debe seleccionar al menos un país"
 
    return errors
 }


export default function Form () {

const dispatch = useDispatch();
const allConutriesSel = useSelector (state => state.countries)
allConutriesSel.sort((a, b) => a.name.localeCompare(b.name))

const [errors, setErrors] = useState ({})

const [input, setInput] = useState({
    name: '',
    duration: '',
    difficulty: '',
    season: '',
    countries: [],   
       
})

function handleChange(e) {
    //e.preventDefault() porque en los change si prevengoeldefalut no no0 marca los radio
    setInput ((prevInput) => {
        const newInput = {
            ...prevInput,
            [e.target.name]: e.target.value
        }
      const validations = validate(newInput);
      setErrors(validations)
      return newInput
});

};

function handleSelectCoun(e) {
    setInput((prevIputsel) => {
        const newInputSelect = {
            ...prevIputsel,
            countries: [...prevIputsel.countries, e.target.value]
        }
        const validations = validate(newInputSelect);
        setErrors(validations)
        console.log(newInputSelect)
        return newInputSelect
  });
  
  };

function handleSubmit (e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
        alert ('Complete toda la información requerida')    
    }else if (
        input.name === '' && 
        input.duration === '' &&
        input.difficulty === '' &&
        input.season === '' &&
        !input.countries.length) {
       alert ('No puede creear una nueva actividad si no completa el formulario')
    }else {
       dispatch (postActivity(input))
       alert(`Has creado ${input.name}, felicitaciones`)
       setInput({
        name: '',
        duration: '',
        difficulty: '',
        season: '',
        countries: [],   
       })
    }
    console.log(input)
}

function handleDelet (e) {
    setInput( (prevInputDel) => {
        const newInpuDel = {
            ...prevInputDel,
            countries : input.countries.filter((c => c !== e.target.id))
        }
        console.log(newInpuDel)
        return newInpuDel
    } )
}

useEffect(() => {
    dispatch(getAllCountry())
 },[dispatch])

    
    return (
        <div>    
           
            <div >
            <form onSubmit={handleSubmit} className="boxForm">
               
               <div className="boxNameD">
                  <input onChange= {handleChange} autoComplete="off" className="nombreForm" type= "text" name="name" 
                  placeholder="Nombre" value={input.name} />
                 <div>
                  {errors.name && (
                    <p className="errorNombreD">{errors.name} </p>
                  )}
                 </div> 
               </div>
               <br/>
        
               <div className="boxEstaciones" >
                  <div className="estacionesForm">
                     <input onClick={handleChange}  className="estVer" type="radio" name= "season" value ='Verano'/>
                     <input onClick={handleChange}  className="estOto" type="radio" name= "season" value="Otonio"/>
                     <input onClick={handleChange}  className="estInv" type="radio" name= "season" value= "Invierno"/>
                     <input onClick={handleChange}  className="estPrim" type="radio" name= "season" value="Primavera"/>
                  <div>
                  {errors.season && (
                      <p className="errorEsstacionesD">{errors.season} </p>
                      ) }
                  </div>
                </div>

               </div>
               <br/>
               
               <div className="boxDificultadD">
               <div className="dificultadForm">
                   <input onClick={(e)=>handleChange(e)} key= "1" className="dif1Form" type="radio" name="difficulty" value="1" />
                   <input onClick={handleChange}  className="dif2Form" type="radio" name= "difficulty" value="2"/>
                   <input onClick={handleChange}  className="dif3Form" type="radio"name= "difficulty" value="3"/>
                   <input onClick={handleChange}  className="dif4Form" type="radio" name="difficulty" value= "4"/>
                   <input onClick={handleChange}  className="dif5Form" type="radio" name="difficulty" value= "5"/>
               </div>
               <div className="nameDificulatadForm">Dificultad</div>
               {errors.difficulty && (
                      <p className="errorDificultadD">{errors.difficulty} </p>
                  ) }
                </div>
                <br/>

               <div className="boxDuracionD" >
                  <input  onChange={handleChange} className="duracionForm" autoComplete="off" type= "text" name='duration' 
                  value= {input.duration} placeholder="Duración de la actividad en minutos"/>
                  <div className="errorDuracionD">
                  {errors.duration && (
                      <p>{errors.duration} </p>
                  ) }
                  </div>
               </div>

               <div className="boxSelectD">
                   <select onChange= {handleSelectCoun} className="selectForm">
                      <option value= "" disabled selected>Selecionar paises</option>
                      {allConutriesSel && allConutriesSel.map((c) => (
                          <option key= {c.id} value= {c.name} >{c.name}</option>
                      )
                        ) }
                   </select>
                   {errors.countries && (
                       <p className="errorCoutSelectD">{errors.countries}</p>
                   )}
                {input.countries? <div>
                {input.countries?.map(c => 
                    (<div className="listaCountSelD"  key={c}>
                        <span>{c}</span>
                        <button className="botonDelet" id={c}  onClick={handleDelet}>x</button>
                    </div> 
                            ))}
                </div> : null  }
               </div>
               
               <div className="boxBotonCreateD">
               <button type='submit' className="botonCreateD"></button>
               </div>
            
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