import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import './newAccount.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { PATHS } from "../../../routes/path";

export const NewAccount = ({ setIsPopUp }) => {

    const [emailUser, setEmailUser] = useState();
    const [passwordUser, setPasswordUser] = useState();
    const navigate = useNavigate()
    const [createLogin, setCreateLogin] = useState(false);

    const firebaseConfig = {
        apiKey: "AIzaSyDpznpNCtRGeEowJ3DsywAVGMNP59leBqM",
        authDomain: "uni-pay-way.firebaseapp.com",
        projectId: "uni-pay-way",
        storageBucket: "uni-pay-way.appspot.com",
        messagingSenderId: "179524725993",
        appId: "1:179524725993:web:476fd9655da0634d1f5478",
        measurementId: "G-01KWMLZG82"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    function handleChangeEmail(event) {
        console.log(event.target.value)
        setEmailUser(event.target.value)
    }

    function handleChangePassword(event) {
        console.log(event.target.value)
        setPasswordUser(event.target.value)
        if(event.target.value.length >= 6){
            setCreateLogin(!createLogin)
        }
    }

    useEffect(() => {
        createUserWithEmailAndPassword(auth, emailUser, passwordUser)
        .then((userCredential) => {
            console.log(emailUser)
            console.log(passwordUser)
            navigate(PATHS.MAIN, {
                state: {
                    name: emailUser
                }
            })
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Erro")
            console.log(errorMessage)
            console.log("code")
            console.log(errorCode)
        })
    }, [createLogin])

    return (
        <div className={"container-new-account"}>
            <form>
                <h3 className={"new-account-title"}> Cadastro </h3>
                <label htmlFor="email" className={"login-title-input"}>
                    <p>Email </p>
                </label>
                <input onChange={handleChangeEmail} className={"login-input-style"} type="text" name="email" id="email" placeholder='Insira seu email' />
                <label htmlFor="password" className={"login-title-input"}>
                    <p>Senha de 6 digitos</p>
                </label>
                <input onChange={handleChangePassword} className={"login-input-style"} type="text" name="password" id="password" placeholder='Digite sua senha' />
                <input  className={"login-submit-style"} type="button" name="Entrar" value="Cadastrar" />
            </form>
            
            <button className={"login-close"} onClick={() => setIsPopUp(true)}>Voltar</button>
        </div>
    )

} 