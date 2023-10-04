import React from 'react'
import "./Header.scss"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/sergio.jpg"


const Header = props => {

    return (
        <div className="header">
            <div className="photo">
                <img className="iconName" src={img4} />
            </div>
            <div>
                <p>
                    <a className="github" href='https://github.com/sergiioss' target="blank"><img className="icon" href='https://github.com/sergiioss' src={img2} />Github</a>
                    <a className="github" href='https://www.linkedin.com/in/sergiosotosousa' target="blank"><img className="icon" src={img3} />Linkedin</a>
                </p>
            </div>
        </div>
    )
}
export default Header