import React from "react";
import './countryAndActivity.css'



export default function CardActivity ({name, difficulty, duration, season}) {
    return (
        <div>
            <div>{name}</div>
            <div>{difficulty}</div>
            <div>{duration}</div>
            <div>{season}</div>
        </div>
    )
}