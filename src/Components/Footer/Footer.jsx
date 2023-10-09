import "./Footer.scss"
import {Row} from 'react-bootstrap'

const Footer = () =>{

    return(
        <Row className="footer">
            <p>
               SOY EL FOOTER
            </p>
            <Row className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Row >
        </Row>
    )
}
export default Footer