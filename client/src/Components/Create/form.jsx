import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './newActivity.css';
import { useHistory} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"
import {getAllCountry, postActivity} from '../../Redux/actions'

//LAS VALIDACIONES ESTÁN BIEN SALVO 03 YA NO LO TOMA COMO 0... Y LO QUE VA DICIENDO EN EL RESTO DEL DOC...
//ANDA, PERO CON ALGUNOS PAICES NO... VER QUE ONDA
//NO ESTRA A LA VALIDACION DEL ELSE IF Y SI BORRO TODOS LOS QUE SELECCIONE ME LO DEJA HACER IGUAL! Y ME MUESTRA EL CARTEL PORQUE NO 
//TIENEN UN DELILEY EN CONSOLA. camilo en una clase lo muetra como solucionar.
//ME GUSTARPIA QUE APAREZCA DE A UNO LOS ERRORES, SI QUEDA TIEMPO HACER ESO.
//TENES QUE SELECCIONAR MÁS DE UN PAIS...
export function validate (input) {
    let errors = {};
//Nombre   
    if (!input.name) {
       errors.name = "Campo requerido"
    }else if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)) {
       errors.name= "Ingrese más de una letra ,la primera letra en Mayúscula, solo letras y números"
    }
 //duration
    if (!input.duration) {
       errors.duration = "Campo requerido"
    }else if (!/^[0-9]\d*(\.\d+)?$/.test(input.duration)) {
       errors.duration = "Solo numeros enteros"
    }else if (input.duration < 1) {
       errors.duration = "Estamos perzosos hoy?, debe ser mayor a 0"
    }else if (input.duration > 480) {
       errors.duration = "Woo sí que tenés energía, no puedes superar los 480 (8h)"
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
    //e.preventDefault() porque en los change si prevengoeldefalut no no0 marca los radio?
    setInput ((prevInput) => {
        const newInput = {
            ...prevInput,
            [e.target.name]: e.target.value
        }
      console.log(newInput)
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
        console.log(newInputSelect)
        const validations = validate(newInputSelect);
        setErrors(validations)
        return newInputSelect
  });
  
  };

// ALGO ANDA MAL, NO ENTRA EN EL ELSE IF invertir...
function handleSubmit (e) {
    // e.preventDefault();
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
       alert('Has crado una nueva actividad, felicitaciones')
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
            countries : prevInputDel.countries.filter((c, index) => index !== e)
        }
        // console.log(newInpuDel)
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
               {/* para desavilitar y habilitar estos hay que usas estados */}
               {/* ¿cómo hago que estos (radio y checkbox) esten dentro de un "name" en el input y demás? ya que son solo elementos de lectura? */}
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
                {input.countries?.map((c, index) => 
                    (<div className="listaCountSelD"  key={c}>
                        <span>{c}</span>
                        <button className="botonDelet" onClick={()=> handleDelet (index)}>x</button>
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