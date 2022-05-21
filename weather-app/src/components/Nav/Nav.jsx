import React from 'react';
import { NavLink } from 'react-router-dom'
import SearchBar from '../Search/SearchBar.jsx';
import style from './Nav.module.css'
// import logo from './../../logoHenry.png'

export default function Nav(props) {
    return (
        <nav className={style.nav}>
            <NavLink to='/' style={{textDecoration: 'none'}}> <h1 className={style.title}>Henry Weather App</h1></NavLink>
            <NavLink to='/' style={{color: '#fff', marginRight: '10px'}}>Home</NavLink>
            <NavLink to='/about' style={{color: '#fff'}}>About</NavLink>
            
            <SearchBar onSearch={props.onSearch} />
        </nav>
    )
}