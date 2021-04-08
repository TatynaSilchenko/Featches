import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.headerWrapper}>
            <input type="checkbox" id="hmt" className={s.hiddenMenuTicker}/>
            <label className={s.btnMenu} htmlFor="hmt">
                <span className={s.first}></span>
                <span className={s.second}></span>
                <span className={s.third}></span>
            </label>
            <ul className={s.nav}>
                <li> <NavLink to="/pre-junior" activeClassName="selected">Home </NavLink></li>
                <li><NavLink to="/pre-list" activeClassName="selected">List </NavLink></li>
                <li><NavLink to="/pre-text-input" activeClassName="selected">Input </NavLink></li>
                <li><NavLink to="/pre-button" activeClassName="selected">Button </NavLink></li>
            </ul>
            </div>
    )
}

export default Header
