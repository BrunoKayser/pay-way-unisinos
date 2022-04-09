import './style.css'
import React, {useState} from 'react';
import {PATHS} from "../../../routes/path" 
import {Link} from "react-router-dom"
import { IoIosArrowDropleftCircle } from "react-icons/io";

export const TitleMain = ({userName, billsList}) => {

    const [name, setName] = useState();
    const [isOneRender, setIsOneRender] = useState(true);

    function getName() {
        var dot;
        var trace;
        var underline;
        var arroba;

        if (userName.indexOf(".") >= 0) {
            dot = userName.indexOf(".")
        } else {
            dot = 100;
        }

        if (userName.indexOf("-") >= 0) {
            trace = userName.indexOf("-")
        } else {
            trace =100;
        }

        if (userName.indexOf("_") >= 0) {
            underline = userName.indexOf("_")
        } else {
            underline = 100
        }

        if (userName.indexOf("@") >= 0) {
            arroba = userName.indexOf("@")
        } else {
            arroba = 100;
        }
        
        var position = Math.min(dot, trace, underline, arroba)
        setName(userName.substring(0, position))
        
        setIsOneRender(false)
        return name;
    }

    return (
            <div>
                <Link to={PATHS.LOGIN}> 
                    <IoIosArrowDropleftCircle className={"button-back"} />
                </Link> 
                {isOneRender && getName()} 
                <h2 className="title">Olá, {name}!</h2>
                <span className="title-bills" > {billsList.length == 0 ? "Felizmente não há contas a pagar 😍"  : "Aqui estão as suas contas a pagar 😊"} </span>
            </div>
    )
}