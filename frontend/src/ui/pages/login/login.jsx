import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../routes/path";
import "./login.css"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import { NewAccount } from "../../components/newAccount/newAccount";


export const Login = (props) => {

  const [emailUser, setEmailUser] = useState();
  const [passwordUser, setPasswordUser] = useState();
  const [isPopUp, setIsPopUp] = useState(false);
  const [enterLogin, setEnterLogin] = useState(false);

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
    setEmailUser(event.target.value)
  }

  function handleChangePassword(event) {
    setPasswordUser(event.target.value)
    if(event.target.value.length >= 6){
      setEnterLogin(!enterLogin)
    }
  }

  useEffect(() => {
    console.log(emailUser)
    console.log(passwordUser)
    signInWithEmailAndPassword(auth, emailUser, passwordUser)
      .then((userCredential) => {
        console.log("chegou aqui")
        const user = userCredential.user;
        toMainScreen()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Erro")
        console.log(errorMessage)
        console.log("code")
        console.log(errorCode)
      });
  }, [enterLogin])

  const navigate = useNavigate()
  const toMainScreen = () => {
    navigate(PATHS.MAIN, {
      state: {
        name: emailUser
      }
    })
  }

  return (
    <div className={"container"}>
      <div className={"login-logo"}></div>
      <form className={"login-form"}>
        {isPopUp && <NewAccount setIsPopUp={setIsPopUp} />}
        <div className={"login-title"}>
          <h3 className={"login-title-left"}> Entre no </h3>
          <h3 className={"login-title-right"}> Payway </h3>
        </div>
        <label htmlFor="email" className={"login-title-input"}>
          <p>Email </p> <p className={"login-tittle-input-red"}>*</p>
        </label>
        <input onChange={handleChangeEmail} className={"login-input-style"} type="text" name="email" id="email" />
        <label htmlFor="password" className={"login-title-input"}>
          <p>Senha</p> <p className={"login-tittle-input-red"}>*</p>
        </label>
        <input onChange={handleChangePassword} className={"login-input-style"} type="password" name="password" id="password" />
        <div className={"login-checkbox"}>
          <input type="checkbox" id="form-remember" />
          <label htmlFor="form-remember">Lembre-me</label>
        </div>
        <input className={"login-submit-style"} type="submit" name="Entrar" value="Entrar" />
      </form>
      <p className={"login-forgot"}> Esqueceu sua senha? </p>
      <div className={"login-register"}>
        <p> Não tem uma conta ? </p> <p className="login-register-right" onClick={() => setIsPopUp(!isPopUp)}>Cadastre-se</p>
      </div>
    </div>
  )
}
