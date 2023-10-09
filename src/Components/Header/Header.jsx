import "./Header.scss"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/sergio.jpg"
import {Row,Col } from 'react-bootstrap'
import {NavLink} from 'react-bootstrap'


const Header = () => {

    return (
        <Row className="header" sm={12} md={12} xl={12}>
                <Col className="photo">
                    <img className="iconName" src={img4} />
                </Col>
                <Col className="links" sm={6} md={6} xl={6}>
                    <p>
                        <NavLink className="github" href='https://github.com/sergiioss' target="blank"><img className="icon" href='https://github.com/sergiioss' src={img2} />Github</NavLink>
                        <NavLink className="github" href='https://www.linkedin.com/in/sergiosotosousa' target="blank"><img className="icon" src={img3} />Linkedin</NavLink>
                    </p>
                </Col>
        </Row>
    )
}
export default Header