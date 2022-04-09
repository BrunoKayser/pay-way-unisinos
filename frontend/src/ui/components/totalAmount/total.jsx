import React, {useState} from 'react';
import "./total.css"

export const Total = ({totalPago, quantoFalta}) => {
    
    return (
            <div>
                <p>Total Pago: R$ {totalPago}</p>
                <p>Quanto falta: R$ {quantoFalta}</p>
            </div>
    )
}