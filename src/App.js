import React, { useState } from 'react'
import classes from './password.module.scss'


function App() {
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false);
  const [score, setScore] = useState(null)
  console.log(`score`, score)


  //  const pass = ()=>{
  //   setPassword(e.target.value)
  //  }

  // useEffect(() => {
  //   console.log(`password`, password)
  // }, [password])

  const checkPasswordScore = () => {
    let _score = upperCaseCheck() + lowerCaseCheck() + numberCaseCheck() + symbolCaseCheck() + symbolCaseCheck() + lengthCheck();
    setScore(_score)

  }

  const upperCaseCheck = () => {
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    return (isContainsUppercase.test(password)) ? 1 : 0;
  }

  const lowerCaseCheck = () => {
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    return (isContainsLowercase.test(password)) ? 1 : 0;
  }

  const numberCaseCheck = () => {
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    return (isContainsNumber.test(password)) ? 1 : 0;
  }

  const symbolCaseCheck = () => {
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()-+={}\]|:;"'<>,.?/_₹]).*$/;
    return (isContainsSymbol.test(password)) ? 1 : 0;
  }

  const lengthCheck = () => {
    return (password.length >= 8) ? 1 : 0;
  }



  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  const clearPasswordInput = () => {
    setPassword("")
  }

  const getPasswordStrength = (score) => {
    if (score <= 2) {
      return 'Weak';
    } else if (score <= 4) {
      return 'Moderate';
    } else if (score >= 5) {
      return 'Strong';
    }
  }


  return (
    <div className={classes.formPage}>

      <div className={classes.form}>
        <span className={classes.passwordText}>Password :</span>
        <input className={classes.passwordInput} type={passwordShown ? "text" : "password"} value={password} onChange={(e) => { setPassword(e.target.value) }} >
        </input>
      </div>

      <div className={classes.buttonSection}>

        <div className={classes.showOrHidePasswordButton}>
          <button className={classes.showAndHide} onClick={togglePassword} >{passwordShown ? "Hide" : "Show"}</button>
        </div>

        <div className={classes.clearButton}>
          <button className={classes.clear} onClick={clearPasswordInput}>Clear</button>
        </div>

      </div>

      <div className={classes.submitButton}>
        <button className={classes.submit} onClick={checkPasswordScore}>Submit</button>
      </div>

      {score != null ?
        <div className={classes.result} >
          <span className={classes.scoreText}>score:  </span>
          <span className={getPasswordStrength(score) === "Weak" ?
            classes.weak :
            getPasswordStrength(score) === "Moderate"
              ? classes.moderate :
              classes.strong}>{getPasswordStrength(score)}</span>
        </div>
        : null
      }

    </div >
  );
}

export default App;
