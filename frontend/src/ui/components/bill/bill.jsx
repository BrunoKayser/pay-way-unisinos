import './bill.css'
import React from 'react';
import { BsHandbagFill } from "react-icons/bs"

export const Bill = ({bill, setBill, setIsRefresh, email}) => {

    function changeIsPay() {
        setBill(bill.isPay = !bill.isPay);
        setIsRefresh(isRefresh => !isRefresh)

        fetch('http://localhost:8080/bill', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({     
                title: bill.title,
                payDate: bill.payDate,
                value: bill.value,
                isPay: bill.isPay,
                email: email
            }),
        })    
    
    }

    return (
            <div className="container-bill">
                <div className="img-bill">
                    <BsHandbagFill className="img-bill-icon" />
                </div>
                <div className = "bill-information">
                    <h3>{bill.title}</h3>
                    <p>Vencimento: {new Date(bill.payDate.toString()).toLocaleDateString("pt-BR")}</p>
                    <p>Total: R$ {bill.value}</p>
                    <p>Conta Paga: {bill.isPay ? 'Sim' : "não"}</p>
                </div>
                <button onClick={changeIsPay} className = "bill-button"> Pagar </button>
            </div>
    )
}