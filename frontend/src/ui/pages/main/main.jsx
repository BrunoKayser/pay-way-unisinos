import React, {useEffect, useState} from 'react';
import './main.css'
import {FormAddBill} from "../../components/form/formAddBill";
import {Bill} from "../../components/bill/bill"
import {Total} from "../../components/totalAmount/total"
import {TitleMain} from "../../components/titleMain/titleMain"
import { MdAttachMoney } from "react-icons/md";
import { useLocation } from 'react-router-dom';


export const Main = ({nome}) => {

    const location = useLocation();
    const [billsList, setBillsList] = useState([]);
    const [isPopUp, setIsPopUp] = useState(false);
    const [bill, setBill] = useState({});
    const [isRefresh, setIsRefresh] = useState(false);
    const [path, setPath] = useState("http://localhost:8080/bill/list/" + location.state.name)


    useEffect(() => {
        setTimeout ( () => {
            fetch(path)
            .then((response) => response.json())
            .then((responseJson) => setBillsList(responseJson.bills))
        }, 500)

	}, [isRefresh])

    return (
        <div className = "container">
            <TitleMain userName={location.state.name} billsList={billsList} />
            <div className = "container-bills">
                {isPopUp && <FormAddBill setPopUp={setIsPopUp} setIsRefresh={setIsRefresh} email={location.state.name}/>}
                <ul>
                    {billsList.map((bill,index)=>
                        <li key={index}>
                            <Bill bill={bill} setBill={setBill} setIsRefresh={setIsRefresh} email={location.state.name}/>
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <Total 
                    quantoFalta={billsList.reduce((total, currentValue) => currentValue.isPay ? parseInt(total) + 0 : parseInt(total) + parseInt(currentValue.value), 0)}
                    totalPago = {billsList.reduce((total, currentValue) => currentValue.isPay ? parseInt(total) + parseInt(currentValue.value) : parseInt(total) + 0, 0)} />
                <div className="new-bill" onClick={()=> setIsPopUp(!isPopUp)}>
                    <MdAttachMoney size="30"/>
                    <div>Nova despesa</div>
                </div>
            </div>
        </div>
    )
};
