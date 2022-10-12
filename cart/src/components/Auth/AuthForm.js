import { useState, useContext } from 'react';
import { useRef } from 'react';
import AuthContext from '../../store/authcontex';
import classes from '../Auth/AuthForm.module.css';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setisloading] = useState(false);
  const emailinput = useRef();
  const passwordinput = useRef();
  const authctx = useContext(AuthContext);
  const History = useHistory();
  const submithandler = (event) => {
    event.preventDefault();
   
    const emailvalue = emailinput.current.value;
    const passwordvalue = passwordinput.current.value;
    
    // console.log(emailvalue);
    // console.log(passwordvalue);

    setisloading(true);
    let URL;
    if (isLogin) {
      URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVAWaPMU37zvGbq_iBSkNnMeDKfLoZFGE';
    } else {
      URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVAWaPMU37zvGbq_iBSkNnMeDKfLoZFGE'
    }
    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify({
          email: emailvalue,
          password: passwordvalue,
          returnsecuretoken: true
        }),
        headers: {
          'Content-Type': 'application/json'

        }
      }
    ).then((res) => {

      if (res.ok) {
        return res.json();

      } else {
        return res.json().then((data) => {
          let error = "Authentication failed";
          if (data && data.error && data.error.message) {

            error = data.error.message;
          }

          throw new Error(error);
          console.log(data);

        });


      }

    }).then((data) => {
      authctx.login(data.idToken);
      History.replace('/home')
    }).catch((error) => {
      alert(error.message);

    });

  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor='email' >Your Email </label>
          <input type='email' id='email' required ref={emailinput} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordinput} />
        </div>
        <div className={classes.actions}>
          {<button>{isLogin ? 'Login' : 'Create Account'}</button>}

          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
