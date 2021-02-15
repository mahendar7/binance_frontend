import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'
import store from "../../redux/store";

function Hero() {
    const [token, settoken] = useState()
    

    useEffect(() => {
    const unsubscribe = store.subscribe(() => {
        settoken(store.getState().token)
        });
    }, []);

      
    return (
        <div className="hero">
            <span className="title">Buy & sell Crypto in minutes</span> 
            <span className="sub-title">Join the world's largest crypto exchange</span>
            
                <div className="signUp">
                    { token != null ? null : <input type="text" placeholder="Email Address/Phone Number"/> }
                    { token != null ? 
                        <Link to="/trade/BTC_USD">
                            <button className="btn btn-yellow">Buy Now</button>
                        </Link> :
                        <Link to="/auth">
                            <button className="btn btn-yellow">Register Now</button>
                        </Link>
                    }
                </div>
        </div>
    )
}

export default Hero
