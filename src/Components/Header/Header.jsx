import React from 'react'
import "./Header.scss"
import {NavLink} from 'react-router-dom'

const Header = props =>{

    return(
        <div className="header">
            <p>
                <a className="github" href='https://github.com/sergiioss' target="blank">Github</a>
                <a className="github" href='https://www.linkedin.com/in/sergiosotosousa' target="blank">Linkedin</a>
            </p>
        </div>
    )
}
export default Header