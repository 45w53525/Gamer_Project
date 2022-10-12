import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import AuthContext from '../../store/authcontex';
import { useHistory } from 'react-router-dom';


const ProfileForm = () => {

  const History = useHistory();
  const passwordinput = useRef();

  const authctx = useContext(AuthContext);

  const submithandler = (event) => {

    event.preventDefault();


    const passwordvalue = passwordinput.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCVAWaPMU37zvGbq_iBSkNnMeDKfLoZFGE', {

      method: 'POST',
      body: JSON.stringify({
        idToken: authctx.token,
        password: passwordvalue,
        returnSecureToken: false

      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(res => {

      History.replace('/');

    });



  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={passwordinput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
