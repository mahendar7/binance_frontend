import React, { Fragment, useEffect, useState } from "react";
import "./Header.scss";
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom'
import store from "../../redux/store";

function Header() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setToken(store.getState().token)
      console.log(store.getState().token);
    })
  }, [])
  
  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className="list-item"/>
        </Link>
        <AppsIcon className="list-item list-item-icon"/>
        <span className="list-item">Buy Crypto <span className="special"> INR </span> <ArrowDropDownIcon className="down"/></span>
        <span className="list-item"> Markets </span>
        {/* <Link to="/market">Markets</Link>   */}
        <span className="list-item">Trade <ArrowDropDownIcon className="down"/></span>
        <span className="list-item">Derivatives <ArrowDropDownIcon className="down"/></span>
        <span className="list-item">Finance <ArrowDropDownIcon className="down"/></span>
      </div>
      <div className="right">

        {token ? 
          <Fragment>
            <span className="list-item">Wallet <ArrowDropDownIcon className="down"/></span>
            <span className="list-item">Orders <ArrowDropDownIcon className="down"/></span>
            <AccountCircleOutlinedIcon className="list-item list-item-icon"/>
            <NotificationsNoneIcon className="list-item list-item-icon "/>
          </Fragment>
          : 
          <Fragment>
            <span className="list-item"> <Link to="/auth">Login</Link></span>
            <Link to="/auth">
              <button className="btn btn-yellow header-btn">Register</button>
            </Link>
          </Fragment>
        }
        <SystemUpdateIcon className="list-item list-item-icon"/>
        <span className="list-item">English/USD <ArrowDropDownIcon className="down"/></span>
      </div>
      {/* <p>{token}</p> */}
    </div>
  );
}

export default Header;
