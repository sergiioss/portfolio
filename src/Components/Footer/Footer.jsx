import "./Footer.scss"
import {Row,Col} from 'react-bootstrap'

const Footer = () =>{

    return(
        <Row className="footer">
            <Row className="contact-me">
                <Col>
                    <h1>Mail para contactar</h1>
                </Col>
                <Col>
                    <form>
                        <fieldset>
                            <Col>
                                <input type="text" />
                            </Col>
                            <Col>
                                <input type="text" />
                            </Col>
                            <Col>
                                <input type="text" />
                            </Col>
                        </fieldset>
                    </form>
                </Col>
            </Row>
            <Row className="area">
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
            </Row>
        </Row>
    )
}
export default Footer