import React from "react";
import './newActivity.css';
import BarraRutas from "../NavBar/Barra/barra";
import Form from "./form";


export default function NewActivity (){
    return (
        <div>
            <div className="barraPoscCrea">
               <BarraRutas/>
            </div>
            <Form/>
        </div>
    )
}