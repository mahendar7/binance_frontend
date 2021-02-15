import React, { useEffect, useState } from 'react'
import './Auth.scss';
import Header from '../Header/Header'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useHistory } from 'react-router';

import axios from "axios";
import store from "../../redux/store";
import { TOKEN, USER } from '../../redux/actionTypes';

function Auth() {
    const history = useHistory();
    const [token, setToken] = useState(null)

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
          setToken(store.getState().token)
        })
    }, [])
    
    if(token != null){
        history.push('/')
    }
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [referral, setReferral] = useState();
    const [error, setError] = useState('');

    
    const [currentOption, setCurrentOption]  = useState('login');
    const [showReferral, setShowReferral]  = useState(false);

    const handleOptionChange = (e,value) =>{
        setCurrentOption(value)
    }

    const handleShowReferral = (e,value) =>{
        setShowReferral(!showReferral)
    }

    const submit = async () => {
                setError('');

                const newUser = {name, email, password, referral};
                const loginUser = {email, password};
                console.log(loginUser);
                let loginResponse;

                try{
                    if(currentOption === 'login'){
                        loginResponse = await axios.post("http://localhost:3333/api/auth/login", loginUser);
                    }else{
                        await axios.post("http://localhost:3333/api/auth/register", newUser);
                        loginResponse = await axios.post("http://localhost:3333/api/auth/login", {
                            email, password
                        });
                    }
                    store.dispatch({
                        type: TOKEN,
                        token: loginResponse.data.token,
                      });
                      store.dispatch({
                        type: USER,
                        user: loginResponse.data,
                      });

                    localStorage.setItem("auth-token", loginResponse.data.token);
                    history.push("/");
                    } 
                catch(err) {
                    if(err.response.data.msg){setError(err.response.data.msg); setTimeout(() => {
                        setError('')
                    }, 3000);}
                }
            };

    return (
        <div className="authMain">
            <Header />
            <div className="auth">
            
                <h1 className="authTitleCreate">{currentOption === 'register' ? 'Create a free account' : 'Login Now' }</h1>
                <h6 className="authTitleWelcome">Welcome to Binance</h6>

                <div className="form">
                    {currentOption === 'register' ?
                        <div className="inputWrapper">
                            <label>Name</label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div> : null 
                    }
                    <div className="inputWrapper">
                        <label>Email</label>
                        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off"/>
                    </div>
                    <div className="inputWrapper">
                        <label>Password</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="off"/>
                    </div>
                    {currentOption === 'register' ?
                        <div className="inputWrapper">
                            <label className="clickable" onClick={handleShowReferral}>Referral ID (Optional) 
                                {( showReferral ? <ArrowDropUpIcon className="dropdownIcon"/> : <ArrowDropDownIcon className="dropdownIcon" />  )}
                            </label>
                            {( showReferral ? <input type="text" id="referral" value={referral} onChange={e => setReferral(e.target.value)} autoComplete="off"/> : null)}
                        </div> : null
                    }
                    <span className="terms">I have read and agree to the Terms of Service.</span>
                    <button className="AuthBtn" onClick={submit}>
                        {currentOption === 'login' ? 'Log In' : 'Create Account'}
                    </button>
                    {error !== '' ? <span className="error"> {error}</span> : null}
                    {currentOption === 'register' ? 
                    <span className="alreadyReg">Already registered? <span className="" onClick={(e) => handleOptionChange(e,'login')}>Log In</span></span>
                    :
                    <div className="regHelper">
                        <span className="forgotPassword" onClick={(e) => handleOptionChange(e,'login')}>Forgot Password</span>
                        <span className="alreadyReg"><span className="" onClick={(e) => handleOptionChange(e,'register')}>Free Registration</span></span>
                    </div>
                    } 

            </div>
        </div>
    
        </div>
        )
}

export default Auth
